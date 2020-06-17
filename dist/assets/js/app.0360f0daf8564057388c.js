/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/img/svg sync recursive \\.svg$":
/*!****************************************!*\
  !*** ./src/assets/img/svg sync \.svg$ ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./adv-02.svg": "./src/assets/img/svg/adv-02.svg",
	"./adv-03.svg": "./src/assets/img/svg/adv-03.svg",
	"./adv-04.svg": "./src/assets/img/svg/adv-04.svg",
	"./adv-05.svg": "./src/assets/img/svg/adv-05.svg",
	"./adv-06.svg": "./src/assets/img/svg/adv-06.svg",
	"./banner-dot.svg": "./src/assets/img/svg/banner-dot.svg",
	"./icon-fb.svg": "./src/assets/img/svg/icon-fb.svg",
	"./icon-inst.svg": "./src/assets/img/svg/icon-inst.svg",
	"./icon-search.svg": "./src/assets/img/svg/icon-search.svg",
	"./icon-tw.svg": "./src/assets/img/svg/icon-tw.svg",
	"./icon-vk.svg": "./src/assets/img/svg/icon-vk.svg",
	"./logo.svg": "./src/assets/img/svg/logo.svg",
	"./m-01.svg": "./src/assets/img/svg/m-01.svg",
	"./m-02.svg": "./src/assets/img/svg/m-02.svg",
	"./m-03.svg": "./src/assets/img/svg/m-03.svg",
	"./m-04.svg": "./src/assets/img/svg/m-04.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/img/svg sync recursive \\.svg$";

/***/ }),

/***/ "./src/assets/img/svg/adv-02.svg":
/*!***************************************!*\
  !*** ./src/assets/img/svg/adv-02.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "adv-02-usage",
      viewBox: "0 0 62 56",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#adv-02",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/adv-03.svg":
/*!***************************************!*\
  !*** ./src/assets/img/svg/adv-03.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "adv-03-usage",
      viewBox: "0 0 52 64",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#adv-03",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/adv-04.svg":
/*!***************************************!*\
  !*** ./src/assets/img/svg/adv-04.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "adv-04-usage",
      viewBox: "0 0 64 56",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#adv-04",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/adv-05.svg":
/*!***************************************!*\
  !*** ./src/assets/img/svg/adv-05.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "adv-05-usage",
      viewBox: "0 0 64 62",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#adv-05",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/adv-06.svg":
/*!***************************************!*\
  !*** ./src/assets/img/svg/adv-06.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "adv-06-usage",
      viewBox: "0 0 63 64",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#adv-06",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/banner-dot.svg":
/*!*******************************************!*\
  !*** ./src/assets/img/svg/banner-dot.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "banner-dot-usage",
      viewBox: "0 0 19 19",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#banner-dot",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/icon-fb.svg":
/*!****************************************!*\
  !*** ./src/assets/img/svg/icon-fb.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-fb-usage",
      viewBox: "0 0 9.968 20",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#icon-fb",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/icon-inst.svg":
/*!******************************************!*\
  !*** ./src/assets/img/svg/icon-inst.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-inst-usage",
      viewBox: "0 0 19.906 20",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#icon-inst",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/icon-search.svg":
/*!********************************************!*\
  !*** ./src/assets/img/svg/icon-search.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-search-usage",
      viewBox: "0 0 16 16",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#icon-search",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/icon-tw.svg":
/*!****************************************!*\
  !*** ./src/assets/img/svg/icon-tw.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-tw-usage",
      viewBox: "0 0 19.906 16",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#icon-tw",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/icon-vk.svg":
/*!****************************************!*\
  !*** ./src/assets/img/svg/icon-vk.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "icon-vk-usage",
      viewBox: "0 0 19.906 11",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#icon-vk",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/logo.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/logo.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "logo-usage",
      viewBox: "0 0 182 125",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#logo",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/m-01.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/m-01.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "m-01-usage",
      viewBox: "0 0 30 29",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#m-01",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/m-02.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/m-02.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "m-02-usage",
      viewBox: "0 0 27 30",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#m-02",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/m-03.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/m-03.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "m-03-usage",
      viewBox: "0 0 30.001 26",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#m-03",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/img/svg/m-04.svg":
/*!*************************************!*\
  !*** ./src/assets/img/svg/m-04.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
      id: "m-04-usage",
      viewBox: "0 0 30 29",
      url: __webpack_require__.p + "assets/img/svg/sprite.svg#m-04",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ "./src/assets/sass/app.sass":
/*!**********************************!*\
  !*** ./src/assets/sass/app.sass ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/assets/sass/media.sass":
/*!************************************!*\
  !*** ./src/assets/sass/media.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ion_rangeslider_js_ion_rangeSlider_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ion-rangeslider/js/ion.rangeSlider.min */ "./node_modules/ion-rangeslider/js/ion.rangeSlider.min.js");
/* harmony import */ var ion_rangeslider_js_ion_rangeSlider_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ion_rangeslider_js_ion_rangeSlider_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ion-rangeslider/css/ion.rangeSlider.min.css */ "./node_modules/ion-rangeslider/css/ion.rangeSlider.min.css");
/* harmony import */ var ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/sass/app.sass */ "./src/assets/sass/app.sass");
/* harmony import */ var _assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_app_sass__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/sass/media.sass */ "./src/assets/sass/media.sass");
/* harmony import */ var _assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_media_sass__WEBPACK_IMPORTED_MODULE_8__);
// JS





 // SCSS



 // svg sprite

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__("./src/assets/img/svg sync recursive \\.svg$"));
fetch("./assets/img/svg/sprite.svg").then(function (res) {
  return res.text();
}).then(function (data) {
  document.getElementById('svg-icons').innerHTML = data;
});

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.js-hover-project').hover(function () {
  $('.project__hide').removeClass('is-active');
  $(this).find('.project__hide').toggleClass('is-active');
});
var arrow_prev = "<svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px'> <path fill-rule='evenodd'  fill='rgb(0, 0, 0)' d='M14.629,0.984 L16.197,2.614 L4.201,14.381 L30.012,14.381 L30.012,16.723 L4.341,16.723 L16.090,28.487 L14.633,29.985 L-0.015,15.519 L14.629,0.984 Z'/></svg>",
    arrow_next = "<svg xmlns='http://www.w3.org/2000/svg' width='31px' height='30px'><path fill-rule='evenodd'  fill='rgb(0, 0, 0)' d='M15.402,0.171 L13.834,1.802 L25.830,13.568 L0.019,13.568 L0.019,15.910 L25.690,15.910 L13.941,27.674 L15.399,29.172 L30.046,14.707 L15.402,0.171 Z'/></svg>";
arrow_prev_green = "<svg xmlns='http://www.w3.org/2000/svg' width='30px' height='30px'> <path fill-rule='evenodd'  fill='#269b39' d='M14.629,0.984 L16.197,2.614 L4.201,14.381 L30.012,14.381 L30.012,16.723 L4.341,16.723 L16.090,28.487 L14.633,29.985 L-0.015,15.519 L14.629,0.984 Z'/></svg>", arrow_next_green = "<svg xmlns='http://www.w3.org/2000/svg' width='31px' height='30px'><path fill-rule='evenodd'  fill='#269b39' d='M15.402,0.171 L13.834,1.802 L25.830,13.568 L0.019,13.568 L0.019,15.910 L25.690,15.910 L13.941,27.674 L15.399,29.172 L30.046,14.707 L15.402,0.171 Z'/></svg>"; // main product slider

$(document).ready(function () {
  initialize_owl($('#owl-home'));
  var tabs = [{
    target: '#home',
    owl: '#owl-home'
  }, {
    target: '#bath',
    owl: '#owl-bath'
  }]; // Setup 'bs.tab' event listeners for each tab

  tabs.forEach(function (tab) {
    $("button[href=\"".concat(tab.target, "\"]")).on('shown.bs.tab', function () {
      return initialize_owl($(tab.owl));
    }).on('hide.bs.tab', function () {
      return destroy_owl($(tab.owl));
    });
  });
});

function initialize_owl(el) {
  el.owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [arrow_prev, arrow_next],
    navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
    navContainerClass: 'slider-arrow__wrp',
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
}

function destroy_owl(el) {
  el.trigger('destroy.owl.carousel');
}

$('.js-stocks-slider').owlCarousel({
  items: 1,
  loop: true,
  dots: false,
  nav: true,
  navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="27px" height="70px"><path fill-rule="evenodd"  opacity="0.502" fill="rgb(255, 255, 255)" d="M4.341,36.723 L26.090,68.486 L24.633,69.984 L-0.015,35.519 L24.629,0.984 L26.197,2.614 L4.201,34.381 "/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="26px" height="70px"><path fill-rule="evenodd"  opacity="0.502" fill="rgb(255, 255, 255)" d="M21.690,36.723 L0.097,68.486 L1.544,69.984 L26.015,35.519 L1.547,0.984 L-0.010,2.614 L21.829,34.381 "/></svg>'],
  navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
  navContainerClass: 'slider-arrow__wrp'
});
$('.js-partners-slider').owlCarousel({
  loop: true,
  margin: 50,
  dots: false,
  nav: true,
  navText: [arrow_prev_green, arrow_next_green],
  navClass: ["slider-arrow slider-arrow_prev", "slider-arrow slider-arrow_next"],
  navContainerClass: 'slider-arrow__wrp',
  responsive: {
    0: {
      items: 1,
      margin: 0
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
});
$(function () {
  var $range = $(".js-range-slider"),
      $inputFrom = $(".js-input-from"),
      $inputTo = $(".js-input-to"),
      instance,
      min = 0.1,
      max = 100,
      from = 0,
      to = 0;
  $range.ionRangeSlider({
    type: "double",
    min: 0.1,
    max: 150,
    from: 0.2,
    to: 100,
    step: 0.1,
    postfix: ' млн руб.',
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from * 10000000;
    to = data.to * 10000000;
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value"); // validate

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });
  $inputTo.on("input", function () {
    var val = $(this).prop("value"); // validate

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });
});
$(function () {
  var $range = $(".js-square-slider"),
      $inputFrom = $(".js-square-from"),
      $inputTo = $(".js-square-to"),
      instanceSq,
      min = 0,
      max = 2000,
      from = 0,
      to = 0;
  $range.ionRangeSlider({
    type: "double",
    min: 0,
    max: 2000,
    from: 50,
    to: 1500,
    step: 1,
    postfix: ' м<sup>2</sup>',
    onStart: updateSquare,
    onChange: updateSquare
  });
  instanceSq = $range.data("ionRangeSlider");

  function updateSquare(data) {
    from = data.from;
    to = data.to;
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value"); // validate

    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instanceSq.update({
      from: val
    });
  });
  $inputTo.on("input", function () {
    var val = $(this).prop("value"); // validate

    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instanceSq.update({
      to: val
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

/******/ });
//# sourceMappingURL=app.0360f0daf8564057388c.js.map