import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TakeawaycustomersController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {
   try{

   }catch(err){
     return response.badRequest({})
   }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
