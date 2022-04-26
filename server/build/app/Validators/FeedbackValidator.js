"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class FeedbackValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            customer_id: Validator_1.schema.number(),
            order_id: Validator_1.schema.number(),
            comments: Validator_1.schema.string({ trim: true }),
            staff: Validator_1.schema.number(),
            ratings: Validator_1.schema.number(),
        });
        this.messages = {
            'order_id.required': 'required',
            'customer_id.required': 'required',
            'comments.required': 'required',
            'staff.required': 'staff required',
            'ratingd.required': 'required',
        };
    }
}
exports.default = FeedbackValidator;
//# sourceMappingURL=FeedbackValidator.js.map