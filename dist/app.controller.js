"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const shell_function_1 = require("./shared/functions/shell.function");
const fs = require("fs");
const path_1 = require("path");
const rawbody = require("raw-body");
let AppController = class AppController {
    constructor() { }
    async getHello() {
        return await (0, shell_function_1.execute)('python main.py');
    }
    async process(req) {
        const raw = await rawbody(req);
        const text = raw.toString();
        var base64Data = text.replace(/^data:image\/png;base64,/, "");
        const path = (0, path_1.join)(__dirname, '..', 'images', 'image.png');
        console.log(path);
        fs.writeFileSync(path, base64Data, 'base64');
        const response = JSON.parse(await (0, shell_function_1.execute)('python main.py'));
        if (response.result === true) {
            return response;
        }
        else {
            throw new common_1.HttpException('Pose não reconhecida!', 400);
        }
    }
    uploadFile(file) {
        fs.writeFileSync((0, path_1.join)(__dirname, '..', 'images', 'image.png'), file.buffer);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('process'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "process", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadFile", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map