"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Order"));
const NotFoundException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/NotFoundException"));
const Table_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Table"));
const NotModifiedException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/NotModifiedException"));
const Validator = require('validatorjs');
class TablesController {
    async index({ response, request }) {
        const page = request.all().page;
        const data = await Order_1.default.query().select('id', 'table_id', 'total_persons').preload('table', (query) => {
            query.preload('users', (query) => {
                query.select('id', 'name', 'role_id');
                query.preload('role', (query) => {
                    query.select('id', 'name');
                });
            });
        }).paginate(page, 10);
        return response.ok({ data: data });
    }
    async create({}) { }
    async store({ request, response }) {
        try {
            const data = request.body();
            const rules = {
                floor: 'required',
                hall: 'required',
                status: 'required',
                type: 'required',
            };
            const validation = await new Validator(data, rules);
            if (validation.fails()) {
                return response.badRequest({ message: validation.messages() });
            }
            const table = await Table_1.default.query().where('floor', data.floor).where('hall', data.hall).first();
            if (table) {
                return response.badRequest({ message: 'table already exist' });
            }
            else {
                const newTable = await Table_1.default.create(data);
                return response.ok({ message: 'table created successfully', data: newTable });
            }
        }
        catch (err) {
            return response.badRequest({ message: 'error in creating table' });
        }
    }
    async show({ response, params }) {
        try {
            const id = params.id;
            const table = await Table_1.default.query().whereNot('id', id);
            return response.ok({
                data: table,
            });
        }
        catch (exception) {
            return response.internalServerError({ message: 'No data found' });
        }
    }
    async edit({}) { }
    async update({ request, response, params }) {
        const data = request.body();
        const rules = {
            floor: 'required',
            hall: 'required',
            status: 'required',
            type: 'required',
        };
        const validation = await new Validator(data, rules);
        if (validation.fails()) {
            return response.badRequest({ message: validation.messages() });
        }
        const table = await Table_1.default.findOrFail(params.id);
        const updatedTable = await Table_1.default.query()
            .where('floor', data.floor)
            .where('hall', data.hall)
            .first();
        if (updatedTable) {
            return response.badRequest({ message: 'table already exist' });
        }
        else {
            ;
            (table.floor = data.floor),
                (table.hall = data.hall),
                (table.status = data.status),
                (table.type = data.type),
                await table.save();
            response.ok({ message: 'table updated successfully', data: table });
        }
        if (!table)
            throw new NotModifiedException_1.default('Not Modified');
    }
    async destroy({ response, params, }) {
        try {
            const table = await Table_1.default.findOrFail(params.id);
            await table.delete();
            return response.ok({ message: 'table deleted successfully' });
        }
        catch (err) {
            return response.badRequest({ message: 'error in deleting table' });
        }
    }
    async updatestatus({ request, response, params }) {
        try {
            const data = request.body();
            const rules = {
                status: 'required',
            };
            const validation = await new Validator(data, rules);
            if (validation.fails()) {
                return response.badRequest({ message: validation.messages() });
            }
            const table = await Table_1.default.findOrFail(params.id);
            table.status = data.status;
            await table.save();
            return response.ok({ message: 'table updated successfully', data: table });
        }
        catch (err) {
            return response.badRequest({ message: 'error in updating table' });
        }
    }
    async listTable({ response }) {
        const data = await Table_1.default.query().where('status', 1);
        response.ok({ data: data });
        if (!data)
            throw new NotFoundException_1.default('Not Found');
    }
}
exports.default = TablesController;
//# sourceMappingURL=TablesController.js.map