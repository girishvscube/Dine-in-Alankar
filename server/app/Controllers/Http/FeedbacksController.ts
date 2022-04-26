import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Feedback from 'App/Models/Feedback'
import NotFoundException from 'App/Exceptions/NotFoundException'
import NotcreatedException from 'App/Exceptions/NotcreatedException'
import Order from 'App/Models/Order'
const Validator = require('validatorjs')
export default class FeedbacksController {
  public async index({ response }: HttpContextContract) {
    const data = await Feedback.query().preload('order', (query) => {
      query.select('name', 'phone', 'table_id')
      query.preload('table', (query) => {
        query.preload('users', (query) => {
          query.select('name')
        })
      })
    })
    response.ok(data)
    if (!data) throw new NotFoundException('Not Found')
  }

  public async store({ request, response }: HttpContextContract) {
    const rules: any = {
      rating: 'required|max:150',
      comment: 'required|max:150',
      order_id: 'required|integer',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    const data = await Feedback.create(request.all())
    response.created({ data: data })
    if (!data) throw new NotcreatedException('Not Created')
  }

  public async show({ response, params }: HttpContextContract) {
    const id = params.id
    const data = await Feedback.query()
      .preload('order', (query) => {
        query.select('name', 'phone', 'table_id')
        query.preload('table', (query) => {
          query.preload('users', (query) => {
            query.select('name')
          })
        })
      })
      .where('id', id)
      .first()
    response.ok({ data: data })
    if (!data) throw new NotFoundException('Not Found')
  }

  public async feedbackCount({ response }: HttpContextContract) {
    const data = await Feedback.query().count('id as id')
    response.ok({ data: data })

    if (!data) throw new NotFoundException('Not Found')
  }

  public async feedbackAvg({ response }: HttpContextContract) {
    const data = await Feedback.query().avg('rating as rating')
    response.ok({ data: data })

    if (!data) throw new NotFoundException('Not Found')
  }

  public async Ratingssum({ response }: HttpContextContract) {
    const data = await Feedback.query().sum('rating as rating')
    response.ok({ data: data })

    if (!data) throw new NotFoundException('Not Found')
  }

  public async Search({ request, response }) {
    try {
      const { id } = request.all()
      console.log(id, 'id')

      const data = await Feedback.query()
        .preload('order', (query) => {
          query.select('name', 'phone', 'table_id')
          query.preload('table', (query) => {
            query.preload('users', (query) => {
              query.select('name')
            })
          })
        })
        .where('id', id)

      return response.ok({ data: data })
    } catch (err) {
      return response.notFound({ error: 'no data found' })
    }
  }

  public async datewise({ request, response }) {
    try {
      const { date } = request.all()
      console.log(date, 'date')

      const data = await Feedback.query()
        .preload('order', (query) => {
          query.select('name', 'phone', 'table_id')
          query.preload('table', (query) => {
            query.preload('users', (query) => {
              query.select('name')
            })
          })
        })
        .where('created_at', 'LIKE', `${date}%`)

      return response.ok({ data: data })
    } catch (err) {
      return response.notFound({ error: 'no data found' })
    }
  }

  public async staffReport({}: HttpContextContract) {
  //   const data = await Feedback.query().preload('order', (query) => {
  //     query.select('name', 'phone', 'table_id', 'id')
      
  //     query.preload('table', (query) => {
  //       query.preload('users', (query) => {
  //         query.select('name', 'id', 'role_id')
  //         query.preload('role')
  //       })
  //     })
  //   })
  //   return data

  const data = await Order.query().preload('table', (query) => {
    query.preload('users', (query) => {
      query.select('name', 'id', 'role_id')
      query.preload('role')
    })
  })
  return data
  }  
}
