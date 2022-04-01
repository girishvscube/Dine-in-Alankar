import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Subcat from 'App/Models/Subcat'
export default class SubcatsController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await Subcat.all()
      return response.ok({ data: data })
    } catch (err) {
      return response.notFound({ message: 'data not found ' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const sub_category_name = request.body().sub_category_name
      const category_id = request.body().category_id
      const data = await Subcat.findByOrFail('sub_category_name', `${sub_category_name}`)

      if (data) {
        if (data.category_id == category_id) {
          return response.unprocessableEntity({
            message: `${sub_category_name} sub category already exists for this category`,
          })
        } 
               
      }
      else {
        await Subcat.create({
          sub_category_name,
          category_id,
        })
        return response.created({ message: 'Created successfully' })
      }
    } catch (err) {}
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const id = params.id
      const data = await Subcat.findOrFail(id)
      await data.delete()
      response.ok({ message: 'Data deleted' })
    } catch (err) {
      console.log(err)
      return response.badRequest({ message: 'Data not found!!', err: err.messages })
    }
  }
}
