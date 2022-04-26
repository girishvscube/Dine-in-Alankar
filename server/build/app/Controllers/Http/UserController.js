"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator = require('validatorjs');
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UserController {
    async index({ request, response }) {
        try {
            const users = await User_1.default.listing(request);
            return response.ok({
                message: 'User List',
                data: users
            });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async store(ctx) {
        return this.save(ctx);
    }
    async update(ctx) {
        const { user } = ctx.request;
        return this.save(ctx, user);
    }
    async save({ request, response }, record = null) {
        const data = request.only(['name', 'email', 'phone', 'password', 'image', 'role_id']);
        const { tables } = request.body();
        const rules = {
            name: 'required|max:150',
            email: 'required|max:150|email',
            phone: 'required|max:15',
            role_id: 'required',
            tables: 'array',
            image: 'url',
        };
        if (data.password && data.password.length) {
            rules.password = 'required|min:8';
        }
        else {
            delete data.password;
        }
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        const existingUserByEmail = await User_1.default.query().where('email', data.email).first();
        let user = record;
        if (record === null) {
            user = new User_1.default();
        }
        if (existingUserByEmail && existingUserByEmail.id !== user.id) {
            if (existingUserByEmail.email.toLowerCase() === data.email.toLowerCase()) {
                return response.badRequest({ message: 'User already exists for given email address.' });
            }
        }
        for (const [key, value] of Object.entries(data)) {
            console.log(key, value);
            user[key] = value;
        }
        await user.save(data);
        await user.related('tables').sync(tables);
        return response.ok({
            message: 'User created/updates Successfully',
        });
    }
    async show({ request, response }) {
        try {
            let user = await User_1.default.query()
                .where('id', request.param('id'))
                .first()
                .then((serialize) => serialize?.toJSON());
            if (!user) {
                return response.notFound({ message: `Product not found.` });
            }
            return response.json(user);
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async updateStatus({ request, response }) {
        try {
            let { user } = request;
            const payload = request.body();
            user.status = payload.status == true ? 1 : 0;
            await user.save();
            return response.json({ message: 'Status Update Successfully' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
    async destroy({ request, response }) {
        try {
            const { user } = request;
            await user.delete();
            return response.ok({ message: 'User deleted successfully' });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map