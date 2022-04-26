import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Coupon from "../../Models/Coupon"
let Validator = require('validatorjs');

export default class CouponsController {

    public async index({ response }: HttpContextContract) {
        const coupons = await Coupon.all()
        if (coupons.length > 0) {
            return response.ok({ message: 'Fetched all Coupons', coupons: coupons })
        }
        return response.notFound({ message: "Coupons Not Found" })
    }

    public async store({ request, response }: HttpContextContract) {

        let rules = {
            code: 'required|string|max:150',
            percent: 'required|string|min:0 |max:100',
            value: 'required|string|min:0',
            status: 'required|boolean',
            expires_at: 'required|date',
        }
        const data = request.body()
        let validation = new Validator(data, rules)

        if (validation.fails()) {
            return response.badRequest({ message: validation.errors.all() })
        }

        const { code } = request.all()
        const ispresent = await Coupon.find("code", code)
        if (!ispresent) {
            const coupon = request.all()
            const data = await Coupon.create(coupon)
            return response.ok({ message: "Coupon Created", data: data })
        }
    }



    public async show({ response, params }: HttpContextContract) {
        const coupon = await Coupon.findByOrFail("id", params.id)
        if (coupon) {
            return response.ok({ data: coupon })
        }
        return response.notFound({ message: "Coupon Not Found" })

    }

    public async update({ request, response, params }: HttpContextContract) {

        let rules = {
            code: 'required|string|max:150',
            percent: 'required|string|min:0|max:100',
            value: 'required|string|min:0',
            status: 'required|boolean',
            expires_at: 'required|date',
        }
        const data = request.body()
        let validation = new Validator(data, rules)

        if (validation.fails()) {
            return response.badRequest({ message: validation.errors.all() })
        }

        const coupon = await Coupon.findByOrFail("id", params.id)
        if (coupon) {
            const { code, percent, value, status, expires_at } = request.all()
            coupon.code = code
            coupon.percent = percent
            coupon.value = value
            coupon.status = status
            coupon.expires_at = expires_at
            await coupon.save()
            return response.ok({ data: coupon })
        }
        return response.notFound({ message: "Coupon Not Found" })


    }

    public async destroy({ response, params }: HttpContextContract) {

        const coupon = await Coupon.findByOrFail("id", params.id)
        if (coupon) {
            await coupon.delete()
            return response.ok({ message: "Coupon Deleted" })
        }
        return response.notFound({ message: "Coupon Not Found" })
    }

}
