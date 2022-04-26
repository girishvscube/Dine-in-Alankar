"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Menu extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'menus';
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.string('time', 225);
        });
    }
    async down() {
        this.schema.alterTable(this.tableName, (table) => {
            table.dropColumn('time');
        });
    }
}
exports.default = Menu;
//# sourceMappingURL=1649244007922_menu_times.js.map