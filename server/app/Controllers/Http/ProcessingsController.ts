import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Processing from 'App/Models/Processing';
export default class ProcessingsController {
  public async index({response}: HttpContextContract) {

    try{
      const data = await Processing.query().preload('itemss',(query)=>{query.preload('item')}).preload('user',(query)=>{query.preload('table')})
      if(data.length>0){
        return response.ok({data:data})
      }
      else{
        return response.notFound({message:"Data not found"})
      }
    }catch(err){
      return response.notFound({message:"Data not found"})
    }
    
  }

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {

    const data = request.body();
    await Processing.create(data);
    return data

  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({response,params,request}: HttpContextContract) {
    try{
      const id = params.id;
      const is_done = request.body().is_done;
      const data = await Processing.findOrFail(id);
      data.is_done = is_done;
      data.save()

      return response.ok({message:"updated"})

    }catch(err){

    }
  }

  public async destroy({}: HttpContextContract) {}

  public async stats({response}){
    try{
    const active_orders = await Database.from('processings').count('* as active_orders').where('is_done',false)
      console.log(active_orders)
      return active_orders;

    }catch(err){
      return response.notFound({message:"no data found.."})
    }
  }
}
