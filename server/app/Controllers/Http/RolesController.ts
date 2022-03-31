import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Role from 'App/Models/Role'
import RoleValidator from 'App/Validators/RoleValidator'

export default class RolesController {
  public async index({ response}: HttpContextContract) {
    try{

      const data = await Role.all();
      if(data.length>0){
        return response.ok({data:data})
      }
      else{
        return response.notFound({message:"no data found.."})
      }

    }catch(err){
      return response.badRequest({message:"Try again later..."})
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {
    try{

      const {role} = await request.validate(RoleValidator)

      if(role){
        await Role.create({role})
       return response.created({message:"created successfully"})
      }
      else{
        return response.unprocessableEntity({message:"please select any roles from the dropup"})
      }

    }catch(err){
      return response.badRequest({message:"try again later with all required details"})
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({response,params}: HttpContextContract) {

    try{
      const id = params.id;
      const data = await Role.findOrFail(id);
      await data.delete();
         return response.ok({message:`${data.role} is deleted`})
    }catch(err){
      return response.notFound({message:"Requested data not found to delete"})
    }

  }
}
