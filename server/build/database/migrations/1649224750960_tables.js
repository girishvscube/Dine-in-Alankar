"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Tables extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'tables';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments();
            table.integer('floor').defaultTo(0).unsigned();
            table.integer('hall').defaultTo(0).unsigned();
            table.specificType('type', 'tinyint').unsigned().defaultTo(1);
            table.specificType('status', 'tinyint').unsigned().defaultTo(1);
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Tables;
//# sourceMappingURL=1649224750960_tables.js.map