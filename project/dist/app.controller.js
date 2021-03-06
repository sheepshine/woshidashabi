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
const app_service_1 = require("./app.service");
let AppController = (() => {
    let AppController = class AppController {
        constructor(appService) {
            this.appService = appService;
        }
        getAllUser(res) {
            return this.appService.getAllUser().then(users => {
                res.status(common_1.HttpStatus.OK).json(users);
            });
        }
        getUser(res, id) {
            return this.appService.getUser(+id).then(user => {
                res.status(common_1.HttpStatus.OK).json(user);
            });
        }
    };
    __decorate([
        common_1.Get(),
        __param(0, common_1.Response()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppController.prototype, "getAllUser", null);
    __decorate([
        common_1.Get('/:id'),
        __param(0, common_1.Response()), __param(1, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], AppController.prototype, "getUser", null);
    AppController = __decorate([
        common_1.Controller("user"),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], AppController);
    return AppController;
})();
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map