"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/prox_page",{

/***/ "./src/components/botao_sticker.js":
/*!*****************************************!*\
  !*** ./src/components/botao_sticker.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Botao_sticker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Stickers_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Stickers.json */ \"./Stickers.json\");\n/* harmony import */ var _paleta_cores_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../paleta_cores.json */ \"./paleta_cores.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Botao_sticker() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), /*#__PURE__*/ controle_sticker = ref[0], set_controle_sticker = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            controle_sticker && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                as: \"ul\",\n                styleSheet: {\n                    backgroundColor: _paleta_cores_json__WEBPACK_IMPORTED_MODULE_5__.section.cinza_escuro,\n                    padding: '10px',\n                    position: 'absolute',\n                    marginTop: '-155px',\n                    width: '10vw',\n                    height: '20vh'\n                },\n                children: _Stickers_json__WEBPACK_IMPORTED_MODULE_4__.lista_stickers.map(function(stickers, index) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"jsx-90353fe6c149158e\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: stickers,\n                                    onClick: function() {\n                                        onStickerClick(stickers);\n                                        props.set_controle_sticker(!controle_sticker);\n                                    },\n                                    className: \"jsx-90353fe6c149158e\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\src\\\\components\\\\botao_sticker.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 37\n                                }, _this)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\src\\\\components\\\\botao_sticker.js\",\n                                lineNumber: 22,\n                                columnNumber: 33\n                            }, _this),\n                            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                id: \"90353fe6c149158e\",\n                                children: \"li.jsx-90353fe6c149158e{list-style:none}\\nli.jsx-90353fe6c149158e img.jsx-90353fe6c149158e{width:4vw;\\nheight:9vh}\\nli.jsx-90353fe6c149158e img.jsx-90353fe6c149158e:hover{width:5vw;\\nheight:10vh;\\n-webkit-transition:.7s;\\ntransition:.7s}\"\n                            }, void 0, false, void 0, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\src\\\\components\\\\botao_sticker.js\",\n                        lineNumber: 21,\n                        columnNumber: 29\n                    }, _this));\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\src\\\\components\\\\botao_sticker.js\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"button\",\n                    value: \"😁\",\n                    onClick: function() {\n                        return set_controle_sticker(!controle_sticker);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\src\\\\components\\\\botao_sticker.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\src\\\\components\\\\botao_sticker.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(Botao_sticker, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Botao_sticker;\nvar _c;\n$RefreshReg$(_c, \"Botao_sticker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ib3Rhb19zdGlja2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDVjtBQUNlO0FBQ0c7O0FBRW5DLFFBQVEsQ0FBQ0ksYUFBYSxHQUFFLENBQUM7OztJQUNwQyxHQUFLLENBQTJDSCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxpQkFBdkRJLGdCQUFnQixHQUF5QkosR0FBZSxLQUF2Q0ssb0JBQW9CLEdBQUlMLEdBQWU7SUFDL0QsTUFBTSw2RUFBQzs7WUFFR0ksZ0JBQWdCLGdGQUNiTCxxREFBRztnQkFBQ08sRUFBRSxFQUFDLENBQUk7Z0JBQUNDLFVBQVUsRUFBRSxDQUFDO29CQUN0QkMsZUFBZSxFQUFDTixvRUFBaUM7b0JBQ2pEUyxPQUFPLEVBQUMsQ0FBTTtvQkFDZEMsUUFBUSxFQUFDLENBQVU7b0JBQ25CQyxTQUFTLEVBQUMsQ0FBUTtvQkFDbEJDLEtBQUssRUFBQyxDQUFNO29CQUNaQyxNQUFNLEVBQUMsQ0FBTTtnQkFDakIsQ0FBQzswQkFDSWQsOERBQWdDLENBQUMsUUFBUSxDQUFQaUIsUUFBUSxFQUFDQyxLQUFLLEVBQUcsQ0FBQztvQkFDakQsTUFBTSw2RUFDRHBCLHFEQUFHOzt3R0FDQ3FCLENBQUU7O3NIQUNFQyxDQUFHO29DQUFDQyxHQUFHLEVBQUVKLFFBQVE7b0NBQ2xCSyxPQUFPLEVBQUUsUUFDNUMsR0FEZ0QsQ0FBQzt3Q0FDVkMsY0FBYyxDQUFDTixRQUFRO3dDQUN2Qk8sS0FBSyxDQUFDcEIsb0JBQW9CLEVBQUVELGdCQUFnQjtvQ0FBQyxDQUFDOzs7Ozs7OytCQUo3Q2UsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O2dCQXVCMUIsQ0FBQzs7Ozs7O3dGQUdScEIscURBQUc7c0dBQ0MyQixDQUFLO29CQUFDQyxJQUFJLEVBQUMsQ0FBUTtvQkFBQ0MsS0FBSyxFQUFDLENBQUc7b0JBQUNMLE9BQU8sRUFBRSxRQUFRO3dCQUFKbEIsTUFBTSxDQUFOQSxvQkFBb0IsRUFBRUQsZ0JBQWdCOzs7Ozs7Ozs7Ozs7OztBQUlsRyxDQUFDO0dBL0N1QkQsYUFBYTtLQUFiQSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2JvdGFvX3N0aWNrZXIuanM/YmEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0aWNrZXJfYXJyYXkgZnJvbSAnLi4vLi4vU3RpY2tlcnMuanNvbic7XHJcbmltcG9ydCBwYWxldGFfY29yZXMgZnJvbSAnLi4vLi4vcGFsZXRhX2NvcmVzLmpzb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm90YW9fc3RpY2tlcigpe1xyXG4gICAgY29uc3QgW2NvbnRyb2xlX3N0aWNrZXIsc2V0X2NvbnRyb2xlX3N0aWNrZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHsgY29udHJvbGVfc3RpY2tlciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8Qm94IGFzPSd1bCcgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpwYWxldGFfY29yZXMuc2VjdGlvbi5jaW56YV9lc2N1cm8sXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzonMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246J2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6Jy0xNTVweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6JzEwdncnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDonMjB2aCdcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzdGlja2VyX2FycmF5Lmxpc3RhX3N0aWNrZXJzLm1hcCgoc3RpY2tlcnMsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzdGlja2Vyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN0aWNrZXJDbGljayhzdGlja2Vycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZXRfY29udHJvbGVfc3RpY2tlcighY29udHJvbGVfc3RpY2tlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDo0dnc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6OXZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpIGltZzpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjV2dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjouN3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nYnV0dG9uJyB2YWx1ZT0n8J+YgScgb25DbGljaz17KCk9PnNldF9jb250cm9sZV9zdGlja2VyKCFjb250cm9sZV9zdGlja2VyKX0vPiAgICBcclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiQm94IiwidXNlU3RhdGUiLCJzdGlja2VyX2FycmF5IiwicGFsZXRhX2NvcmVzIiwiQm90YW9fc3RpY2tlciIsImNvbnRyb2xlX3N0aWNrZXIiLCJzZXRfY29udHJvbGVfc3RpY2tlciIsImFzIiwic3R5bGVTaGVldCIsImJhY2tncm91bmRDb2xvciIsInNlY3Rpb24iLCJjaW56YV9lc2N1cm8iLCJwYWRkaW5nIiwicG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImhlaWdodCIsImxpc3RhX3N0aWNrZXJzIiwibWFwIiwic3RpY2tlcnMiLCJpbmRleCIsImxpIiwiaW1nIiwic3JjIiwib25DbGljayIsIm9uU3RpY2tlckNsaWNrIiwicHJvcHMiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/botao_sticker.js\n");

/***/ })

});