import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Feedback from 'App/Models/Feedback'
import FeedbackValidator from 'App/Validators/FeedbackValidator'

export default class FeedbacksController {
  public async index({}: HttpContextContract) {
    const data = await Feedback.query()
      .preload('feedback_staff', (query) => {
        query.select('name')
      })
      .preload('feedback_customer', (query) => {
        query.select('name', 'phone_number')
      })
      .preload('feedback_order', (query) => {
        query.select('id')
      })
    return data
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    try {
      const { customer_id, order_id, ratings, comments, staff } = await request.validate(
        FeedbackValidator
      )
      await Feedback.create({
        customer_id,
        order_id,
        ratings,
        comments,
        staff,
      })
      return response.created({ message: 'feedback saved thank you...' })
    } catch (err) {
      return response.badRequest({ err: err.messages })
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const id = params.id
      const data = await Feedback.findOrFail(id)
      if (data) {
        data.delete()
        return response.ok({ message: 'deleted successfully' })
      }
    } catch (err) {
      return response.badRequest({ message: 'something wrong..' })
    }
  }
}
