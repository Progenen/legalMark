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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n    function mobMenuInit() {\n        const menu = document.querySelector('.header__menu');\n        const menuBtn = document.querySelector(\".header__burger\");\n\n        menuBtn.addEventListener('click', function () {\n            menu.classList.toggle('active');\n            menuBtn.classList.toggle('active');\n        });\n\n        mobMenuOffsetInit();\n    }\n\n    function mobMenuOffsetInit () {\n        const menu = document.querySelector('.header__menu');\n        const header = document.querySelector('.header');\n\n        menu.style.marginTop = header.clientHeight + 1 + 'px';\n    }\n\n    function headerOffsetInit() {\n        const header = document.querySelector('.header');\n        const firstSection = document.querySelector('main > section:first-child');\n\n        firstSection.style.paddingTop = header.clientHeight + 'px';\n\n    }\n\n    headerOffsetInit();\n    const modals = document.querySelectorAll('.modal');\n    const modalForm = document.querySelector('.modal-form');\n    const modalThanks = document.querySelector('.modal-thanks');\n    const modalOpenBtn = document.querySelectorAll('.modal-open');\n    const modalCloseBtn = document.querySelectorAll('.modal-close');\n\n    modalOpenBtn.forEach((btn) => {\n        btn.addEventListener('click', function () {\n            modalForm.classList.add('active');\n        });\n    })\n\n    modalCloseBtn.forEach((btn) => {\n        btn.addEventListener('click', function () {\n            modals.forEach(modal => {\n                modal.classList.remove('active');\n            })\n        });\n    })\n\n    const form = document.querySelector('form');\n    form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        modalForm.classList.remove('active');\n        modalThanks.classList.add('active');\n    })\n\n\n    if (window.innerWidth < 992) {\n        headerOffsetInit();\n        mobMenuInit();\n    }\n});\n\n//# sourceURL=webpack://project-name/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;