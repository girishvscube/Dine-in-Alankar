import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Takeawaycart from 'App/Models/Takeawaycart';

export default class TakeawaycartsController {
  public async index({response}: HttpContextContract) {
    try{
        const data = await Takeawaycart.query().preload('take_away_customer',(query)=>{query.select('name','phone_number')}).preload('take_away_items',(query)=>{query.select('item_name')})
        return response.ok({data:data});
    }catch(err){
      console.log(err);
      return response.notFound({message:"no data found.."})
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {

    try{
       const {item_id,quantity,price,takeawaycustomer_id} = request.body();
     const data =   await Takeawaycart.create({item_id,quantity,price,takeawaycustomer_id})
       return response.created({message:"stored successfully",data})
    }catch(err){
      return response.badRequest({message:"sometthing wrong..."})
    }

  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({request,response,params}: HttpContextContract) {
    try{
      const id = params.id;
      const item = await Takeawaycart.findOrFail(id)
      item.price = request.body().price;
      item.quantity = request.body().quantity;
      item.save();
      return response.ok({message:"updated successfully"})

    }catch(err){
      console.log(err);
      return response.notModified({message:"try again later",err})
    }
  }

  public async destroy({params,response}: HttpContextContract) {
    try{
      const id = params.id;
      const data = await Takeawaycart.findOrFail(id)
      await data.delete()
      return response.ok({message:"removed from the order list"})
    }catch(err){
      return response.notFound({message:"Requested data not found"})
    }
   
  }
}
