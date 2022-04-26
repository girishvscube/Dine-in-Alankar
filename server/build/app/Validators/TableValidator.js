"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class TableValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            table_number: Validator_1.schema.string({ trim: true }),
            floor: Validator_1.schema.string({ trim: true }),
            hall: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {
            'table_number.required': 'table number should be be required',
            'floor.required': 'floor number should be required',
            'hall.required': 'hall number should be required',
        };
    }
}
exports.default = TableValidator;
//# sourceMappingURL=TableValidator.js.map