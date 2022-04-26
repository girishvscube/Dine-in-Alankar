"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Categories extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'categories';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name', 60).notNullable();
            table.string('image', 255);
            table.boolean('status').defaultTo(true);
            table.integer('parent_id').unsigned().references('id').inTable('categories');
            table.string('gst').nullable();
            table.string('slug').notNullable();
            table.timestamps();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Categories;
//# sourceMappingURL=1649224304306_categories.js.map