import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order';
export default class OrdersController {
  public async index({}: HttpContextContract) {

    const data = await Order.all();
    return data;
  }

  public async create({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {
    const data1 = request.body();
      await data1.data.map((da)=>{
        Order.create(da)
      })
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
