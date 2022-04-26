"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const Validator = require('validatorjs');
class AuthController {
    async login({ request, response, auth }) {
        try {
            const rules = {
                email: 'required|max:150|email',
                password: 'required|min:8|max:15',
            };
            const validation = new Validator(request.all(), rules);
            if (validation.fails()) {
                return response.badRequest(validation.errors.errors);
            }
            let { email, password } = request.all();
            const user = await User_1.default.query()
                .where('email', email)
                .preload('role', (query) => {
                query.select('name', 'slug');
            })
                .first();
            if (user && !user.status) {
                return response.badRequest({ message: 'User is disabled to login Please contact admin' });
            }
            if (!user) {
                return response.badRequest({ message: 'No registered user found for the given email' });
            }
            if (!(await Hash_1.default.verify(user.password, password))) {
                return response.badRequest({ message: 'Invalid credentials' });
            }
            const token = await auth.use('api').generate(user, {
                expiresIn: '12hours',
            });
            let obj = {
                name: user.name,
                email: user.email,
                role: user.role,
                token: token,
                id: user.id,
            };
            return response.ok({
                message: `User LoggedIn Successfully`,
                data: obj,
            });
        }
        catch (exception) {
            return response.internalServerError({ message: exception.message });
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map