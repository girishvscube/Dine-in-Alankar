import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Takeawayorder from 'App/Models/Takeawayorder';

export default class TakeawayordersController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {
    const data = request.body();
    console.log(data);
    data.data.map((da)=>{
      Takeawayorder.create({
        order_details :`{"item_id":${da.item_id},"quantity":${da.quantity},"price":${da.price}}`,
        total:data.total
      })
    })
  
  }
  // public async show({}: HttpContextContract) {}

  // public async edit({}: HttpContextContract) {}

  // public async update({}: HttpContextContract) {}

  // public async destroy({}: HttpContextContract) {}
}
