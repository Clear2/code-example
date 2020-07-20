"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Types = {
    "indexService": Symbol["for"]("indexService")
};
// 数据提供方
var IndexService = /** @class */ (function () {
    function IndexService() {
    }
    IndexService.prototype.log = function (str) {
        console.log('😇😇😇😇😇😇😇😇😇😊😊🙂', str);
    };
    return IndexService;
}());
//
function inject(serviceIdentifer) {
    console.log("step1", "我进入");
    return function (target, targetKey, index) {
    };
}
// 路由
var IndexController = /** @class */ (function () {
    // 对参数进行增强
    function IndexController(indexService) {
        this.indexService = indexService;
    }
    IndexController.prototype.info = function () {
        this.indexService.log("");
    };
    IndexController = __decorate([
        __param(0, inject(Types.indexService))
    ], IndexController);
    return IndexController;
}());
// 傻瓜写法
var indexService = new IndexService();
var indexController = new IndexController(indexService);
indexController.info();
// 无侵入式的
// const index = new IndexController()
// index.info()
