exports.id = "main";
exports.modules = {

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppModule = void 0;\nconst common_1 = __webpack_require__(/*! @nestjs/common */ \"@nestjs/common\");\nconst app_controller_1 = __webpack_require__(/*! ./app.controller */ \"./src/app.controller.ts\");\nconst app_service_1 = __webpack_require__(/*! ./app.service */ \"./src/app.service.ts\");\nconst app_middleware_1 = __webpack_require__(/*! ./app.middleware */ \"./src/app.middleware.ts\");\nlet AppModule = class AppModule {\n    configure(consumer) {\n        consumer\n            .apply(app_middleware_1.LoggerMiddleware, app_middleware_1.LoggerMiddleware2)\n            .forRoutes(app_controller_1.AppController);\n    }\n};\nAppModule = __decorate([\n    common_1.Module({\n        imports: [],\n        controllers: [app_controller_1.AppController],\n        providers: [app_service_1.AppService],\n    })\n], AppModule);\nexports.AppModule = AppModule;\n\n\n//# sourceURL=webpack:///./src/app.module.ts?");

/***/ })

};