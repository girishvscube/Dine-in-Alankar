import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserOrdeerValidator from 'App/Validators/UserOrdeerValidator'
import Order from 'App/Models/Order';
export default class OrdersController {
  public async index({response}: HttpContextContract) {
    try{
         const data = await Order.query().preload('table')
         if(data.length>0){
           return response.ok({data:data})
         }
         else{
          return response.notFound({message:"No data found"})
         }
    }catch(err){
      console.log(err);
      return response.notFound({message:"No data found",err:err})
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {
    try{
      const validatedData = await request.validate(UserOrdeerValidator)
      const data = await Order.create(validatedData);
      return response.created({data:data})

    }catch(err){
      response.badRequest({message:"please try again later",err})
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
