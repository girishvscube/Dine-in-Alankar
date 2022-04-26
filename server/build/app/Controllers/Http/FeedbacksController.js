"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Feedback_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Feedback"));
const NotFoundException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/NotFoundException"));
const NotcreatedException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/NotcreatedException"));
const Order_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Order"));
const Validator = require('validatorjs');
class FeedbacksController {
    async index({ response }) {
        const data = await Feedback_1.default.query().preload('order', (query) => {
            query.select('name', 'phone', 'table_id');
            query.preload('table', (query) => {
                query.preload('users', (query) => {
                    query.select('name');
                });
            });
        });
        response.ok(data);
        if (!data)
            throw new NotFoundException_1.default('Not Found');
    }
    async store({ request, response }) {
        const rules = {
            rating: 'required|max:150',
            comment: 'required|max:150',
            order_id: 'required|integer',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        const data = await Feedback_1.default.create(request.all());
        response.created({ data: data });
        if (!data)
            throw new NotcreatedException_1.default('Not Created');
    }
    async show({ response, params }) {
        const id = params.id;
        const data = await Feedback_1.default.query()
            .preload('order', (query) => {
            query.select('name', 'phone', 'table_id');
            query.preload('table', (query) => {
                query.preload('users', (query) => {
                    query.select('name');
                });
            });
        })
            .where('id', id)
            .first();
        response.ok({ data: data });
        if (!data)
            throw new NotFoundException_1.default('Not Found');
    }
    async feedbackCount({ response }) {
        const data = await Feedback_1.default.query().count('id as id');
        response.ok({ data: data });
        if (!data)
            throw new NotFoundException_1.default('Not Found');
    }
    async feedbackAvg({ response }) {
        const data = await Feedback_1.default.query().avg('rating as rating');
        response.ok({ data: data });
        if (!data)
            throw new NotFoundException_1.default('Not Found');
    }
    async Ratingssum({ response }) {
        const data = await Feedback_1.default.query().sum('rating as rating');
        response.ok({ data: data });
        if (!data)
            throw new NotFoundException_1.default('Not Found');
    }
    async Search({ request, response }) {
        try {
            const { id } = request.all();
            console.log(id, 'id');
            const data = await Feedback_1.default.query()
                .preload('order', (query) => {
                query.select('name', 'phone', 'table_id');
                query.preload('table', (query) => {
                    query.preload('users', (query) => {
                        query.select('name');
                    });
                });
            })
                .where('id', id);
            return response.ok({ data: data });
        }
        catch (err) {
            return response.notFound({ error: 'no data found' });
        }
    }
    async datewise({ request, response }) {
        try {
            const { date } = request.all();
            console.log(date, 'date');
            const data = await Feedback_1.default.query()
                .preload('order', (query) => {
                query.select('name', 'phone', 'table_id');
                query.preload('table', (query) => {
                    query.preload('users', (query) => {
                        query.select('name');
                    });
                });
            })
                .where('created_at', 'LIKE', `${date}%`);
            return response.ok({ data: data });
        }
        catch (err) {
            return response.notFound({ error: 'no data found' });
        }
    }
    async staffReport({}) {
        const data = await Order_1.default.query().preload('table', (query) => {
            query.preload('users', (query) => {
                query.select('name', 'id', 'role_id');
                query.preload('role');
            });
        });
        return data;
    }
}
exports.default = FeedbacksController;
//# sourceMappingURL=FeedbacksController.js.map