"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = global[Symbol.for('ioc.use')]("App/Helpers/helpers");
const Menu_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Menu"));
const MetaOrder_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/MetaOrder"));
const Order_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Order"));
const Validator = require('validatorjs');
class OrderController {
    async index({ request, response }) {
        const data = await Order_1.default.listing(request);
        return response.ok({ data: data });
    }
    async store({ request, response }) {
        const rules = {
            name: 'required|max:150',
            email: 'required|email',
            phone: 'required|string',
        };
        let price = 0;
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        let order = new Order_1.default();
        this.autoIncrementBillNo();
        try {
            let payload = request.body();
            let items = payload.items;
            items = await Promise.all(items.map(async (item) => {
                const menu = await Menu_1.default.query().where('id', item.menu_id).preload('category').first();
                if (payload.order_type === 2 || payload.order_type === 3) {
                    price = menu.takeaway_price;
                }
                else {
                    price = menu.dinein_price;
                }
                const sub_total = price * item.quantity;
                item.sub_total = sub_total;
                item.category_id = menu.category_id;
                item.gst = menu.category.gst;
                item.price = menu.price;
                return item;
            }));
            const { sub_total, tax, final_total } = await (0, helpers_1.calculate)(items);
            order.name = payload.name;
            order.phone = payload.phone;
            order.email = payload.email;
            order.table_id = payload.table_id || null;
            order.order_type = payload.order_type;
            order.total_persons = payload.total_persons || null;
            order.instructions = payload.instructions;
            order.sub_toal = sub_total;
            order.tax = tax;
            order.total = final_total;
            order.bill_no = await this.autoIncrementBillNo();
            order.payment_status = 'PENDING';
            order.date_of_occassion = payload.date_of_occassion || null;
            order.advance_received = payload.advance_received || null;
            order.occassion = payload.occassion || null;
            await order.save();
            for (let item of items) {
                await MetaOrder_1.default.create({
                    menu_id: item.menu_id,
                    category_id: item.category_id,
                    order_id: order.id,
                    price: item.price,
                    quantity: item.quantity,
                    gst: item.gst,
                });
            }
            await this.updateMenuAvaliabilityCount(items);
            return response.ok({
                message: 'Order Create Successfully',
            });
        }
        catch (exception) {
            return response.internalServerError(exception);
        }
    }
    async updateMenuAvaliabilityCount(items) {
        for (let item of items) {
            const menu = await Menu_1.default.query().where('id', item.menu_id);
            const availability_count = menu[0].availability_count;
            if (availability_count > 0) {
                const new_availability_count = availability_count - item.quantity;
                await Menu_1.default.query().where('id', item.menu_id).update({
                    availability_count: new_availability_count,
                });
            }
            else {
                await Menu_1.default.query().where('id', item.menu_id).update({ availability_count: 0 });
            }
        }
    }
    async autoIncrementBillNo() {
        const latest = await Order_1.default.query().orderBy('id', 'desc').first();
        const billing = latest?.bill_no || 1000;
        const bill = Number(billing) + 1;
        return bill.toString();
    }
    async updateStatus({ request, response, params }) {
        try {
            const order = await Order_1.default.findOrFail(params.id);
            const payload = request.body();
            order.payment_status = payload.payment_status ? 'PAID' : 'PENDING';
            await order.save();
            return response.ok({
                message: 'Order Payment Status Updated Successfully',
            });
        }
        catch (exception) {
            return response.internalServerError(exception);
        }
    }
    async show({ response, params }) {
        try {
            const data = await Order_1.default.query().where('id', params.id).preload('table', (query) => {
                query.preload('users', (query) => {
                    query.preload('role');
                });
            }).preload('meta_order', (query) => {
                query.preload('menus');
            });
            return response.ok({ data: data });
        }
        catch (exception) {
            return response.internalServerError(exception);
        }
    }
    async activeOrders({ response, request }) {
        try {
            const { order_type, page, id } = request.all();
            if (id) {
                const data = await Order_1.default.query()
                    .where('payment_status', 'PENDING')
                    .where('order_type', '=', order_type)
                    .where('id', '=', id)
                    .preload('table').preload('meta_order')
                    .paginate(page, 10);
                return response.ok({ data: data });
            }
            else {
                const data = await Order_1.default.query()
                    .where('payment_status', 'PENDING')
                    .where('order_type', '=', order_type)
                    .preload('table').preload('meta_order')
                    .paginate(page, 10);
                return response.ok({ data: data });
            }
        }
        catch (exception) {
            console.log(exception.message);
            return response.internalServerError(exception);
        }
    }
    async pastOrders({ request, response }) {
        const { order_type, page, id } = request.all();
        if (id) {
            const data = await Order_1.default.query()
                .where('payment_status', 'PAID')
                .where('order_type', '=', order_type)
                .where('id', '=', id)
                .preload('table').preload('meta_order')
                .paginate(page, 10);
            return response.ok({ data: data });
        }
        else {
            const data = await Order_1.default.query()
                .where('payment_status', 'PAID')
                .where('order_type', '=', order_type)
                .preload('table').preload('meta_order')
                .paginate(page, 10);
            response.ok({ data: data });
            if (!data)
                throw new Error('No Data Found');
        }
    }
    async getOrdersbytype({ response, request }) {
        const order_type = request.all().order_type;
        const page = request.all().page;
        const takeawayorders = await Order_1.default.query()
            .preload('meta_order', (query) => {
            query.preload('menus');
        })
            .where('order_type', '=', order_type)
            .paginate(page, 10);
        return response.ok({ data: takeawayorders });
    }
    async revenue({ response, request }) {
        const order_type = request.all().order_type;
        const revenue = await Order_1.default.query().sum('total as total').where('payment_status', 'PAID');
        const data = await Order_1.default.query()
            .sum('total as total')
            .where('payment_status', 'PAID')
            .where('order_type', '=', order_type);
        const orders = await Order_1.default.query().count('* as total');
        const data1 = await Order_1.default.query().count('* as total').where('order_type', '=', order_type);
        response.ok({ revenue, data, orders, data1 });
    }
    async TableTransfer({ request, response }) {
        const rules = {
            table_id: 'required|integer',
        };
        const validation = new Validator(request.all(), rules);
        if (validation.fails()) {
            return response.badRequest(validation.errors.errors);
        }
        try {
            const order_id = request.all().order_id;
            const order = await Order_1.default.findOrFail(order_id);
            order.table_id = request.all().table_id;
            await order.save();
            return response.ok({
                message: 'Order Table Transfer Successfully',
            });
        }
        catch (exception) {
            return response.internalServerError(exception);
        }
    }
    async getOrdersbytypeandDate({ response, request }) {
        const order_type = request.all().order_type;
        const date = request.all().date;
        const page = request.all().page;
        const takeawayorders = await Order_1.default.query()
            .preload('meta_order', (query) => {
            query.preload('menus');
        })
            .where('order_type', '=', order_type).andWhere('created_at', 'like', `${date}%`)
            .paginate(page, 10);
        return response.ok({ data: takeawayorders });
    }
}
exports.default = OrderController;
//# sourceMappingURL=OrderController.js.map