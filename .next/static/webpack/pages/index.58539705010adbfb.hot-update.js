"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ home_page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _paleta_cores_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paleta_cores.json */ \"./paleta_cores.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction home_page() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), login_usuario = ref[0], set_login_usuario = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), imagem_usuario = ref1[0], set_imagem_usuario = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        set_imagem_usuario(\"https://github.com/\".concat(login_usuario, \".png\"));\n    }, [\n        login_usuario\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            as: \"section\",\n            styleSheet: {\n                backgroundColor: _paleta_cores_json__WEBPACK_IMPORTED_MODULE_3__.section.roxo_escuro_pastel,\n                width: '60vw',\n                height: '40vh',\n                borderRadius: '15px',\n                padding: '10px',\n                display: \"flex\",\n                margin: 'auto',\n                marginTop: '150px',\n                textAlign: 'center'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        width: '100%'\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Apresentacao_input, {\n                        set_usuario: set_login_usuario,\n                        usuario: login_usuario\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 20\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        width: '100%'\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Imagem_dinamica, {\n                        ima: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n};\n_s(home_page, \"8BkXLnureBfAys7eIwhOW4Xx0kI=\");\nfunction Apresentacao_input(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                className: \"apresentacao\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        tag: \"h2\",\n                        styleSheet: {\n                            color: 'white'\n                        },\n                        children: \"Ol\\xe1 bem Vindo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        tag: \"p\",\n                        styleSheet: {\n                            color: 'white'\n                        },\n                        children: \"Insira seu usu\\xe1rio do Github:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                className: \"input\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: function() {},\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                        value: props.usuario,\n                        onChange: function(evento) {\n                            return props.set_usuario(evento.target.value);\n                        },\n                        styleSheet: {\n                            backgroundColor: 'whitesmoke',\n                            color: _paleta_cores_json__WEBPACK_IMPORTED_MODULE_3__.cor_inputs.roxo_escuro_pastel,\n                            border: \"1px solid purple\",\n                            width: '70%',\n                            margin: 'auto'\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n}\n_c = Apresentacao_input;\nfunction Imagem_dinamica(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                backgroundColor: _paleta_cores_json__WEBPACK_IMPORTED_MODULE_3__.div_imagem.Roxo_escuro,\n                width: '80%',\n                height: '70%',\n                textAlign: 'center'\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                src: props.imagem_usuario,\n                styleSheet: {\n                    width: '60%',\n                    height: '60%',\n                    borderRadius: '10px'\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                lineNumber: 75,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n            lineNumber: 67,\n            columnNumber: 12\n        }, this)\n    }, void 0, false));\n}\n_c1 = Imagem_dinamica;\nvar _c, _c1;\n$RefreshReg$(_c, \"Apresentacao_input\");\n$RefreshReg$(_c1, \"Imagem_dinamica\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzVCLE1BQU0sNkVBQUM7OEZBRUM5QixxREFBRztZQUNIYSxVQUFVLEVBQUUsQ0FBQztnQkFDVEMsZUFBZSxFQUFDUixzRUFBbUM7Z0JBQ25EVyxLQUFLLEVBQUMsQ0FBSztnQkFDWEMsTUFBTSxFQUFDLENBQUs7Z0JBQ1pNLFNBQVMsRUFBQyxDQUFRO1lBQ3RCLENBQUM7a0dBRUl2Qix1REFBSztnQkFBQzJDLEdBQUcsRUFBRWQsS0FBSyxDQUFDcEIsY0FBYztnQkFBRUcsVUFBVSxFQUFFLENBQUM7b0JBQzVDSSxLQUFLLEVBQUMsQ0FBSztvQkFDWEMsTUFBTSxFQUFDLENBQUs7b0JBQ1pDLFlBQVksRUFBQyxDQUFNO2dCQUN2QixDQUFDOzs7Ozs7Ozs7Ozs7QUFJaEIsQ0FBQztNQW5CUVMsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Qm94LCBJbWFnZSwgVGV4dCwgVGV4dEZpZWxkfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcGFsZXRhX2NvcmVzIGZyb20gXCIuLi9wYWxldGFfY29yZXMuanNvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVfcGFnZSgpe1xyXG4gICAgY29uc3RbbG9naW5fdXN1YXJpbyxzZXRfbG9naW5fdXN1YXJpb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdFtpbWFnZW1fdXN1YXJpbyxzZXRfaW1hZ2VtX3VzdWFyaW9dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0X2ltYWdlbV91c3VhcmlvKGBodHRwczovL2dpdGh1Yi5jb20vJHtsb2dpbl91c3VhcmlvfS5wbmdgKTtcclxuICAgIH0sW2xvZ2luX3VzdWFyaW9dKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBhcz1cInNlY3Rpb25cIlxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6cGFsZXRhX2NvcmVzLnNlY3Rpb24ucm94b19lc2N1cm9fcGFzdGVsLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6JzYwdncnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0Oic0MHZoJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czonMTVweCcsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOicxMHB4JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46J2F1dG8nLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOicxNTBweCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246J2NlbnRlcicsXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICA8QXByZXNlbnRhY2FvX2lucHV0IHNldF91c3VhcmlvPXtzZXRfbG9naW5fdXN1YXJpb30gdXN1YXJpbz17bG9naW5fdXN1YXJpb30vPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6JzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlbV9kaW5hbWljYSBpbWEvPlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQm94PiAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG4gICAgICAgIFxyXG59XHJcbmZ1bmN0aW9uIEFwcmVzZW50YWNhb19pbnB1dChwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJhcHJlc2VudGFjYW9cIj5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHRhZz0naDInIHN0eWxlU2hlZXQ9e3tjb2xvcjond2hpdGUnfX0+T2zDoSBiZW0gVmluZG88L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCB0YWc9J3AnIHN0eWxlU2hlZXQ9e3tjb2xvcjond2hpdGUnfX0+SW5zaXJhIHNldSB1c3XDoXJpbyBkbyBHaXRodWI6PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9J2lucHV0Jz5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eygpPT57fX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnVzdWFyaW99IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudG8pPT5wcm9wcy5zZXRfdXN1YXJpbyhldmVudG8udGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tiYWNrZ3JvdW5kQ29sb3I6J3doaXRlc21va2UnLGNvbG9yOnBhbGV0YV9jb3Jlcy5jb3JfaW5wdXRzLnJveG9fZXNjdXJvX3Bhc3RlbCwgYm9yZGVyOmAxcHggc29saWQgcHVycGxlYCwgd2lkdGg6JzcwJScsIG1hcmdpbjonYXV0byd9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbmZ1bmN0aW9uIEltYWdlbV9kaW5hbWljYShwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpwYWxldGFfY29yZXMuZGl2X2ltYWdlbS5Sb3hvX2VzY3VybyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOic4MCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0Oic3MCUnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOidjZW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICB7PEltYWdlIHNyYz17cHJvcHMuaW1hZ2VtX3VzdWFyaW99IHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgIHdpZHRoOic2MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0Oic2MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOicxMHB4JyxcclxuICAgICAgICAgICAgICAgfX0vPn1cclxuICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07Il0sIm5hbWVzIjpbIkJveCIsIkltYWdlIiwiVGV4dCIsIlRleHRGaWVsZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicGFsZXRhX2NvcmVzIiwiaG9tZV9wYWdlIiwibG9naW5fdXN1YXJpbyIsInNldF9sb2dpbl91c3VhcmlvIiwiaW1hZ2VtX3VzdWFyaW8iLCJzZXRfaW1hZ2VtX3VzdWFyaW8iLCJhcyIsInN0eWxlU2hlZXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWN0aW9uIiwicm94b19lc2N1cm9fcGFzdGVsIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiZGlzcGxheSIsIm1hcmdpbiIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsIkFwcmVzZW50YWNhb19pbnB1dCIsInNldF91c3VhcmlvIiwidXN1YXJpbyIsIkltYWdlbV9kaW5hbWljYSIsImltYSIsInByb3BzIiwiY2xhc3NOYW1lIiwidGFnIiwiY29sb3IiLCJmb3JtIiwib25TdWJtaXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnRvIiwidGFyZ2V0IiwiY29yX2lucHV0cyIsImJvcmRlciIsImRpdl9pbWFnZW0iLCJSb3hvX2VzY3VybyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});