import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Takeawaycustomer from 'App/Models/Takeawaycustomer'
import TakeawaycustomerValidator from 'App/Validators/TakeawaycustomerValidator'

export default class TakeawaycustomersController {
  public async index({response}: HttpContextContract) {
    try{

      const data = await Takeawaycustomer.all();
      if(data.length>0){
        return response.ok({data:data})
      }
      else{
        return response.notFound({message:"No data found.."})
      }

    }catch(err){

    }
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {
   try{
     const validatedData = await request.validate(TakeawaycustomerValidator)
     if(validatedData){
      const data =  await Takeawaycustomer.create(validatedData);
       return response.created({message:"user created succesfully",data:data})
     }
     else{
       return response.unprocessableEntity({message:"fill all the fields"})
     }

   }catch(err){
     return response.badRequest(err)
   }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
