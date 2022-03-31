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
      console.log(err);
      return response.unprocessableEntity({err:err})
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
      const { item_name,  image_url, stock, availability, sub_category_id,category_id ,take_away_price,price_in_counter,type_of_meal} =
        await request.validate(DishValidator)
      const data = await Dish.findByOrFail('slug', `${id}`)
      if (data) {
        data.category_id = category_id,
        data.take_away_price = take_away_price,
        data.price_in_counter = price_in_counter,
        (data.item_name = item_name),
          (data.sub_category_id = sub_category_id),
          (data.image_url = image_url),
          (data.stock = stock),
           data.type_of_meal = type_of_meal,
          (data.availability = availability)
        data.save()
        return response.created({ message: 'updated successfully' })
      }
    } catch (err) {
      console.log(err);
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
      console.log(searchItem);
      const data = await Dish.query()
        .where('item_name', 'like', `%${searchItem}%`)
        .paginate(page, limit)
        console.log(data);

      // const search = request.all().search.toLowerCase();
      // const data = await Dish.query()
      // .where('item_name', 'like', `%${search}%`)

        if(data.length>0){
          return response.ok({ data: data })
        }
        else{
          return response.notFound({message:"no data found"})
        }
      
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
