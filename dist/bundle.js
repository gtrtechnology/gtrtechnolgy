/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/***/ (() => {

eval("$(document).ready(function () {\n  navNumbers();\n  backToDefault(); // show hovered li stuff\n\n  $('.main-menu').on('mouseover', 'li', function () {\n    showTarget($(this));\n  }); // show default .active li stuff\n\n  $('.main-menu').on('mouseleave', backToDefault); // change active list item\n\n  $('.main-menu').on('click', 'li', function () {\n    changeActive($(this));\n  }); // toggle menu\n\n  $('.toggle').on('click', toggleMenu); // for showcase only\n\n  var tl = new TimelineMax(),\n      body = $('body'),\n      header = $('header'),\n      content = $('.content p'),\n      toggle = $('.toggle'),\n      nav = $('nav');\n  tl.to(body, 1, {\n    // padding: '0 80px 80px',\n    delay: .5\n  });\n  tl.to(header, .25, {\n    opacity: 1,\n    delay: .5\n  });\n  tl.to(content, .25, {\n    opacity: 1\n  }, '-=.25');\n  tl.call(function () {\n    toggleMenu();\n  }, null, null, 3);\n  tl.call(function () {\n    toggleMenu();\n  }, null, null, 4.5);\n}); // toggle menu\n\nfunction toggleMenu() {\n  var toggle = $('.toggle');\n  var nav = $('nav');\n\n  if (toggle.hasClass('clicked')) {\n    toggle.removeClass('clicked');\n    nav.removeClass('open');\n    console.log('remove open');\n    setTimeout(function () {\n      console.log('add hidden');\n      nav.addClass('hidden');\n    }, 500);\n  } else {\n    nav.removeClass('hidden');\n    toggle.addClass('clicked');\n    nav.addClass('open');\n  }\n} // give the list items numbers\n\n\nfunction navNumbers() {\n  var sum = $('.main-menu li').length;\n  var i = 0;\n  var x = 0;\n  $('.showcase-menu li').each(function () {\n    $(this).attr('data-target', x);\n    x++;\n  });\n  $('.main-menu li').each(function () {\n    var number = ('0' + i).slice(-2);\n    var numberElement = '<div class=\"number\"><span>' + number + '</span></div>';\n    $(this).prepend(numberElement);\n    $(this).attr('data-target', i);\n    i++;\n  });\n} // show the hovered list item stuff\n\n\nfunction showTarget(e) {\n  $('.main-menu li').removeClass('hover');\n  var target = $(e).attr('data-target');\n  var showcaseHeight = $('.showcase-menu').outerHeight();\n  showcaseHeight = showcaseHeight * target * -1;\n  $('.showcase-menu').css({\n    top: showcaseHeight\n  });\n  $(e).addClass('hover');\n} // show the list item stuff of .active\n\n\nfunction backToDefault() {\n  $('.main-menu li').removeClass('hover');\n  var activeItem = $('.main-menu li.active');\n  var target = activeItem.attr('data-target');\n  var showcaseHeight = $('.showcase-menu').outerHeight();\n  showcaseHeight = showcaseHeight * target * -1;\n  $('.showcase-menu').css({\n    top: showcaseHeight\n  });\n  activeItem.addClass('hover');\n} // change active list item\n\n\nfunction changeActive(e) {\n  $('.main-menu li').removeClass('active');\n  $(e).addClass('active');\n}\n\n//# sourceURL=webpack://gtrtechnology/./src/js/animation.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./src/scss/styles.scss\");\n\n\n__webpack_require__(/*! ./animation.js */ \"./src/js/animation.js\");\n\n//# sourceURL=webpack://gtrtechnology/./src/js/index.js?");

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://gtrtechnology/./src/scss/styles.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;