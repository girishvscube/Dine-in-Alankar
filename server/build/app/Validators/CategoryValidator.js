"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class CategoryValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            name: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.maxLength(50),
                Validator_1.rules.minLength(2),
                Validator_1.rules.unique({ table: 'categories', column: 'name' }),
            ]),
            image_url: Validator_1.schema.string({ trim: true }),
            gst: Validator_1.schema.string({ trim: true }),
        });
        this.messages = {
            'name.required': 'category_name required',
            'name.unique': 'category name already exists',
            'image_url.required': 'Image should be required',
        };
    }
}
exports.default = CategoryValidator;
//# sourceMappingURL=CategoryValidator.js.map