import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Subcat from 'App/Models/Subcat';
export default class SubcatsController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {
   const sub_category_name = request.body().sub_category_name;
   const category_id = request.body().category_id;
   await Subcat.create({
     sub_category_name,
     category_id
   })
return "created"
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
