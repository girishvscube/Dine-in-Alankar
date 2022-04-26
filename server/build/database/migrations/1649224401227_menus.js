"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Menus extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'menus';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('name', 225).notNullable();
            table.string('image');
            table.float('price', 8, 2).notNullable();
            table.float('dinein_price', 8, 2).notNullable();
            table.float('takeaway_price', 8, 2).notNullable();
            table.json('meal_type');
            table.integer('availability_count').notNullable().defaultTo(0);
            table
                .integer('category_id')
                .unsigned()
                .references('categories.id')
                .onDelete('CASCADE')
                .notNullable();
            table.integer('sub_category_id').unsigned().references('categories.id').onDelete('CASCADE');
            table.timestamps(false);
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Menus;
//# sourceMappingURL=1649224401227_menus.js.map