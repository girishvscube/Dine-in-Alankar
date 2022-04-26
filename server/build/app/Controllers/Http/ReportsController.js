"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Order"));
const helpers_1 = global[Symbol.for('ioc.use')]("App/Helpers/helpers");
const Handler_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/Handler"));
const MetaOrder_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/MetaOrder"));
class ReportsController {
    async revenue({ response, request }) {
        try {
            const data = request.all();
            const revenue = await Order_1.default.query()
                .sum('total as total')
                .where('payment_status', 'PAID')
                .whereBetween('created_at', [data.startDate, data.endDate]);
            return response.ok({ data: revenue });
        }
        catch (err) {
            throw new Handler_1.default();
        }
    }
    async Today({ response }) {
        const today = await (0, helpers_1.Today)();
        const revenue = await Order_1.default.query()
            .sum('total as total')
            .where('payment_status', 'PAID')
            .where('created_at', 'LIKE', `${today}%`);
        return response.ok({ data: revenue });
    }
    async Yesterday({ response }) {
        const yesterday = await (0, helpers_1.Yesterday)();
        const revenue = await Order_1.default.query()
            .sum('total as total')
            .where('payment_status', 'PAID')
            .where('created_at', 'LIKE', `${yesterday}%`);
        return response.ok({ data: revenue });
    }
    async ThisWeek({ response }) {
        const { weekDate, today } = await (0, helpers_1.Thisweek)();
        const revenue = await Order_1.default.query()
            .sum('total as total')
            .where('payment_status', 'PAID')
            .whereBetween('created_at', [weekDate, today]);
        return response.ok({ data: revenue });
    }
    async LastWeek({ response }) {
        const { lastweekDate, weekDate } = await (0, helpers_1.LastWeek)();
        const revenue = await Order_1.default.query()
            .sum('total as total')
            .where('payment_status', 'PAID')
            .whereBetween('created_at', [lastweekDate, weekDate]);
        return response.ok({ data: revenue });
    }
    async ThisMonth({ response }) {
        const { monthDate, today } = await (0, helpers_1.ThisMonth_date)();
        const revenue = await Order_1.default.query()
            .sum('total as total')
            .where('payment_status', 'PAID')
            .whereBetween('created_at', [monthDate, today]);
        return response.ok({ data: revenue });
    }
    async particularDate({ response, request }) {
        const data = request.all();
        const revenue = await Order_1.default.query()
            .sum('total as total')
            .where('payment_status', 'PAID')
            .where('created_at', 'LIKE', `${data.date}%`);
        return response.ok({ data: revenue });
    }
    async itemSold({ response, request }) {
        const { datee } = request.all();
        try {
            if (datee) {
                const data = await MetaOrder_1.default.query()
                    .groupBy('menu_id')
                    .sum('quantity as quantity')
                    .select('price', 'menu_id')
                    .preload('menus', (query) => {
                    query.select('name');
                })
                    .where('created_at', 'LIKE', `%${datee}%`);
                const res = data.map((item) => {
                    console.log(item);
                    return {
                        item: item.menus.name,
                        quantity: item.quantity,
                        total: parseFloat(item.price) * parseFloat(item.quantity),
                    };
                });
                return response.ok({ data: res });
            }
            else {
                const data = await MetaOrder_1.default.query()
                    .groupBy('menu_id')
                    .sum('quantity as quantity')
                    .select('price', 'menu_id')
                    .preload('menus', (query) => {
                    query.select('name');
                });
                const res = data.map((item) => {
                    console.log(item);
                    return {
                        item: item.menus.name,
                        quantity: item.quantity,
                        total: parseFloat(item.price) * parseFloat(item.quantity),
                    };
                });
                return response.ok({ data: res });
            }
        }
        catch (err) {
            throw new Handler_1.default();
        }
    }
    async totalItemSold({ request, response }) {
        try {
            const data = await this.generatesales();
            const order_type = request.all().order_type;
            const order_wise = await Order_1.default.query()
                .select('id')
                .preload('meta_order', (query) => {
                query.select('quantity').sum('quantity as quantity');
            })
                .where('order_type', order_type)
                .where('payment_status', 'PAID');
            return response.ok({ data: data[0], data1: order_wise[0] });
        }
        catch (err) {
            throw new Handler_1.default();
        }
    }
    async generatesales() {
        const data = await Order_1.default.query()
            .select('id')
            .preload('meta_order', (query) => {
            query.select('quantity').sum('quantity as quantity');
        })
            .where('payment_status', 'PAID');
        return data;
    }
    async customers({ response }) {
        const data = await Order_1.default.query().count('id as total');
        response.ok({ data: data });
        if (!data)
            throw new Handler_1.default();
    }
    async revenu_six({ response }) {
        try {
            const data = await Order_1.default.query().whereRaw('MONTH(created_at) = MONTH(CURRENT_DATE()) AND YEAR(created_at) = YEAR(CURRENT_DATE())').sum('total as total').where('payment_status', 'PAID').groupByRaw('MONTH(created_at)');
            return response.ok({ data: data });
        }
        catch (err) {
            return response.badRequest({ data: err });
        }
    }
}
exports.default = ReportsController;
//# sourceMappingURL=ReportsController.js.map