import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ItemOrder from 'App/Models/ItemOrder'
export default class ItemOrdersController {
  public async index({ response, request }: HttpContextContract) {
    try {
      const page = request.input('page', 1)
      const limit = request.input('limit', 4)
      const data = await ItemOrder.query()
        .preload('order', (query) => {
          query.preload('table')
        })
        .preload('item')
        .paginate(page, limit)
      if (data.length > 0) return response.ok({ data: data })
      else {
        return response.notFound({ message: 'Data not found' })
      }
    } catch (err) {
      return response.notFound({ message: 'Data not found' })
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const data = request.body()
    try {
      await data.data.map((item) => {
        ItemOrder.create(item)
      })
      return response.created({ message: 'created' })
    } catch (err) {
      return response.unprocessableEntity({ message: 'Data not processed' })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const id = params.id

      const data = await ItemOrder.query()
        .preload('order', (query) => {
          query.preload('table')
        })
        .preload('item')
        .where('order_id', id)
      if (data.length > 0) return response.ok({ data: data })
      else {
        return response.notFound({ message: 'Data not found' })
      }
    } catch (err) {
      return response.notFound({ message: 'Data not found' })
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
