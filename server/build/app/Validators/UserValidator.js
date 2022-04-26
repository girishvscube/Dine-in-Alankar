"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
class UserValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            email: Validator_1.schema.string({ trim: true }, [
                Validator_1.rules.maxLength(50),
                Validator_1.rules.minLength(3),
                Validator_1.rules.unique({ table: 'users', column: 'email' }),
            ]),
            password: Validator_1.schema.string({}, [Validator_1.rules.minLength(8)]),
        });
        this.messages = {
            'email.required': 'email is required',
            'email.unique': 'user already exists with this email please login',
            'password.required': 'password is required',
        };
    }
}
exports.default = UserValidator;
//# sourceMappingURL=UserValidator.js.map