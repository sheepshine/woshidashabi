exports.id = "main";
exports.modules = {

/***/ "./src/app.middleware.ts":
/*!*******************************!*\
  !*** ./src/app.middleware.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.LoggerMiddleware2 = exports.LoggerMiddleware = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nlet LoggerMiddleware = (() => {\n    let LoggerMiddleware = class LoggerMiddleware {\n        use(req, res, next) {\n            console.log('middleware is on board!');\n            next();\n        }\n    };\n    LoggerMiddleware = __decorate([\n        common_1.Injectable()\n    ], LoggerMiddleware);\n    return LoggerMiddleware;\n})();\nexports.LoggerMiddleware = LoggerMiddleware;\nclass LoggerMiddleware2 {\n    use(req, res, next) {\n        console.log('middleware2 is on board!');\n        next();\n    }\n}\nexports.LoggerMiddleware2 = LoggerMiddleware2;\n\n\n//# sourceURL=webpack:///./src/app.middleware.ts?");

/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nconst app_middleware_1 = __webpack_require__(/*! ./app.middleware */ \"./src/app.middleware.ts\");\nlet AppModule = (() => {\n    let AppModule = class AppModule {\n        configure(consumer) {\n            consumer\n                .apply(app_middleware_1.LoggerMiddleware)\n                .forRoutes(app_controller_1.AppController);\n        }\n    };\n    AppModule = __decorate([\n        common_1.Module({\n            imports: [],\n            controllers: [app_controller_1.AppController],\n            providers: [app_service_1.AppService],\n        })\n    ], AppModule);\n    return AppModule;\n})();\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ })

};