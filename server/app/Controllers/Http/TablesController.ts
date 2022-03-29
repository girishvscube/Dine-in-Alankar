import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Table from 'App/Models/Table'
import TableValidator from 'App/Validators/TableValidator'
export default class TablesController {
  public async index({request,response}: HttpContextContract) {
    try{
     
      const page = request.input('page', 1)
      const limit = request.input('limit', 8)
      const data = await Table.query().paginate(page,limit);
      // const da =await Table.$getRelation('staff').relatedModel()
      if(data.length>0){
        return response.ok({data:data})
      }
     return response.notFound({message:"no data found"})

    }catch(err){
      return response.notFound({message:"No data found!!"})
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {

    try{
     
      const data = await request.validate(TableValidator);
      await Table.create(data);
      return response.created({message:"Table created"})

    }catch(err){
   return response.badRequest({message:err.messages})
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
