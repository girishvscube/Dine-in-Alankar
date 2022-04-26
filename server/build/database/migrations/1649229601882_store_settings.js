"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class StoreSettings extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'store_settings';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('phone').notNullable();
            table.string('address').notNullable();
            table.string('gst_no').notNullable();
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = StoreSettings;
//# sourceMappingURL=1649229601882_store_settings.js.map