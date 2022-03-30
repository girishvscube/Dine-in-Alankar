import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserOrdeerValidator from 'App/Validators/UserOrdeerValidator'
import UserOrder from 'App/Models/UserOrder'

export default class UserOrdersController {
  public async index({response}: HttpContextContract) {
    try{

      const data = await UserOrder.query().preload('order')
      .preload('final_order')
      return data;
      }
       
    catch(err){
      console.log(err);
      return response.notFound({message:"no data found",err:err})
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {
    try{
      const validatedData = await request.validate(UserOrdeerValidator)

      const data = await UserOrder.create(validatedData);
      return response.created({data:data})

    }catch(err){
      response.badRequest({message:"please try again later"})
    }

  }

  public async show({params}: HttpContextContract) {
    const id = params.id;
    const data = await UserOrder.findOrFail(id);
    const relatedData = await data.related('final_order').query()
    
    return relatedData;

  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
