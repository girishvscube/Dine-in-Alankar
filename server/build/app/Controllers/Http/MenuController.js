"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Menu_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Menu"));
const Validator = require('validatorjs');
const NotFoundException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/NotFoundException"));
class MenuController {
    async index({ request, response }) {
        const data = await Menu_1.default.listing(request);
        response.ok(data);
        if (!data)
            throw new NotFoundException_1.default('Menu not found');
    }
    async store(ctx) {
        return this.save(ctx);
    }
    async update(ctx) {
        const { menu } = ctx.request;
        return this.save(ctx, menu);
    }
    async destroy({ request, response }) {
        const { menu } = request;
        await menu.delete();
        return response.noContent();
    }
    async save({ request, response }, record = null) {
        const rules = {
            name: 'required|max:150',
            time: 'required|string',
            image: 'url',
            dinein_price: 'required|string',
            takeaway_price: 'required|string',
            category_id: 'integer',
            sub_category_id: 'integer',
            meal_type: 'array|required',
            availability_count: 'integer',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        let menu = record;
        if (menu === null) {
            menu = new Menu_1.default();
        }
        try {
            let payload = request.body();
            let meal_type = request.body().meal_type;
            const meal_types = JSON.stringify(meal_type);
            console.log(meal_types);
            menu.name = payload.name;
            menu.dinein_price = payload.dinein_price;
            menu.price = payload.dinein_price;
            if (payload.meal_type)
                menu.meal_type = meal_types;
            menu.takeaway_price = payload.takeaway_price;
            menu.category_id = payload.category_id;
            if (payload.sub_category_id)
                menu.sub_category_id = payload.sub_category_id;
            menu.availability_count = payload.availability_count || 0;
            menu.image = payload.image;
            menu.time = payload.time || '10-15 Min';
            await menu.save();
            return response.ok({
                message: 'Menu Create/Updated Successfully',
            });
        }
        catch (exception) {
            return response.internalServerError(exception);
        }
    }
    async updateStatus({ request, response }) {
        let { menu } = request;
        const rules = {
            status: 'required|boolean',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        menu.status = request.body().status;
        await menu.save();
        return response.ok({ menu
        });
    }
    async updateAvailabilityCount({ request, response }) {
        let { menu } = request;
        const rules = {
            updated_count: 'required|integer',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        menu.availability_count = request.body().updated_count;
        await menu.save();
        return response.ok(menu);
    }
    async show({ request, response }) {
        const { menu } = request;
        response.ok(menu);
        if (!menu)
            throw new NotFoundException_1.default('Menu not found');
    }
    async searchMenu({ response, params }) {
        const name = params.name;
        const menus = await Menu_1.default.query().where('name', 'like', `%${name}%`);
        response.ok(menus);
        if (!menus)
            throw new NotFoundException_1.default('Menu not found');
    }
}
exports.default = MenuController;
//# sourceMappingURL=MenuController.js.map