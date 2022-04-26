"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator = require('validatorjs');
const Role_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Role"));
class RolesController {
    async index({ response }) {
        try {
            const data = await Role_1.default.all();
            return response.ok({ data: data });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async store({ request, response }) {
        try {
            const data = request.only(['name']);
            const rules = {
                name: 'required|max:150',
            };
            const validation = await new Validator(data, rules);
            if (validation.fails()) {
                return response.badRequest({ message: validation.messages() });
            }
            await Role_1.default.create(data);
            return response.ok({
                message: 'Role Created Successfully',
            });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async create({}) { }
    async show({ response, params }) {
        try {
            const id = params.id;
            const data = await Role_1.default.findOrFail(id);
            return response.ok({
                data: data
            });
        }
        catch (exception) {
            return response.internalServerError({ message: "No data found" });
        }
    }
    async edit({}) { }
    async update({ request, response, params }) {
        try {
            const payload = request.only(['name']);
            const rules = {
                name: 'required|max:150',
            };
            const id = params.id;
            const validation = await new Validator(payload, rules);
            if (validation.fails()) {
                return response.badRequest({ message: validation.messages() });
            }
            const data = await Role_1.default.findOrFail(id);
            await data.save();
            return response.ok({
                message: 'Role Updated Successfully',
                data: data
            });
        }
        catch (exception) {
            return response.internalServerError({ message: "Something is wrong try again later" });
        }
    }
    async destroy({ response, params }) {
        try {
            const id = params.id;
            const role = await Role_1.default.findOrFail(id);
            await role.delete();
            return response.ok({ message: 'Role Deleted Successfully' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = RolesController;
//# sourceMappingURL=RolesController.js.map