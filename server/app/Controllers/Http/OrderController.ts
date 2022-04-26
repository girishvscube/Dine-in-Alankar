import { calculate } from 'App/Helpers/helpers'
import Menu from 'App/Models/Menu'
import MetaOrder from 'App/Models/MetaOrder'
import Order from 'App/Models/Order'
const Validator = require('validatorjs')


export default class OrderController {
  /**
   *
   * @param request
   * @param response
   */
  async index({ request, response }) {
    const data = await Order.listing(request)
    return response.ok({ data: data })
  }

  /**
   *
   * @param request
   * @param response
   */
  async store({ request, response }) {
    const rules: any = {
      name: 'required|max:150',
      email: 'required|email',
      phone: 'required|string',
    }
    let price = 0
    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    let order = new Order()
    this.autoIncrementBillNo()
    try {
      let payload = request.body()
      let items = payload.items
      items = await Promise.all(
        items.map(async (item) => {
          const menu: any = await Menu.query().where('id', item.menu_id).preload('category').first()
              
          if (payload.order_type === 2 || payload.order_type === 3) {
            price = menu.takeaway_price
          } else {
            price = menu.dinein_price
          }
          const sub_total = price * item.quantity
          item.sub_total = sub_total
          item.category_id = menu.category_id
          item.gst = menu.category.gst
          item.price = menu.price
          return item
        })
      )

      const { sub_total, tax, final_total } = await calculate(items)
      order.name = payload.name
      order.phone = payload.phone
      order.email = payload.email
      order.table_id = payload.table_id || null
      order.order_type = payload.order_type
      order.total_persons = payload.total_persons || null
      order.instructions = payload.instructions
      order.sub_toal = sub_total
      order.tax = tax
      order.total = final_total
      order.bill_no = await this.autoIncrementBillNo()
      order.payment_status = 'PENDING'
      order.date_of_occassion = payload.date_of_occassion || null
      order.advance_received = payload.advance_received || null
      order.occassion = payload.occassion || null
      await order.save()

      for (let item of items) {
        await MetaOrder.create({
          menu_id: item.menu_id,
          category_id: item.category_id,
          order_id: order.id,
          price: item.price,
          quantity: item.quantity,
          gst: item.gst,
        })
      }
      await this.updateMenuAvaliabilityCount(items) // update menu availability count
      return response.ok({
        message: 'Order Create Successfully',
      })
    } catch (exception) {
      return response.internalServerError(exception)
    }
  }

  public async updateMenuAvaliabilityCount(items) {
    for (let item of items) {
      const menu = await Menu.query().where('id', item.menu_id)
      const availability_count = menu[0].availability_count
      if (availability_count > 0) {
        const new_availability_count = availability_count - item.quantity
        await Menu.query().where('id', item.menu_id).update({
          availability_count: new_availability_count,
        })
      } else {
        await Menu.query().where('id', item.menu_id).update({ availability_count: 0 })
      }
    }
  }

  public async autoIncrementBillNo() {
    //   to get latest added row
    const latest = await Order.query().orderBy('id', 'desc').first()
    const billing = latest?.bill_no || 1000
    const bill = Number(billing) + 1
    return bill.toString()
  }

  public async updateStatus({ request, response, params }) {
    try {
      const order = await Order.findOrFail(params.id)
      const payload = request.body()
      order.payment_status = payload.payment_status ? 'PAID' : 'PENDING'
      await order.save()
      return response.ok({
        message: 'Order Payment Status Updated Successfully',
      })
    } catch (exception) {
      return response.internalServerError(exception)
    }
  }

  public async show({response,params }) {
    try {
      const data = await Order.query().where('id', params.id).preload('table',(query)=>{
        query.preload('users',(query)=>{
          query.preload('role')
        })
      }).preload('meta_order',(query)=>{
        query.preload('menus')
      })
      
      return response.ok({ data: data })
    } catch (exception) {
      return response.internalServerError(exception)
    }
    
  }

  public async activeOrders({ response,request }) {
    try {
      const {order_type,page ,id} = request.all()
      if(id){
        const data = await Order.query()
        .where('payment_status', 'PENDING')
        .where('order_type', '=', order_type)
        .where('id', '=', id)
        .preload('table').preload('meta_order')
        .paginate(page, 10)
        return response.ok({ data: data })
      }
      else{
        const data = await Order.query()
        .where('payment_status', 'PENDING')
        .where('order_type', '=', order_type)
        .preload('table').preload('meta_order')
        .paginate(page, 10)
      return response.ok({ data: data })
    }
      
    } catch (exception) {
      console.log(exception.message)
      return response.internalServerError(exception)
    }
  }

  public async pastOrders({request,response}){
    const {order_type,page,id } = request.all()
    if(id){
      const data = await Order.query()
      .where('payment_status', 'PAID')
      .where('order_type', '=', order_type)
      .where('id', '=', id)
      .preload('table').preload('meta_order')
      .paginate(page, 10)
      return response.ok({ data: data })
    }
    else{
      const data = await Order.query()
    .where('payment_status', 'PAID')
    .where('order_type', '=', order_type)
    .preload('table').preload('meta_order')
    .paginate(page,10)
     response.ok({ data: data })
     if(!data) throw new Error('No Data Found')

    }
    

  }

  public async getOrdersbytype({ response,request }) {
    const order_type = request.all().order_type
    const page = request.all().page
    const takeawayorders = await Order.query()
      .preload('meta_order', (query) => {
        query.preload('menus')
      })
      .where('order_type', '=', order_type)
      .paginate(page, 10)
    return response.ok({ data: takeawayorders })
  }

  public async revenue({ response, request }) {
    const order_type = request.all().order_type
    const revenue = await Order.query().sum('total as total').where('payment_status', 'PAID')
    const data = await Order.query()
      .sum('total as total')
      .where('payment_status', 'PAID')
      .where('order_type', '=', order_type)
    const orders = await Order.query().count('* as total')
    const data1 = await Order.query().count('* as total').where('order_type', '=', order_type)

     response.ok({ revenue, data, orders, data1 })

  }


  public async TableTransfer({ request, response }) {
    const rules: any = {
      table_id: 'required|integer',
    }
    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }
    try {
      const order_id = request.all().order_id
      const order = await Order.findOrFail(order_id)
      order.table_id = request.all().table_id
      await order.save()
      return response.ok({
        message: 'Order Table Transfer Successfully',
      })
    } catch (exception) {
      return response.internalServerError(exception)
    }
  }



  public async getOrdersbytypeandDate({ response,request }) {
    const order_type = request.all().order_type
    const date = request.all().date
    const page = request.all().page
    const takeawayorders = await Order.query()
      .preload('meta_order', (query) => {
        query.preload('menus')
      })
      .where('order_type', '=', order_type).andWhere('created_at', 'like', `${date}%`)
      .paginate(page, 10)
    return response.ok({ data: takeawayorders })
  }

}
