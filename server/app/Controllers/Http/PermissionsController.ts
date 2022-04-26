import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
let Validator = require('validatorjs')
import Permission from 'App/Models/Permission'
export default class PermissionsController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await Permission.query().preload('roles')
      return response.ok({ data: data })
    } catch (err) {
      return response.notFound({ message: 'no data found..' })
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const rules: any = {
      role: 'max:150',
      permission: 'array',
    }

    const data = request.all()
    console.log(data.permissions)

    const validation = new Validator(data, rules)
    if (validation.fails()) {
      return response.badRequest(validation.errors.errors)
    }
    try {
      const data = request.all()
      const role = data.role
      const permissions = data.permissions

      const permission = JSON.stringify(permissions)
      await Permission.create({
        role: role,
        permissions: permission,
      })
      return response.ok({ data: 'Roles assigned successfully' })
    } catch (err) {
      console.log(err)
      return response.badRequest({ data: err })
    }
  }

  public async show({ response, params }: HttpContextContract) {
    const id = params.id
    try {
      const data = await Permission.query().where('id', id).preload('roles')
      return response.ok({ data: data })
    } catch (err) {
      return response.notFound({ message: 'no data found..' })
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const id = params.id
     
      const { permissions,role } = request.all()
      const stringifydata = JSON.stringify(permissions)
      const permission = await Permission.findByOrFail('id', id)
      permission.role = role
      permission.permissions = stringifydata
      await permission.save()
      return response.ok({ data: permission })
    } catch (err) {
      return response.badRequest({ data: err })
    }
  }

  public async destroy({}: HttpContextContract) {}
}
