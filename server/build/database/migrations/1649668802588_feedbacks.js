"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Feedbacks extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'feedbacks';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('rating');
            table.string('comment');
            table.integer('order_id').references('orders.id').unsigned();
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Feedbacks;
//# sourceMappingURL=1649668802588_feedbacks.js.map