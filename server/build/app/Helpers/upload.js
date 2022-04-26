"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toS3 = void 0;
const fs = __importStar(require("fs"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
async function toS3(imagePath, type) {
    return new Promise(async (resolve) => {
        aws_sdk_1.default.config.update({
            accessKeyId: process.env.AWS_S3_KEY_ID,
            secretAccessKey: process.env.AWS_S3_SECRET,
        });
        let ext = type ? type : getFileExtesion(imagePath);
        const s3 = new aws_sdk_1.default.S3();
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Body: fs.createReadStream(imagePath),
            Key: Date.now() + '_.' + ext,
            ACL: 'public-read',
        };
        if (ext == 'svg') {
            params['ContentType'] = 'image/svg+xml';
        }
        s3.upload(params, function (err, data) {
            if (err) {
                resolve('');
            }
            if (data) {
                if (fs.existsSync(imagePath))
                    fs.unlinkSync(imagePath);
                resolve(data.Location);
            }
        });
    });
}
exports.toS3 = toS3;
function getFileExtesion(file) {
    const lastDot = file.lastIndexOf('.');
    const ext = file.substring(lastDot + 1);
    return ext;
}
//# sourceMappingURL=upload.js.map