/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ./utils */ \"./src/utils.js\")\n\n\nclass Element {\n    constructor(tagName, attrs, children) {\n        this.tagName = tagName\n        this.attrs = attrs\n        this.children = children || []\n    }\n\n    render() {\n        // 创建真实节点\n        let element = document.createElement(this.tagName)\n\n        // 给节添加属性\n        for (let attr in this.attrs) {\n            utils.setArr(element, attr, this.attrs[attr])\n        }\n\n        // 深度优先\n        this.children.forEach((child) => {\n            console.log(child instanceof Element, child)\n           let childElement = child instanceof Element ? child.render() : document.createTextNode(child)\n            element.appendChild(childElement)\n        })\n        return element\n    }\n\n}\n\nfunction createElement (tagName, attrs, children) {\n    return new Element(tagName, attrs, children)\n}\n\nmodule.exports = {\n    createElement\n}\n\n//# sourceURL=webpack:///./src/element.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { createElement } = __webpack_require__(/*! ./element */ \"./src/element.js\")\nlet ul1 = createElement('ul', {class: 'list'}, [\n    createElement('li', {class: 'item'}, ['1']),\n    createElement('li', {class: 'item'}, ['2']),\n    createElement('li', {class: 'item'}, ['3'])\n])\n\n\nlet root = ul1.render()\nconsole.log(root)\ndocument.body.appendChild(root)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let utils = {\n    setArr (element, attr, value) {\n            switch (attr) {\n                case 'style':\n                    element.style.cssText = value;\n                    break\n                case 'value':\n                    let tagName = element.tagName.toLowerCase()\n                    if (tagName === 'input' || tagName == 'textarea') {\n                        element.value = value\n                    } else {\n                        element.setAttribute(attr, value)\n                    }\n                    break\n                default:\n                    element.setAttribute(attr, value)\n                    break\n            }\n\n    }\n}\n\nmodule.exports = utils\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });