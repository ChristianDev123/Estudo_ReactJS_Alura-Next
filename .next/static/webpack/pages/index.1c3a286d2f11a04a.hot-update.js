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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ home_page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _paleta_cores_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../paleta_cores.json */ \"./paleta_cores.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction home_page() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), login_usuario = ref[0], set_login_usuario = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), imagem_usuario = ref1[0], set_imagem_usuario = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        set_imagem_usuario(\"https://github.com/\".concat(login_usuario, \".png\"));\n    }, [\n        login_usuario\n    ]);\n    console.log(imagem_usuario.leng);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            as: \"section\",\n            styleSheet: {\n                backgroundColor: _paleta_cores_json__WEBPACK_IMPORTED_MODULE_3__.section.roxo_escuro_pastel,\n                width: '60vw',\n                height: '40vh',\n                borderRadius: '15px',\n                padding: '10px',\n                display: \"flex\",\n                margin: 'auto',\n                marginTop: '150px',\n                textAlign: 'center'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        width: '100%'\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Apresentacao_input, {\n                        set_usuario: set_login_usuario,\n                        usuario: login_usuario\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 20\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        width: '100%'\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Imagem_dinamica, {\n                        imagem_usuario: imagem_usuario\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false));\n};\n_s(home_page, \"8BkXLnureBfAys7eIwhOW4Xx0kI=\");\nfunction Apresentacao_input(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                className: \"apresentacao\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        tag: \"h2\",\n                        styleSheet: {\n                            color: 'white'\n                        },\n                        children: \"Ol\\xe1 bem Vindo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        tag: \"p\",\n                        styleSheet: {\n                            color: 'white'\n                        },\n                        children: \"Insira seu usu\\xe1rio do Github:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                className: \"input\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: function() {},\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                        value: props.usuario,\n                        onChange: function(evento) {\n                            return props.set_usuario(evento.target.value);\n                        },\n                        styleSheet: {\n                            backgroundColor: 'whitesmoke',\n                            color: _paleta_cores_json__WEBPACK_IMPORTED_MODULE_3__.cor_inputs.roxo_escuro_pastel,\n                            border: \"1px solid purple\",\n                            width: '70%',\n                            margin: 'auto'\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true));\n}\n_c = Apresentacao_input;\nfunction Imagem_dinamica(props) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                backgroundColor: _paleta_cores_json__WEBPACK_IMPORTED_MODULE_3__.div_imagem.Roxo_escuro,\n                width: '80%',\n                height: '70%',\n                padding: '10px',\n                textAlign: 'center'\n            },\n            children: props.imagem_usuario.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                src: props.imagem_usuario,\n                styleSheet: {\n                    width: '55%',\n                    height: '90%',\n                    borderRadius: '10px',\n                    margin: 'auto'\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n                lineNumber: 77,\n                columnNumber: 52\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\chris\\\\OneDrive\\\\\\xc1rea de Trabalho\\\\Christian\\\\Christian - Programa\\xe7\\xe3o\\\\Estudo React\\\\Alura_estudo_react\\\\Primeiros Passos\\\\pages\\\\index.js\",\n            lineNumber: 68,\n            columnNumber: 12\n        }, this)\n    }, void 0, false));\n}\n_c1 = Imagem_dinamica;\nvar _c, _c1;\n$RefreshReg$(_c, \"Apresentacao_input\");\n$RefreshReg$(_c1, \"Imagem_dinamica\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEssQ0FBQztLQWxCUUcsa0JBQWtCO1NBbUJsQkcsZUFBZSxDQUFDQyxLQUFLLEVBQUMsQ0FBQztJQUM1QixNQUFNLDZFQUFDOzhGQUVDaEMscURBQUc7WUFDSGdCLFVBQVUsRUFBRSxDQUFDO2dCQUNUQyxlQUFlLEVBQUNYLHNFQUFtQztnQkFDbkRjLEtBQUssRUFBQyxDQUFLO2dCQUNYQyxNQUFNLEVBQUMsQ0FBSztnQkFDWkUsT0FBTyxFQUFDLENBQU07Z0JBQ2RJLFNBQVMsRUFBQyxDQUFRO1lBQ3RCLENBQUM7c0JBRUdLLEtBQUssQ0FBQ3RCLGNBQWMsQ0FBQ29DLE1BQU0sR0FBRyxDQUFDLGdGQUFLN0MsdURBQUs7Z0JBQUM4QyxHQUFHLEVBQUVmLEtBQUssQ0FBQ3RCLGNBQWM7Z0JBQUVNLFVBQVUsRUFBRSxDQUFDO29CQUMvRUksS0FBSyxFQUFDLENBQUs7b0JBQ1hDLE1BQU0sRUFBQyxDQUFLO29CQUNaQyxZQUFZLEVBQUMsQ0FBTTtvQkFDbkJHLE1BQU0sRUFBQyxDQUFNO2dCQUNqQixDQUFDOzs7Ozs7Ozs7Ozs7QUFJaEIsQ0FBQztNQXJCUU0sZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Qm94LCBJbWFnZSwgVGV4dCwgVGV4dEZpZWxkfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcGFsZXRhX2NvcmVzIGZyb20gXCIuLi9wYWxldGFfY29yZXMuanNvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVfcGFnZSgpe1xyXG4gICAgY29uc3RbbG9naW5fdXN1YXJpbyxzZXRfbG9naW5fdXN1YXJpb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdFtpbWFnZW1fdXN1YXJpbyxzZXRfaW1hZ2VtX3VzdWFyaW9dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgc2V0X2ltYWdlbV91c3VhcmlvKGBodHRwczovL2dpdGh1Yi5jb20vJHtsb2dpbl91c3VhcmlvfS5wbmdgKTtcclxuICAgIH0sW2xvZ2luX3VzdWFyaW9dKTtcclxuICAgIGNvbnNvbGUubG9nKGltYWdlbV91c3VhcmlvLmxlbmcpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJzZWN0aW9uXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOnBhbGV0YV9jb3Jlcy5zZWN0aW9uLnJveG9fZXNjdXJvX3Bhc3RlbCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOic2MHZ3JyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDonNDB2aCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6JzE1cHgnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzonMTBweCcsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OlwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOidhdXRvJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDonMTUwcHgnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOidjZW50ZXInLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDonMTAwJScsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgPEFwcmVzZW50YWNhb19pbnB1dCBzZXRfdXN1YXJpbz17c2V0X2xvZ2luX3VzdWFyaW99IHVzdWFyaW89e2xvZ2luX3VzdWFyaW99Lz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOicxMDAlJyxcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZW1fZGluYW1pY2EgaW1hZ2VtX3VzdWFyaW89e2ltYWdlbV91c3VhcmlvfS8+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+ICAgXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbiAgICAgICAgXHJcbn1cclxuZnVuY3Rpb24gQXByZXNlbnRhY2FvX2lucHV0KHByb3BzKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cImFwcmVzZW50YWNhb1wiPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgdGFnPSdoMicgc3R5bGVTaGVldD17e2NvbG9yOid3aGl0ZSd9fT5PbMOhIGJlbSBWaW5kbzwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHRhZz0ncCcgc3R5bGVTaGVldD17e2NvbG9yOid3aGl0ZSd9fT5JbnNpcmEgc2V1IHVzdcOhcmlvIGRvIEdpdGh1Yjo8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0naW5wdXQnPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KCk9Pnt9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudXN1YXJpb30gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50byk9PnByb3BzLnNldF91c3VhcmlvKGV2ZW50by50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e2JhY2tncm91bmRDb2xvcjond2hpdGVzbW9rZScsY29sb3I6cGFsZXRhX2NvcmVzLmNvcl9pbnB1dHMucm94b19lc2N1cm9fcGFzdGVsLCBib3JkZXI6YDFweCBzb2xpZCBwdXJwbGVgLCB3aWR0aDonNzAlJywgbWFyZ2luOidhdXRvJ319XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuZnVuY3Rpb24gSW1hZ2VtX2RpbmFtaWNhKHByb3BzKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOnBhbGV0YV9jb3Jlcy5kaXZfaW1hZ2VtLlJveG9fZXNjdXJvLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6JzgwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6JzcwJScsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOicxMHB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjonY2VudGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgID5cclxuICAgICAgICAgICAgICAge3Byb3BzLmltYWdlbV91c3VhcmlvLmxlbmd0aCA+IDAgJiYgPEltYWdlIHNyYz17cHJvcHMuaW1hZ2VtX3VzdWFyaW99IHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgIHdpZHRoOic1NSUnLFxyXG4gICAgICAgICAgICAgICAgICAgaGVpZ2h0Oic5MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOicxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgIG1hcmdpbjonYXV0bydcclxuICAgICAgICAgICAgICAgfX0vPn1cclxuICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07Il0sIm5hbWVzIjpbIkJveCIsIkltYWdlIiwiVGV4dCIsIlRleHRGaWVsZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicGFsZXRhX2NvcmVzIiwiaG9tZV9wYWdlIiwibG9naW5fdXN1YXJpbyIsInNldF9sb2dpbl91c3VhcmlvIiwiaW1hZ2VtX3VzdWFyaW8iLCJzZXRfaW1hZ2VtX3VzdWFyaW8iLCJjb25zb2xlIiwibG9nIiwibGVuZyIsImFzIiwic3R5bGVTaGVldCIsImJhY2tncm91bmRDb2xvciIsInNlY3Rpb24iLCJyb3hvX2VzY3Vyb19wYXN0ZWwiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJkaXNwbGF5IiwibWFyZ2luIiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwiQXByZXNlbnRhY2FvX2lucHV0Iiwic2V0X3VzdWFyaW8iLCJ1c3VhcmlvIiwiSW1hZ2VtX2RpbmFtaWNhIiwicHJvcHMiLCJjbGFzc05hbWUiLCJ0YWciLCJjb2xvciIsImZvcm0iLCJvblN1Ym1pdCIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudG8iLCJ0YXJnZXQiLCJjb3JfaW5wdXRzIiwiYm9yZGVyIiwiZGl2X2ltYWdlbSIsIlJveG9fZXNjdXJvIiwibGVuZ3RoIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});