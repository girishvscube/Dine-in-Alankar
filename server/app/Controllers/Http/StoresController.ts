import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import StoreSettings from 'App/Models/StoreSettings';
let Validator = require('validatorjs');

export default class StoresController {

    public async index({ response }: HttpContextContract) {

        try {
            const data = await StoreSettings.all()
            return response.ok({ data: data })
        } catch (err) {
            return response.notFound({ message: 'no data found..' })
        }
    }

    public async create({ }: HttpContextContract) { }

    public async store({ request, response }: HttpContextContract) {

        let rules = {
            name: 'required|string|max:150',
            email: 'required|email',
            phone: 'required|numeric',
            address: 'required|string|max:150',
            gst_no: 'required|string|max:150',

        }
        const data = request.body()

        let validation = new Validator(data, rules)

        if (validation.fails()) {
            return response.badRequest({ message: validation.errors.all() })
        }

        const created = await StoreSettings.create(data)
        if (created) {
            return response.created({ message: "created", data: created })
        }
    }

    public async show({ }: HttpContextContract) { }

    public async edit({ }: HttpContextContract) { }

    public async update({ request, response, params }: HttpContextContract) {
        let rules = {
            name: 'required|string|max:150',
            email: 'required|email',
            phone: 'required|numeric',
            address: 'required|string|max:150',
            gst_no: 'required|string|max:150',
        }
        const data = request.body()

        let validation = new Validator(data, rules)

        if (validation.fails()) {
            return response.badRequest({ message: validation.errors.all() })
        }

        try {
            const id = params.id
            const data = await StoreSettings.findByOrFail('id', id)
            // return data

            data.name = request.body().name
            data.email = request.body().email
            data.phone = request.body().phone
            data.address = request.body().address
            data.gst_no = request.body().gst_no
            data.save()
            return response.ok({ message: "Updated", data: data })
        } catch (err) {
            return response.badRequest({ message: 'not modified' })
        }
    }

    public async destroy({ response, params }: HttpContextContract) {
        try {
            const id = params.id
            const data = await StoreSettings.findOrFail(id)
            data.delete()
            return response.ok({ message: 'deleted' })
        } catch (err) {
            return response
        }
    }
}
