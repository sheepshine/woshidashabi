exports.id = "main";
exports.modules = {

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