"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Coupons extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'coupons';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('code').notNullable().unique();
            table.string('percent').notNullable();
            table.string('value').notNullable();
            table.boolean('status').notNullable();
            table.timestamp('expires_at').notNullable();
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Coupons;
//# sourceMappingURL=1649669542961_coupons.js.map