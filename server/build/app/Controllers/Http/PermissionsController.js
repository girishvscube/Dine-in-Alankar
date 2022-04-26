"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let Validator = require('validatorjs');
const Permission_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Permission"));
class PermissionsController {
    async index({ response }) {
        try {
            const data = await Permission_1.default.query().preload('roles');
            return response.ok({ data: data });
        }
        catch (err) {
            return response.notFound({ message: 'no data found..' });
        }
    }
    async create({}) { }
    async store({ request, response }) {
        const rules = {
            role: 'max:150',
            permission: 'array',
        };
        const data = request.all();
        console.log(data.permissions);
        const validation = new Validator(data, rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        try {
            const data = request.all();
            const role = data.role;
            const permissions = data.permissions;
            const permission = JSON.stringify(permissions);
            await Permission_1.default.create({
                role: role,
                permissions: permission,
            });
            return response.ok({ data: 'Roles assigned successfully' });
        }
        catch (err) {
            console.log(err);
            return response.badRequest({ data: err });
        }
    }
    async show({ response, params }) {
        const id = params.id;
        try {
            const data = await Permission_1.default.query().where('id', id).preload('roles');
            return response.ok({ data: data });
        }
        catch (err) {
            return response.notFound({ message: 'no data found..' });
        }
    }
    async edit({}) { }
    async update({ request, response, params }) {
        try {
            const id = params.id;
            const { permissions, role } = request.all();
            const stringifydata = JSON.stringify(permissions);
            const permission = await Permission_1.default.findByOrFail('id', id);
            permission.role = role;
            permission.permissions = stringifydata;
            await permission.save();
            return response.ok({ data: permission });
        }
        catch (err) {
            return response.badRequest({ data: err });
        }
    }
    async destroy({}) { }
}
exports.default = PermissionsController;
//# sourceMappingURL=PermissionsController.js.map