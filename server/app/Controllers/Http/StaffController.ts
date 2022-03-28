import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Staff from 'App/Models/Staff'
export default class StaffController {
  public async index({response}: HttpContextContract) {
    try{
   const data = await Staff.all();
   return response.ok({data:data})
    }catch(err){
      return response.ok({message:"no data"})
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {

    const data = await Staff.create(request.body())
    return data;
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
