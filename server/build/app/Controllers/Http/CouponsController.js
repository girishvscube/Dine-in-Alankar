"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coupon_1 = __importDefault(require("../../Models/Coupon"));
let Validator = require('validatorjs');
class CouponsController {
    async index({ response }) {
        const coupons = await Coupon_1.default.all();
        if (coupons.length > 0) {
            return response.ok({ message: 'Fetched all Coupons', coupons: coupons });
        }
        return response.notFound({ message: "Coupons Not Found" });
    }
    async store({ request, response }) {
        let rules = {
            code: 'required|string|max:150',
            percent: 'required|string|min:0 |max:100',
            value: 'required|string|min:0',
            status: 'required|boolean',
            expires_at: 'required|date',
        };
        const data = request.body();
        let validation = new Validator(data, rules);
        if (validation.fails()) {
            return response.badRequest({ message: validation.errors.all() });
        }
        const { code } = request.all();
        const ispresent = await Coupon_1.default.find("code", code);
        if (!ispresent) {
            const coupon = request.all();
            const data = await Coupon_1.default.create(coupon);
            return response.ok({ message: "Coupon Created", data: data });
        }
    }
    async show({ response, params }) {
        const coupon = await Coupon_1.default.findByOrFail("id", params.id);
        if (coupon) {
            return response.ok({ data: coupon });
        }
        return response.notFound({ message: "Coupon Not Found" });
    }
    async update({ request, response, params }) {
        let rules = {
            code: 'required|string|max:150',
            percent: 'required|string|min:0|max:100',
            value: 'required|string|min:0',
            status: 'required|boolean',
            expires_at: 'required|date',
        };
        const data = request.body();
        let validation = new Validator(data, rules);
        if (validation.fails()) {
            return response.badRequest({ message: validation.errors.all() });
        }
        const coupon = await Coupon_1.default.findByOrFail("id", params.id);
        if (coupon) {
            const { code, percent, value, status, expires_at } = request.all();
            coupon.code = code;
            coupon.percent = percent;
            coupon.value = value;
            coupon.status = status;
            coupon.expires_at = expires_at;
            await coupon.save();
            return response.ok({ data: coupon });
        }
        return response.notFound({ message: "Coupon Not Found" });
    }
    async destroy({ response, params }) {
        const coupon = await Coupon_1.default.findByOrFail("id", params.id);
        if (coupon) {
            await coupon.delete();
            return response.ok({ message: "Coupon Deleted" });
        }
        return response.notFound({ message: "Coupon Not Found" });
    }
}
exports.default = CouponsController;
//# sourceMappingURL=CouponsController.js.map