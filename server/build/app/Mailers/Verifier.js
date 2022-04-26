"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mail_1 = global[Symbol.for('ioc.use')]("Adonis/Addons/Mail");
class Verifier extends Mail_1.BaseMailer {
    prepare(message) {
        message.subject('The email subject').from('admin@example.com').to('user@example.com');
    }
}
exports.default = Verifier;
//# sourceMappingURL=Verifier.js.map