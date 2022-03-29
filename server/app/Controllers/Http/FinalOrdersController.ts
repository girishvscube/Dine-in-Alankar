import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FinalOrder from 'App/Models/FinalOrder'
export default class FinalOrdersController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {
    
   const data =  await FinalOrder.create(request.body()) ;
   return data;

  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
