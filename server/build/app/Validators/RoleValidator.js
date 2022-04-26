"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class RoleValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            role: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {
            'role.required': 'role field is required',
        };
    }
}
exports.default = RoleValidator;
//# sourceMappingURL=RoleValidator.js.map