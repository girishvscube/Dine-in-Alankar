"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Kd_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Kd"));
const Validator = require('validatorjs');
class KdsController {
    async index({ response }) {
        try {
            const data = await Kd_1.default.query().preload('order', (query) => {
                query.preload('meta_order', (query) => {
                    query.preload('menus');
                });
                query.preload('table', (query) => {
                    query.preload('users', (query) => {
                        query.select('name');
                    });
                });
            });
            return response.ok({ data: data });
        }
        catch (err) {
            return response.badRequest({ data: 'no data found' });
        }
    }
    async create({}) { }
    async store({ response, request }) {
        const rules = {
            name: 'required|max:150',
            order_id: 'required|integer',
            table_id: 'integer',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        try {
            const data = await Kd_1.default.create(request.all());
            response.created({ data: data });
        }
        catch (err) {
            response.badRequest({ data: err });
        }
    }
    async show({}) { }
    async edit({}) { }
    async update({}) { }
    async destroy({}) { }
}
exports.default = KdsController;
//# sourceMappingURL=KdsController.js.map