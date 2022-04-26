import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'
import NotFoundException from 'App/Exceptions/NotFoundException'
import Table from 'App/Models/Table'
import NotModifiedException from 'App/Exceptions/NotModifiedException'
const Validator = require('validatorjs')
export default class TablesController {
  public async index({ response,request}: HttpContextContract) {
      const page = request.all().page;

      const data = await Order.query().select('id','table_id','total_persons').preload('table',(query)=>{
        query.preload('users',(query)=>{
          query.select('id','name','role_id')
          query.preload('role',(query)=>{
            query.select('id','name')
          })
        })
      }).paginate(page,10)
     return response.ok({  data: data })   
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.body()
      const rules: any = {
        floor: 'required',
        hall: 'required',
        status: 'required',
        type: 'required',
      }
      const validation = await new Validator(data, rules)
      if (validation.fails()) {
        return response.badRequest({ message: validation.messages() })
      }

      const table = await Table.query().where('floor', data.floor).where('hall', data.hall).first()
      if (table) {
        return response.badRequest({ message: 'table already exist' })
      } else {
        const newTable = await Table.create(data)
        return response.ok({ message: 'table created successfully', data: newTable })
      }
    } catch (err) {
      return response.badRequest({ message: 'error in creating table' })
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const id = params.id
      const table = await Table.query().whereNot('id', id)
      return response.ok({
        data: table,
      })
    } catch (exception) {
      return response.internalServerError({ message: 'No data found' })
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, response, params }: HttpContextContract) {
      const data = request.body()
      const rules: any = {
        floor: 'required',
        hall: 'required',
        status: 'required',
        type: 'required',
      }
      const validation = await new Validator(data, rules)
      if (validation.fails()) {
        return response.badRequest({ message: validation.messages() })
      }
      const table = await Table.findOrFail(params.id)
      const updatedTable = await Table.query()
        .where('floor', data.floor)
        .where('hall', data.hall)
        .first()
      if (updatedTable) {
        return response.badRequest({ message: 'table already exist' })
      } else {
        ;(table.floor = data.floor),
          (table.hall = data.hall),
          (table.status = data.status),
          (table.type = data.type),
          await table.save()
        response.ok({ message: 'table updated successfully', data: table })
      }
      if(!table) throw new NotModifiedException('Not Modified')
    
  }

  public async destroy({response,params,}: HttpContextContract) {
    try {
      const table = await Table.findOrFail(params.id)
      await table.delete()
      return response.ok({ message: 'table deleted successfully' })
    } catch (err) {
      return response.badRequest({ message: 'error in deleting table' })
    }
  }

  public async updatestatus({request,response,params}: HttpContextContract) {
    try {
      const data = request.body()
      const rules: any = {
        status: 'required',
      }
      const validation = await new Validator(data, rules)
      if (validation.fails()) {
        return response.badRequest({ message: validation.messages() })
      }
      const table = await Table.findOrFail(params.id)
      table.status = data.status
      await table.save()
      return response.ok({ message: 'table updated successfully', data: table })
    } catch (err) {
      return response.badRequest({ message: 'error in updating table' })
    }
  }

  public async listTable({response}: HttpContextContract) {
    const data = await Table.query().where('status',1);
    response.ok({data:data})
    if(!data) throw new NotFoundException('Not Found')
  }
}
