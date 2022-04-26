"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StoreSettings_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/StoreSettings"));
let Validator = require('validatorjs');
class StoresController {
    async index({ response }) {
        try {
            const data = await StoreSettings_1.default.all();
            return response.ok({ data: data });
        }
        catch (err) {
            return response.notFound({ message: 'no data found..' });
        }
    }
    async create({}) { }
    async store({ request, response }) {
        let rules = {
            name: 'required|string|max:150',
            email: 'required|email',
            phone: 'required|numeric',
            address: 'required|string|max:150',
            gst_no: 'required|string|max:150',
        };
        const data = request.body();
        let validation = new Validator(data, rules);
        if (validation.fails()) {
            return response.badRequest({ message: validation.errors.all() });
        }
        const created = await StoreSettings_1.default.create(data);
        if (created) {
            return response.created({ message: "created", data: created });
        }
    }
    async show({}) { }
    async edit({}) { }
    async update({ request, response, params }) {
        let rules = {
            name: 'required|string|max:150',
            email: 'required|email',
            phone: 'required|numeric',
            address: 'required|string|max:150',
            gst_no: 'required|string|max:150',
        };
        const data = request.body();
        let validation = new Validator(data, rules);
        if (validation.fails()) {
            return response.badRequest({ message: validation.errors.all() });
        }
        try {
            const id = params.id;
            const data = await StoreSettings_1.default.findByOrFail('id', id);
            data.name = request.body().name;
            data.email = request.body().email;
            data.phone = request.body().phone;
            data.address = request.body().address;
            data.gst_no = request.body().gst_no;
            data.save();
            return response.ok({ message: "Updated", data: data });
        }
        catch (err) {
            return response.badRequest({ message: 'not modified' });
        }
    }
    async destroy({ response, params }) {
        try {
            const id = params.id;
            const data = await StoreSettings_1.default.findOrFail(id);
            data.delete();
            return response.ok({ message: 'deleted' });
        }
        catch (err) {
            return response;
        }
    }
}
exports.default = StoresController;
//# sourceMappingURL=StoresController.js.map