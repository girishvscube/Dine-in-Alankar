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
const MetaOrder_1 = __importDefault(require("./MetaOrder"));
const Table_1 = __importDefault(require("./Table"));
class Order extends Orm_1.BaseModel {
    static async listing(request) {
        const { page = 1, search_key = '' } = request.qs();
        const limit = 10;
        let query = this.query();
        if (search_key) {
            query = query.where('name', 'LIKE', `%${search_key}%`).orWhere('bill_no', 'LIKE', `%${search_key}%`);
        }
        return query
            .preload('meta_order', (query) => { query.preload('menus'); })
            .orderBy('id', 'desc').preload('table', (query) => {
            query.preload('users', (query) => {
                query.preload('role');
            });
        })
            .paginate(page, limit);
    }
}
__decorate([
    (0, Orm_1.column)({ isPrimary: true }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "name", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "email", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "phone", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Order.prototype, "order_type", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Order.prototype, "total_persons", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "date_of_occassion", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "advance_received", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "occassion", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "bill_no", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "payment_status", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "tax", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "sub_toal", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "total", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "delivery_date", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", String)
], Order.prototype, "instructions", void 0);
__decorate([
    (0, Orm_1.column)(),
    __metadata("design:type", Number)
], Order.prototype, "table_id", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Order.prototype, "createdAt", void 0);
__decorate([
    Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", luxon_1.DateTime)
], Order.prototype, "updatedAt", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => MetaOrder_1.default, {
        foreignKey: 'order_id',
    }),
    __metadata("design:type", Object)
], Order.prototype, "meta_order", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Table_1.default, {
        foreignKey: 'table_id',
    }),
    __metadata("design:type", Object)
], Order.prototype, "table", void 0);
exports.default = Order;
//# sourceMappingURL=Order.js.map