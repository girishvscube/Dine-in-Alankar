"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const mailConfig = {
    mailer: 'mailgun',
    mailers: {
        mailgun: {
            driver: 'mailgun',
            baseUrl: 'https://api.mailgun.net/v3',
            key: Env_1.default.get('MAILGUN_API_KEY'),
            domain: Env_1.default.get('MAILGUN_DOMAIN'),
        },
    },
};
exports.default = mailConfig;
//# sourceMappingURL=mail.js.map