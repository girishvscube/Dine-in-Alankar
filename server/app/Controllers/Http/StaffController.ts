import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Staff from 'App/Models/Staff'
import StaffValidator from 'App/Validators/StaffValidator';
export default class StaffController {
  public async index({response}: HttpContextContract) {
    try{
   const data = await Staff.query().preload('role_staff').preload('table_staff').where('available',true)

   if(data.length>0){
    return response.ok({data:data})
   }
   else{
    return response.notFound({message:"no data"})
   }
   
    }catch(err){
      return response.badRequest({message:"no data"})
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({request,response}: HttpContextContract) {
   
    try{

      const validateData = await request.validate(StaffValidator)
      const {name} = await request.validate(StaffValidator)
       await Staff.create(validateData)
      return response.created({message:`${name} staff details are created`})

    }catch(err){
      console.log(err);
      response.unprocessableEntity({message:"fill all the fileds",err})
    }
    
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({request,response,params}: HttpContextContract) {

    try{
      const id = params.id;
  const {available} = request.body();
  console.log(available)
      const staffdata = await Staff.findOrFail(id);
      if(staffdata){
        staffdata.available = available;
        staffdata.save();
        return response.created({message:"updated successfully"})
      }

    }catch(err){
      return response.badRequest({err:err})
    }

  }

  public async destroy({}: HttpContextContract) {}
}
