"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class UsersTables extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users_tables';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE').notNullable();
            table.integer('table_id').unsigned().references('tables.id').onDelete('CASCADE').notNullable();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = UsersTables;
//# sourceMappingURL=1649229656971_users_tables.js.map