"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
class NotcreatedException extends standalone_1.Exception {
    async handle(error, { response }) {
        if (error.name == 'NotcreatedException') {
            return response.status(400).send({
                error: error.message
            });
        }
    }
}
exports.default = NotcreatedException;
//# sourceMappingURL=NotcreatedException.js.map