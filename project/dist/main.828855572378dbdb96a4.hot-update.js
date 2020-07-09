exports.id = "main";
exports.modules = {

/***/ "./src/common/filters/http-exception.filter.ts":
/*!*****************************************************!*\
  !*** ./src/common/filters/http-exception.filter.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.HttpExceptionFilter = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet HttpExceptionFilter = class HttpExceptionFilter {\n    catch(exception, host) {\n        const ctx = host.switchToHttp();\n        const response = ctx.getResponse();\n        const request = ctx.getRequest();\n        const status = exception.getStatus();\n        console.log(exception);\n        const exceptionRes = exception.getResponse();\n        const { error, message, } = exceptionRes;\n        response.status(status).json({\n            status,\n            timestamp: new Date().toISOString(),\n            path: request.url,\n            error,\n            message,\n        });\n    }\n};\nHttpExceptionFilter = __decorate([\n    common_1.Catch(common_1.HttpException)\n], HttpExceptionFilter);\nexports.HttpExceptionFilter = HttpExceptionFilter;\n\n\n//# sourceURL=webpack:///./src/common/filters/http-exception.filter.ts?");

/***/ }),

/***/ "./src/modules/demo/demo.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/demo/demo.controller.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\n    return function (target, key) { decorator(target, key, paramIndex); }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DemoController = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst demo_service_1 = __webpack_require__(/*! ./demo.service */ \"./src/modules/demo/demo.service.ts\");\nconst http_exception_filter_1 = __webpack_require__(/*! ../../common/filters/http-exception.filter */ \"./src/common/filters/http-exception.filter.ts\");\nlet DemoController = class DemoController {\n    constructor(demoService) {\n        this.demoService = demoService;\n    }\n    fetch({ id }, token) {\n        if (!id) {\n            throw new common_1.HttpException({ status: common_1.HttpStatus.BAD_REQUEST, message: '请求参数id 必传', error: 'id is required' }, common_1.HttpStatus.BAD_REQUEST);\n        }\n        return this.demoService.fetch(id);\n    }\n};\n__decorate([\n    common_1.Get(),\n    __param(0, common_1.Query()), __param(1, common_1.Headers('token')),\n    __metadata(\"design:type\", Function),\n    __metadata(\"design:paramtypes\", [Object, Object]),\n    __metadata(\"design:returntype\", String)\n], DemoController.prototype, \"fetch\", null);\nDemoController = __decorate([\n    common_1.UseFilters(new http_exception_filter_1.HttpExceptionFilter()),\n    common_1.Controller('/demo'),\n    __metadata(\"design:paramtypes\", [demo_service_1.DemoService])\n], DemoController);\nexports.DemoController = DemoController;\n\n\n//# sourceURL=webpack:///./src/modules/demo/demo.controller.ts?");

/***/ }),

/***/ "./src/modules/demo/demo.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/demo/demo.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.DemoModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst demo_controller_1 = __webpack_require__(/*! ./demo.controller */ \"./src/modules/demo/demo.controller.ts\");\nconst demo_service_1 = __webpack_require__(/*! ./demo.service */ \"./src/modules/demo/demo.service.ts\");\nlet DemoModule = class DemoModule {\n};\nDemoModule = __decorate([\n    common_1.Module({\n        imports: [],\n        controllers: [demo_controller_1.DemoController],\n        providers: [demo_service_1.DemoService],\n    })\n], DemoModule);\nexports.DemoModule = DemoModule;\n\n\n//# sourceURL=webpack:///./src/modules/demo/demo.module.ts?");

/***/ })

};