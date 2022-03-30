import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
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

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
