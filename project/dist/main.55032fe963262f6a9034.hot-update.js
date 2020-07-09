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

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst core_1 = __webpack_require__(/*! @nestjs/core */ \"@nestjs/core\");\nconst swagger_1 = __webpack_require__(/*! @nestjs/swagger */ \"@nestjs/swagger\");\nconst app_module_1 = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\nasync function bootstrap() {\n    const app = await core_1.NestFactory.create(app_module_1.AppModule);\n    const options = new swagger_1.DocumentBuilder()\n        .setTitle('nest入门接口标题')\n        .setDescription('使用nest书写的常用性接口')\n        .setVersion('1.0.0')\n        .addTag('用户,安全')\n        .build();\n    const document = swagger_1.SwaggerModule.createDocument(app, options);\n    swagger_1.SwaggerModule.setup('api', app, document);\n    await app.listen(8888);\n    if (true) {\n        module.hot.accept();\n        module.hot.dispose(() => app.close());\n    }\n}\nbootstrap();\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ })

};