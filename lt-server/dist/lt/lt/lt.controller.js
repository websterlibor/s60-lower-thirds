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
exports.LtController = void 0;
const common_1 = require("@nestjs/common");
const lt_gateway_1 = require("../lt-gateway");
let LtController = class LtController {
    constructor(ltGateway) {
        this.ltGateway = ltGateway;
    }
    sendMessage() {
        this.ltGateway.send('ahoj');
        return "sent";
    }
    async preview(data) {
        this.ltGateway.sendToPreview(data);
        return data;
    }
    async public(data) {
        this.ltGateway.sendToPublic(data);
        return data;
    }
    testPreview() {
        this.ltGateway.sendToPreview('ahoj');
        return "test preview";
    }
};
__decorate([
    (0, common_1.Get)('send'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LtController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Post)('preview'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LtController.prototype, "preview", null);
__decorate([
    (0, common_1.Post)('public'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LtController.prototype, "public", null);
__decorate([
    (0, common_1.Get)('test-preview'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LtController.prototype, "testPreview", null);
LtController = __decorate([
    (0, common_1.Controller)('lt'),
    __metadata("design:paramtypes", [lt_gateway_1.LtGateway])
], LtController);
exports.LtController = LtController;
//# sourceMappingURL=lt.controller.js.map