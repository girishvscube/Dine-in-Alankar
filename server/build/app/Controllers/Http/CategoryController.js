"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Category"));
const Validator = require('validatorjs');
class CategoryController {
    async index({ request, response }) {
        const data = await Category_1.default.listing(request);
        return response.ok({
            data: data,
        });
    }
    async store(ctx) {
        return this.save(ctx);
    }
    async show({ request, response }) {
        const { category } = request;
        return response.json({
            message: 'Categoty',
            data: category
        });
    }
    async update(ctx) {
        const { category } = ctx.request;
        return this.save(ctx, category);
    }
    async destroy({ request, response }) {
        try {
            const { category } = request;
            await category.delete();
            return response.ok({ message: 'Category Deleted Successfully' });
        }
        catch (exception) {
            return response.internalServerError(exception.message);
        }
    }
    async save({ request, response }, record = null) {
        const rules = {
            'name': 'required|max:150',
            'image': 'url',
            'sub_category': 'array',
            'sub_category.*.name': 'string|required',
            'sub_category.*.id': 'integer',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        let category = record;
        if (category === null) {
            category = new Category_1.default();
        }
        const { sub_category } = request.all();
        try {
            let payload = request.body();
            const exists = await this.Exists(payload.name);
            if (exists) {
                return response.badRequest({ error: 'Category Already Exists' });
            }
            category.name = payload.name;
            category.slug = payload.name.trim().replace(' ', '-');
            category.image = payload.image;
            category.gst = payload.gst;
            category = await category.save();
            if (sub_category && sub_category.length) {
                await this.createSubCategory(category, sub_category);
            }
            return response.ok({
                message: 'Category Create/Updated Successfully',
                data: category,
            });
        }
        catch (exception) {
            return response.internalServerError(exception);
        }
    }
    async createSubCategory(category, sub_category_list) {
        try {
            for (let sub_cat of sub_category_list) {
                let sub_category = new Category_1.default();
                sub_category.name = sub_cat.name;
                sub_category.parent_id = category.id;
                sub_category.slug = sub_cat.name.trim().replace(' ', '-');
                (sub_category.image = sub_cat.image || null),
                    (sub_category.gst = sub_cat.gst || null),
                    await sub_category.save();
            }
            return true;
        }
        catch (exception) {
            return exception.message;
        }
    }
    async updateStatus({ request, response }) {
        try {
            let { category } = request;
            const rules = {
                status: 'required|boolean',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            category.status = request.body().status;
            await category.save();
            return response.ok({
                message: 'Category Updated Successfully',
            });
        }
        catch (exception) {
            return response.internalServerError(exception.message);
        }
    }
    async searchCategory({ response, request }) {
        try {
            const id = request.all().id;
            const categories = await Category_1.default.query().where('id', id).preload('menus');
            if (categories.length > 0) {
                return response.ok({ data: categories });
            }
            else {
                return response.notFound({ message: 'Category Not Found' });
            }
        }
        catch (exception) {
            return response.internalServerError(exception.message);
        }
    }
    async Exists(name) {
        const category = await Category_1.default.query().where('name', name).first();
        if (category) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = CategoryController;
//# sourceMappingURL=CategoryController.js.map