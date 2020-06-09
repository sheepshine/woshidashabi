exports.id = "main";
exports.modules = {

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nlet AppController = (() => {\n    let AppController = class AppController {\n        constructor(appService) {\n            this.appService = appService;\n        }\n        getAllUser(res) {\n            return this.appService.getAllUser().then(users => {\n                res.status(common_1.HttpStatus.OK).json(users);\n            });\n        }\n        getUser(res, id) {\n            return this.appService.getUser(+id).then(user => {\n                res.status(common_1.HttpStatus.OK).json(user);\n            });\n        }\n        async addUser(res, body, req) {\n            console.log(body, 111111);\n            return \"success\";\n        }\n    };\n    __decorate([\n        common_1.Get(),\n        __param(0, common_1.Response()),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object]),\n        __metadata(\"design:returntype\", void 0)\n    ], AppController.prototype, \"getAllUser\", null);\n    __decorate([\n        common_1.Get('/:id'),\n        __param(0, common_1.Response()), __param(1, common_1.Param('id')),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object]),\n        __metadata(\"design:returntype\", void 0)\n    ], AppController.prototype, \"getUser\", null);\n    __decorate([\n        common_1.Post(),\n        __param(0, common_1.Response()), __param(1, common_1.Body()), __param(2, common_1.Request()),\n        __metadata(\"design:type\", Function),\n        __metadata(\"design:paramtypes\", [Object, Object, Object]),\n        __metadata(\"design:returntype\", Promise)\n    ], AppController.prototype, \"addUser\", null);\n    AppController = __decorate([\n        common_1.Controller(\"user\"),\n        __metadata(\"design:paramtypes\", [app_service_1.AppService])\n    ], AppController);\n    return AppController;\n})();\nexports.AppController = AppController;\n\n\n//# sourceURL=webpack:///./src/app.controller.ts?");

/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nlet AppModule = (() => {\n    let AppModule = class AppModule {\n    };\n    AppModule = __decorate([\n        common_1.Module({\n            imports: [],\n            controllers: [app_controller_1.AppController],\n            providers: [app_service_1.AppService],\n        })\n    ], AppModule);\n    return AppModule;\n})();\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ })

};