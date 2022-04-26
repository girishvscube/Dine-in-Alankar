"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Menu_1 = __importDefault(require("./Menu"));
class Category extends Orm_1.BaseModel {
    static async listing(request) {
        const { page = 1, search_key = '' } = request.qs();
        const limit = 10;
        let query = this.query();
        if (search_key) {
            query = query.where('name', 'LIKE', `%${search_key}%`);
        }
        return query
            .select('id', 'name', 'image', 'status', 'created_at')
            .whereNull('parent_id')
            .orderBy('id', 'desc')
            .paginate(page, limit);
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Category.prototype, "slug", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Category.prototype, "image", void 0);
__decorate([
    (0, Orm_1.column)({
        prepare: (value) => Number(value),
        serialize: (value) => Boolean(value),
    }),
    __metadata("design:type", Boolean)
], Category.prototype, "status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Category.prototype, "gst", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Category.prototype, "parent_id", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => Menu_1.default, {
        foreignKey: 'category_id'
    }),
    __metadata("design:type", Object)
], Category.prototype, "menus", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Category.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Category.prototype, "updatedAt", void 0);
exports.default = Category;
//# sourceMappingURL=Category.js.map