"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class MetaOrders extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'meta_orders';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('menu_id').references('menus.id').unsigned();
            table.integer('category_id').references('categories.id').unsigned();
            table.integer('quantity').notNullable().unsigned();
            table.string('price').notNullable();
            table.string('gst').notNullable();
            table.integer('order_id').references('orders.id').unsigned();
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = MetaOrders;
//# sourceMappingURL=1649227779460_meta_orders.js.map