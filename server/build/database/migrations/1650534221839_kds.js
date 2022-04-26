"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Kds extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'kds';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name').notNullable();
            table.integer('order_id').notNullable().references('id').inTable('orders').unsigned().onDelete('CASCADE');
            table.integer('table_id').nullable().references('id').inTable('tables').unsigned().onDelete('CASCADE');
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Kds;
//# sourceMappingURL=1650534221839_kds.js.map