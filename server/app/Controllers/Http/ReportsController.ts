import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'
import { LastWeek, ThisMonth_date, Thisweek, Today, Yesterday } from 'App/Helpers/helpers'
import ExceptionHandler from 'App/Exceptions/Handler'
import MetaOrder from 'App/Models/MetaOrder'


export default class ReportsController {
  public async revenue({ response, request }: HttpContextContract) {
    try {
      const data = request.all()
      const revenue = await Order.query()
        .sum('total as total')
        .where('payment_status', 'PAID')
        .whereBetween('created_at', [data.startDate, data.endDate])
      return response.ok({ data: revenue })
    } catch (err) {
      throw new ExceptionHandler()
    }
  }

  public async Today({ response }: HttpContextContract) {
    const today = await Today()
    const revenue = await Order.query()
      .sum('total as total')
      .where('payment_status', 'PAID')
      .where('created_at', 'LIKE', `${today}%`)

    return response.ok({ data: revenue })
  }

  public async Yesterday({ response }: HttpContextContract) {
    const yesterday = await Yesterday()
    const revenue = await Order.query()
      .sum('total as total')
      .where('payment_status', 'PAID')
      .where('created_at', 'LIKE', `${yesterday}%`)
    return response.ok({ data: revenue })
  }

  public async ThisWeek({ response }: HttpContextContract) {
    const { weekDate, today } = await Thisweek()
    const revenue = await Order.query()
      .sum('total as total')
      .where('payment_status', 'PAID')
      .whereBetween('created_at', [weekDate, today])
    return response.ok({ data: revenue })
  }

  public async LastWeek({ response }: HttpContextContract) {
    const { lastweekDate, weekDate } = await LastWeek()
    const revenue = await Order.query()
      .sum('total as total')
      .where('payment_status', 'PAID')
      .whereBetween('created_at', [lastweekDate, weekDate])
    return response.ok({ data: revenue })
  }

  public async ThisMonth({ response }: HttpContextContract) {
    const { monthDate, today } = await ThisMonth_date()
    const revenue = await Order.query()
      .sum('total as total')
      .where('payment_status', 'PAID')
      .whereBetween('created_at', [monthDate, today])
    return response.ok({ data: revenue })
  }

  public async particularDate({ response, request }: HttpContextContract) {
    const data = request.all()
    const revenue = await Order.query()
      .sum('total as total')
      .where('payment_status', 'PAID')
      .where('created_at', 'LIKE', `${data.date}%`)
    return response.ok({ data: revenue })
  }

  public async itemSold({ response, request }: HttpContextContract) {
    const { datee } = request.all()

    try {
      if (datee) {
        const data = await MetaOrder.query()

          .groupBy('menu_id')
          .sum('quantity as quantity')
          .select('price', 'menu_id')
          .preload('menus', (query) => {
            query.select('name')
          })
          .where('created_at', 'LIKE', `%${datee}%`)
        const res = data.map((item) => {
          console.log(item)
          return {
            item: item.menus.name,
            quantity: item.quantity,
            total: parseFloat(item.price) * parseFloat(item.quantity),
          }
        })

        return response.ok({ data: res })
      } else {
        const data = await MetaOrder.query()

          .groupBy('menu_id')
          .sum('quantity as quantity')
          .select('price', 'menu_id')
          .preload('menus', (query) => {
            query.select('name')
          })
        const res = data.map((item) => {
          console.log(item)
          return {
            item: item.menus.name,
            quantity: item.quantity,
            total: parseFloat(item.price) * parseFloat(item.quantity),
          }
        })

        return response.ok({ data: res })
      }
    } catch (err) {
      throw new ExceptionHandler()
    }
  }

  public async totalItemSold({ request, response }: HttpContextContract) {
    try {
      const data = await this.generatesales()
      const order_type = request.all().order_type
      const order_wise = await Order.query()
        .select('id')
        .preload('meta_order', (query) => {
          query.select('quantity').sum('quantity as quantity')
        })
        .where('order_type', order_type)
        .where('payment_status', 'PAID')
      return response.ok({ data: data[0], data1: order_wise[0] })
    } catch (err) {
      throw new ExceptionHandler()
    }
  }

  public async generatesales() {
    const data = await Order.query()
      .select('id')
      .preload('meta_order', (query) => {
        query.select('quantity').sum('quantity as quantity')
      })
      .where('payment_status', 'PAID')
    return data
  }

  public async customers({ response }: HttpContextContract) {
    const data = await Order.query().count('id as total')
     response.ok({ data: data })

    if(!data) throw new ExceptionHandler()
  }

  public async revenu_six({ response }: HttpContextContract) {
    
    try{
      const data = await Order.query().whereRaw('MONTH(created_at) = MONTH(CURRENT_DATE()) AND YEAR(created_at) = YEAR(CURRENT_DATE())').sum('total as total').where('payment_status', 'PAID').groupByRaw('MONTH(created_at)')
      return response.ok({ data: data })
    }catch(err){
      return response.badRequest({ data: err })
    }
  
  }

}
