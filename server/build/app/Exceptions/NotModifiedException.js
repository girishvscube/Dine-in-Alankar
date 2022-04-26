"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
class NotModifiedException extends standalone_1.Exception {
    async handle(error, { response }) {
        if (error.name == 'NotModifiedException') {
            return response.status(404).send({
                error: error.message
            });
        }
    }
}
exports.default = NotModifiedException;
//# sourceMappingURL=NotModifiedException.js.map