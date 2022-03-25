import Application from '@ioc:Adonis/Core/Application'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dish from 'App/Models/Dish'
import DishValidator from 'App/Validators/DishValidator'
import { schema } from '@ioc:Adonis/Core/Validator'
export default class DishesController {
  public async index({ request, response }: HttpContextContract) {
    try {
      const page = request.input('page', 1)
      const limit = request.input('limit', 2)
      const data = await Dish.query().paginate(page, limit)
      return response.ok({ data: data })
    } catch (err) {
      console.log(err)
      return response.notFound({ message: 'No data found!! please try again', err: err })
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = await request.validate(DishValidator)
      await Dish.create(data)
      return response.created({ message: 'Data added successfully' })
    } catch (err) {
      return response.unprocessableEntity(err.messages)
    }
  }

  public async show({ response, params }: HttpContextContract) {
    const id = params.id
    try {
      const data = await Dish.query().where('slug', '=', id)
      return response.ok({ data: data })
    } catch (err) {
      return response.notFound({ message: 'Data requested not found' })
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, response, params }: HttpContextContract) {
    const id = params.id
    try {
      const { item_name, price, image_url, stock, availability, category_id } =
        await request.validate(DishValidator)
      const data = await Dish.findByOrFail('slug', `${id}`)
      if (data) {
        ;(data.item_name = item_name),
          (data.category_id = category_id),
          (data.image_url = image_url),
          (data.stock = stock),
          (data.price = price),
          (data.availability = availability)
        data.save()
        return response.created({ message: 'updated successfully' })
      }
    } catch (err) {
      return response.notModified({ message: 'Data requested not found', err: err })
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const id = params.id
      const data = await Dish.findByOrFail('slug', `${id}`)
      await data.delete()
      response.ok({ message: 'Data deleted' })
    } catch (err) {
      console.log(err)
      return response.notFound({ message: 'Data not found!!', err: err.messages })
    }
  }

  public async searchData({ request, response }: HttpContextContract) {
    try {
      const page = request.input('page', 1)
      const limit = request.input('limit', 2)
      const body = request.only(['item'])
      const searchItem = body.item.toLowerCase()
      const data = await Dish.query()
        .where('item_name', 'like', `%${searchItem}%`)
        .paginate(page, limit)
      return response.ok({ data: data })
    } catch (err) {
      return response.notFound({ message: 'no items available for this search' })
    }
  }

  public async fileUpload({ request, response }) {
    const data = request.file('banner')
    console.log(data)
    const PostData = await request.validate({
      schema: schema.create({
        banner: schema.file({
          size: '2mb',
          extnames: ['gif', 'jpg', 'png'],
        }),
      }),
    })

    try {
      if (PostData) {
        await PostData.banner.move(Application.tmpPath('uploads'))
      }

      response.ok({ message: 'uploaded' })
    } catch (err) {
      return response.badRequest({ message: 'something wrong', err: err })
    }
  }
}
