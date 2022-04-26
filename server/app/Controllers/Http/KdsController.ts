import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Kd from 'App/Models/Kd'
const Validator = require('validatorjs')
export default class KdsController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await Kd.query().preload('order', (query) => {
        query.preload('meta_order', (query) => {
          query.preload('menus')
        })
        query.preload('table', (query) => {
          query.preload('users', (query) => {
            query.select('name')
          })
        })
      })
      return response.ok({ data: data })
    } catch (err) {
      return response.badRequest({ data: 'no data found' })
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    const rules: any = {
      name: 'required|max:150',
      order_id: 'required|integer',
      table_id: 'integer',
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }
    try {
      const data = await Kd.create(request.all())
      response.created({ data: data })
    } catch (err) {
      response.badRequest({ data: err })
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
