// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const Validator = require('validatorjs')

import User from 'App/Models/User'
interface UserProperty {
  email: string
  name: string
  phone: string
  role_id: string
  image: string
  password?: string
  tables: string
}

export default class UserController {
  /**
   * @param request
   * @param response
   */
  public async index({ request, response }) {
    try {
      const users = await User.listing(request)
      return response.ok({
        message: 'User List',
        data:users
      })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  public async store(ctx) {
    return this.save(ctx)
  }

  /**
   * @param request
   * @param response
   */
  public async update(ctx) {
    const { user } = ctx.request
    return this.save(ctx, user)
  }

  public async save({ request, response }, record = null) {
    const data = request.only(['name', 'email', 'phone', 'password', 'image', 'role_id'])
    const { tables } = request.body()
    const rules: UserProperty = {
      name: 'required|max:150',
      email: 'required|max:150|email',
      phone: 'required|max:15',
      role_id: 'required',
      tables: 'array',
      image: 'url',
    }

    if (data.password && data.password.length) {
      rules.password = 'required|min:8'
    } else {
      delete data.password
    }

    const validation = new Validator(request.all(), rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }

    const existingUserByEmail = await User.query().where('email', data.email).first()

    let user: any = record
    if (record === null) {
      user = new User()
    }

    if (existingUserByEmail && existingUserByEmail.id !== user.id) {
      if (existingUserByEmail.email.toLowerCase() === data.email.toLowerCase()) {
        return response.badRequest({ message: 'User already exists for given email address.' })
      }
    }

    for (const [key, value] of Object.entries(data)) {
      console.log(key, value)
      user[key] = value
    }

    await user.save(data)
    await user.related('tables').sync(tables)

    return response.ok({
      message: 'User created/updates Successfully',
    })
  }

  /**
   * @param request
   * @param response
   */
  public async show({ request, response }) {
    try {
      let user: any = await User.query()
        .where('id', request.param('id'))
        .first()
        .then((serialize) => serialize?.toJSON())

      if (!user) {
        return response.notFound({ message: `Product not found.` })
      }

      return response.json(user)
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  /**
   * @param request
   * @param response
   */
  public async updateStatus({ request, response }) {
    try {
      let { user } = request
      const payload = request.body()
      user.status = payload.status == true ? 1 : 0
      await user.save()
      return response.json({ message: 'Status Update Successfully' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  public async destroy({ request, response }) {
    try {
      const { user } = request
      await user.delete()
      return response.ok({ message: 'User deleted successfully' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  } 
}
