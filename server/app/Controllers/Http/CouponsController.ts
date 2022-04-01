import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Coupon from 'App/Models/Coupon'

export default class CouponsController {
  public async index({response}: HttpContextContract) {
     try{
      const data = await Coupon.all();
      return response.ok({data:data})
     }catch(err){
       return response.notFound({message:"no data found.."})
     }
    
  }


  public async store({request,response}: HttpContextContract) {
    try{
      const data1 = request.body();
      const name = data1.name;
      const exist = await Coupon.findByOrFail('name',name)
      if(!exist){
        await Coupon.create(data1)
        return response.created({message:"created successfully"})
       }
      else{
        return response.unprocessableEntity({message:"coupon already exists"})
      }
    }catch(err){
      return err
    }
  }

  public async show({params,response}: HttpContextContract) {
    
    try{
      const id = params.id;
      const Couponexist  =  await Coupon.findByOrFail('name',id) ;
      var currentTime = new Date();
      
      console.log(currentTime)
      if(Couponexist.expiry_date >= currentTime){
        return response.ok({message:"you availed "})
      }
      else{
        return response.unprocessableEntity({message:"coupon is expired!!!"})
      }
    }catch(err){
      return response.unprocessableEntity({message:"coupon is expired!!!"})
    }
    
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
