"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class StaffValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string({ trim: true }),
            email: Validator_1.schema.string({ trim: true }),
            phone: Validator_1.schema.string({ trim: true }),
            password: Validator_1.schema.string({ trim: true }),
            role: Validator_1.schema.number(),
            table: Validator_1.schema.number(),
            image: Validator_1.schema.string({ trim: true }),
            available: Validator_1.schema.boolean(),
        });
        this.messages = {};
    }
}
exports.default = StaffValidator;
//# sourceMappingURL=StaffValidator.js.map