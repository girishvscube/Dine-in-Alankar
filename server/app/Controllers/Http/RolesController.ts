import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const Validator = require('validatorjs')
import Role from 'App/Models/Role'
export default class RolesController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await Role.all()
      return response.ok({data:data})
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const data = request.only(['name'])
      const rules: any = {
        name: 'required|max:150',
      }

      const validation = await new Validator(data, rules)
      if (validation.fails()) {
        return response.badRequest({ message: validation.messages() })
      }
       await Role.create(data)
      return response.ok({
        message: 'Role Created Successfully',
      
      })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }

  public async create({}: HttpContextContract) {}

  public async show({response,params}: HttpContextContract) {
    try {
      const id = params.id
      const data = await Role.findOrFail(id)
      return response.ok({
        data:data
      });
    } catch (exception) {
      return response.internalServerError({ message: "No data found" })
    }

  }

  public async edit({}: HttpContextContract) {}

  public async update({request,response,params}: HttpContextContract) {
    try {
      const payload = request.only(['name'])
      const rules: any = {
        name: 'required|max:150',
      }
      const id = params.id
      const validation = await new Validator(payload, rules)
      if (validation.fails()) {
        return response.badRequest({ message: validation.messages() })
      }
      const data = await Role.findOrFail(id)
     
      await data.save()
      return response.ok({
        message: 'Role Updated Successfully',
        data: data
      })
    } catch (exception) {
      return response.internalServerError({ message: "Something is wrong try again later" })
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const id = params.id
      const role = await Role.findOrFail(id)
      await role.delete()
      return response.ok({ message: 'Role Deleted Successfully' })
    } catch (exception) {
      return response.internalServerError({ message: exception.message })
    }
  }
}
