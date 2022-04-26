"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Permissions extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'permissions';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('role').notNullable().references('id').inTable('roles').unsigned().onDelete('CASCADE');
            table.json('permissions').nullable();
            table.timestamp('created_at', { useTz: true });
            table.timestamp('updated_at', { useTz: true });
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Permissions;
//# sourceMappingURL=1650544672941_permissions.js.map