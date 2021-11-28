"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LtModule = void 0;
const common_1 = require("@nestjs/common");
const lt_gateway_1 = require("./lt-gateway");
const lt_controller_1 = require("./lt/lt.controller");
let LtModule = class LtModule {
};
LtModule = __decorate([
    (0, common_1.Module)({
        providers: [lt_gateway_1.LtGateway],
        controllers: [lt_controller_1.LtController]
    })
], LtModule);
exports.LtModule = LtModule;
//# sourceMappingURL=lt.module.js.map