"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/timeline",{

/***/ "./pages/timeline.tsx":
/*!****************************!*\
  !*** ./pages/timeline.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Timeline; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BigTimeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BigTimeline */ \"./components/BigTimeline.tsx\");\n\n\nconst useStyles = createStyles((theme)=>({\n        title: {\n            fontSize: rem(34),\n            fontWeight: 900,\n            [theme.fn.smallerThan(\"sm\")]: {\n                fontSize: rem(24)\n            }\n        }\n    }));\nfunction Timeline() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Your Health Journey: A Personalised Timeline\"\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/pages/timeline.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Title, {\n                order: 2,\n                className: classes.title,\n                ta: \"center\",\n                mt: \"sm\",\n                children: \"Your Path to Health and Wellness Mastery\"\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/pages/timeline.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BigTimeline__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/pages/timeline.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Timeline;\nvar _c;\n$RefreshReg$(_c, \"Timeline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aW1lbGluZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBbUQ7QUFFbkQsTUFBTUMsWUFBWUMsYUFBYSxDQUFDQyxRQUFXO1FBQ3ZDQyxPQUFPO1lBQ0xDLFVBQVVDLElBQUk7WUFDZEMsWUFBWTtZQUVaLENBQUNKLE1BQU1LLEVBQUUsQ0FBQ0MsV0FBVyxDQUFDLE1BQU0sRUFBRTtnQkFDNUJKLFVBQVVDLElBQUk7WUFDaEI7UUFDRjtJQUNKO0FBRWUsU0FBU0k7SUFDcEIscUJBQ0U7OzBCQUNBLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBTUMsT0FBTztnQkFBR0MsV0FBV0MsUUFBUVgsS0FBSztnQkFBRVksSUFBRztnQkFBU0MsSUFBRzswQkFBSzs7Ozs7OzBCQUcvRCw4REFBQ2pCLCtEQUFXQTs7Ozs7OztBQUlsQjtLQVh3QlUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGltZWxpbmUudHN4PzRiYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJpZ1RpbWVsaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvQmlnVGltZWxpbmUnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiByZW0oMzQpLFxuICAgICAgZm9udFdlaWdodDogOTAwLFxuICBcbiAgICAgIFt0aGVtZS5mbi5zbWFsbGVyVGhhbignc20nKV06IHtcbiAgICAgICAgZm9udFNpemU6IHJlbSgyNCksXG4gICAgICB9LFxuICAgIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWVsaW5lKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgPGgxPllvdXIgSGVhbHRoIEpvdXJuZXk6IEEgUGVyc29uYWxpc2VkIFRpbWVsaW5lPC9oMT5cbiAgICAgIDxUaXRsZSBvcmRlcj17Mn0gY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB0YT1cImNlbnRlclwiIG10PVwic21cIj5cbiAgICAgICAgWW91ciBQYXRoIHRvIEhlYWx0aCBhbmQgV2VsbG5lc3MgTWFzdGVyeVxuICAgICAgICA8L1RpdGxlPlxuICAgICAgPEJpZ1RpbWVsaW5lIC8+XG4gICAgICAgXG4gICAgICA8Lz5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiQmlnVGltZWxpbmUiLCJ1c2VTdHlsZXMiLCJjcmVhdGVTdHlsZXMiLCJ0aGVtZSIsInRpdGxlIiwiZm9udFNpemUiLCJyZW0iLCJmb250V2VpZ2h0IiwiZm4iLCJzbWFsbGVyVGhhbiIsIlRpbWVsaW5lIiwiaDEiLCJUaXRsZSIsIm9yZGVyIiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsInRhIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/timeline.tsx\n"));

/***/ })

});