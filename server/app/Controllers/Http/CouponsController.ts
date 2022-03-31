import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Coupon from 'App/Models/Coupon'

export default class CouponsController {
  public async index({response}: HttpContextContract) {

    const data = await Coupon.all();
    return response.ok({data:data})
  }

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {
    try{
      const data1 = request.body();
      console.log(data1);
       await Coupon.create(data1)
      return data1;

    }catch(err){
      return err
    }
  }

  public async show({params,response}: HttpContextContract) {
    const id = params.id;

    const Couponexist  =  await Coupon.findByOrFail('name',id) ;
    var currentTime = new Date();
    console.log(currentTime)
    if(Couponexist.expiry_date >= currentTime){
      return response.ok({message:"you availed "})
    }
    else{
      return "expired"
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
