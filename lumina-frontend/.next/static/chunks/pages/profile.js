/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/profile"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Farousha%2FDesktop%2Ffinal%20clone%2FHACKATHON_2023_KAA%2Flumina-frontend%2Fpages%2Fprofile.tsx&page=%2Fprofile!":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Farousha%2FDesktop%2Ffinal%20clone%2FHACKATHON_2023_KAA%2Flumina-frontend%2Fpages%2Fprofile.tsx&page=%2Fprofile! ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/profile\",\n      function () {\n        return __webpack_require__(/*! ./pages/profile.tsx */ \"./pages/profile.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/profile\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmFyb3VzaGElMkZEZXNrdG9wJTJGZmluYWwlMjBjbG9uZSUyRkhBQ0tBVEhPTl8yMDIzX0tBQSUyRmx1bWluYS1mcm9udGVuZCUyRnBhZ2VzJTJGcHJvZmlsZS50c3gmcGFnZT0lMkZwcm9maWxlISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLGdEQUFxQjtBQUM1QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/M2ExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL3Byb2ZpbGVcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL3Byb2ZpbGUudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9wcm9maWxlXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Farousha%2FDesktop%2Ffinal%20clone%2FHACKATHON_2023_KAA%2Flumina-frontend%2Fpages%2Fprofile.tsx&page=%2Fprofile!\n"));

/***/ }),

/***/ "./components/UserData.tsx":
/*!*********************************!*\
  !*** ./components/UserData.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContactIconsList: function() { return /* binding */ ContactIconsList; },\n/* harmony export */   User: function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mantine/core */ \"./node_modules/@mantine/core/esm/index.js\");\n/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-react */ \"./node_modules/@tabler/icons-react/dist/esm/tabler-icons-react.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst useStyles = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.createStyles)((theme, param)=>{\n    let { variant } = param;\n    return {\n        wrapper: {\n            display: \"flex\",\n            alignItems: \"center\",\n            color: theme.white\n        },\n        icon: {\n            marginRight: theme.spacing.md,\n            backgroundImage: variant === \"gradient\" ? \"linear-gradient(135deg, \".concat(theme.colors[theme.primaryColor][4], \" 0%, \").concat(theme.colors[theme.primaryColor][6], \" 100%)\") : \"none\",\n            backgroundColor: \"transparent\"\n        },\n        title: {\n            color: variant === \"gradient\" ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0]\n        },\n        description: {\n            color: variant === \"gradient\" ? theme.black : theme.white\n        }\n    };\n});\nfunction ContactIcon(param) {\n    let { icon: Icon, title, description, variant = \"gradient\", className, ...others } = param;\n    _s();\n    const { classes, cx } = useStyles({\n        variant\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: cx(classes.wrapper, className),\n        ...others,\n        children: [\n            variant === \"gradient\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.ThemeIcon, {\n                size: 40,\n                radius: \"md\",\n                className: classes.icon,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                    size: \"1.5rem\"\n                }, void 0, false, {\n                    fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                mr: \"md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                    size: \"1.5rem\"\n                }, void 0, false, {\n                    fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        size: \"xs\",\n                        className: classes.title,\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                        className: classes.description,\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactIcon, \"/YKNjIEH24xuVzM7Z+ClUmjgAFI=\", false, function() {\n    return [\n        useStyles\n    ];\n});\n_c = ContactIcon;\nconst MOCKDATA = [\n    {\n        title: \"Email\",\n        description: \"hello@mantine.dev\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconAt\n    },\n    {\n        title: \"Phone\",\n        description: \"+49 (800) 335 35 35\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconPhone\n    },\n    {\n        title: \"Address\",\n        description: \"844 Morris Park avenue\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconMapPin\n    },\n    {\n        title: \"Working hours\",\n        description: \"8 a.m. – 11 p.m.\",\n        icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__.IconSun\n    }\n];\nfunction ContactIconsList(param) {\n    let { data = MOCKDATA, variant } = param;\n    const items = data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContactIcon, {\n            variant: variant,\n            ...item\n        }, index, false, {\n            fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n            lineNumber: 88,\n            columnNumber: 43\n        }, this));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n        children: items\n    }, void 0, false, {\n        fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n        lineNumber: 89,\n        columnNumber: 10\n    }, this);\n}\n_c1 = ContactIconsList;\nfunction User() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {\n        cols: 2,\n        breakpoints: [\n            {\n                maxWidth: 755,\n                cols: 1\n            }\n        ],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                sx: (theme)=>({\n                        padding: theme.spacing.xl,\n                        borderRadius: theme.radius.md,\n                        backgroundColor: theme.white,\n                        marginTop: 200\n                    }),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContactIconsList, {}, void 0, false, {\n                    fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                sx: (theme)=>({\n                        padding: theme.spacing.xl,\n                        borderRadius: theme.radius.md,\n                        marginTop: 200,\n                        backgroundImage: \"linear-gradient(135deg, \".concat(theme.colors[theme.primaryColor][6], \" 0%, \").concat(theme.colors[theme.primaryColor][4], \" 100%)\")\n                    }),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContactIconsList, {\n                    variant: \"white\"\n                }, void 0, false, {\n                    fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/components/UserData.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_c2 = User;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ContactIcon\");\n$RefreshReg$(_c1, \"ContactIconsList\");\n$RefreshReg$(_c2, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0YsTUFBTTtZQUFFO1NBQUU7OzBCQUM1RCw4REFBQzVDLDhDQUFHQTtnQkFDRitDLElBQUksQ0FBQ3hDLFFBQVc7d0JBQ2R5QyxTQUFTekMsTUFBTVMsT0FBTyxDQUFDaUMsRUFBRTt3QkFDekJDLGNBQWMzQyxNQUFNMkIsTUFBTSxDQUFDakIsRUFBRTt3QkFDN0JJLGlCQUFpQmQsTUFBTU0sS0FBSzt3QkFDNUJzQyxXQUFVO29CQUVaOzBCQUVBLDRFQUFDZDs7Ozs7Ozs7OzswQkFHSCw4REFBQ3JDLDhDQUFHQTtnQkFDRitDLElBQUksQ0FBQ3hDLFFBQVc7d0JBQ2R5QyxTQUFTekMsTUFBTVMsT0FBTyxDQUFDaUMsRUFBRTt3QkFDekJDLGNBQWMzQyxNQUFNMkIsTUFBTSxDQUFDakIsRUFBRTt3QkFDN0JrQyxXQUFVO3dCQUNWakMsaUJBQWlCLDJCQUNmWCxPQUQwQ0EsTUFBTVksTUFBTSxDQUFDWixNQUFNYSxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUMsU0FFL0UsT0FEQ2IsTUFBTVksTUFBTSxDQUFDWixNQUFNYSxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQ3BDO29CQUNIOzBCQUVBLDRFQUFDaUI7b0JBQWlCN0IsU0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEM7TUE3QmdCbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyRGF0YS50c3g/MjYwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdHlsZXMsIFRoZW1lSWNvbiwgVGV4dCwgU2ltcGxlR3JpZCwgQm94LCBTdGFjayB9IGZyb20gJ0BtYW50aW5lL2NvcmUnO1xuaW1wb3J0IHsgSWNvblN1biwgSWNvblBob25lLCBJY29uTWFwUGluLCBJY29uQXQgfSBmcm9tICdAdGFibGVyL2ljb25zLXJlYWN0JztcblxudHlwZSBDb250YWN0SWNvblZhcmlhbnQgPSAnd2hpdGUnIHwgJ2dyYWRpZW50JztcblxuaW50ZXJmYWNlIENvbnRhY3RJY29uU3R5bGVzIHtcbiAgdmFyaWFudDogQ29udGFjdEljb25WYXJpYW50O1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVTdHlsZXMoKHRoZW1lLCB7IHZhcmlhbnQgfTogQ29udGFjdEljb25TdHlsZXMpID0+ICh7XG4gIHdyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLndoaXRlLFxuICB9LFxuXG4gIGljb246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy5tZCxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICB2YXJpYW50ID09PSAnZ3JhZGllbnQnXG4gICAgICAgID8gYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7dGhlbWUuY29sb3JzW3RoZW1lLnByaW1hcnlDb2xvcl1bNF19IDAlLCAke1xuICAgICAgICAgICAgdGhlbWUuY29sb3JzW3RoZW1lLnByaW1hcnlDb2xvcl1bNl1cbiAgICAgICAgICB9IDEwMCUpYFxuICAgICAgICA6ICdub25lJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gIH0sXG5cbiAgdGl0bGU6IHtcbiAgICBjb2xvcjogdmFyaWFudCA9PT0gJ2dyYWRpZW50JyA/IHRoZW1lLmNvbG9ycy5ncmF5WzZdIDogdGhlbWUuY29sb3JzW3RoZW1lLnByaW1hcnlDb2xvcl1bMF0sXG4gIH0sXG5cbiAgZGVzY3JpcHRpb246IHtcbiAgICBjb2xvcjogdmFyaWFudCA9PT0gJ2dyYWRpZW50JyA/IHRoZW1lLmJsYWNrIDogdGhlbWUud2hpdGUsXG4gIH0sXG59KSk7XG5cbmludGVyZmFjZSBDb250YWN0SWNvblByb3BzIGV4dGVuZHMgT21pdDxSZWFjdC5Db21wb25lbnRQcm9wc1dpdGhvdXRSZWY8J2Rpdic+LCAndGl0bGUnPiB7XG4gIGljb246IFJlYWN0LkZDPGFueT47XG4gIHRpdGxlOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGRlc2NyaXB0aW9uOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHZhcmlhbnQ/OiBDb250YWN0SWNvblZhcmlhbnQ7XG59XG5cbmZ1bmN0aW9uIENvbnRhY3RJY29uKHtcbiAgaWNvbjogSWNvbixcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICB2YXJpYW50ID0gJ2dyYWRpZW50JyxcbiAgY2xhc3NOYW1lLFxuICAuLi5vdGhlcnNcbn06IENvbnRhY3RJY29uUHJvcHMpIHtcbiAgY29uc3QgeyBjbGFzc2VzLCBjeCB9ID0gdXNlU3R5bGVzKHsgdmFyaWFudCB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goY2xhc3Nlcy53cmFwcGVyLCBjbGFzc05hbWUpfSB7Li4ub3RoZXJzfT5cbiAgICAgIHt2YXJpYW50ID09PSAnZ3JhZGllbnQnID8gKFxuICAgICAgICA8VGhlbWVJY29uIHNpemU9ezQwfSByYWRpdXM9XCJtZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufT5cbiAgICAgICAgICA8SWNvbiBzaXplPVwiMS41cmVtXCIgLz5cbiAgICAgICAgPC9UaGVtZUljb24+XG4gICAgICApIDogKFxuICAgICAgICA8Qm94IG1yPVwibWRcIj5cbiAgICAgICAgICA8SWNvbiBzaXplPVwiMS41cmVtXCIgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8VGV4dCBzaXplPVwieHNcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuaW50ZXJmYWNlIENvbnRhY3RJY29uc0xpc3RQcm9wcyB7XG4gIGRhdGE/OiBDb250YWN0SWNvblByb3BzW107XG4gIHZhcmlhbnQ/OiBDb250YWN0SWNvblZhcmlhbnQ7XG59XG5cbmNvbnN0IE1PQ0tEQVRBID0gW1xuICB7IHRpdGxlOiAnRW1haWwnLCBkZXNjcmlwdGlvbjogJ2hlbGxvQG1hbnRpbmUuZGV2JywgaWNvbjogSWNvbkF0IH0sXG4gIHsgdGl0bGU6ICdQaG9uZScsIGRlc2NyaXB0aW9uOiAnKzQ5ICg4MDApIDMzNSAzNSAzNScsIGljb246IEljb25QaG9uZSB9LFxuICB7IHRpdGxlOiAnQWRkcmVzcycsIGRlc2NyaXB0aW9uOiAnODQ0IE1vcnJpcyBQYXJrIGF2ZW51ZScsIGljb246IEljb25NYXBQaW4gfSxcbiAgeyB0aXRsZTogJ1dvcmtpbmcgaG91cnMnLCBkZXNjcmlwdGlvbjogJzggYS5tLiDigJMgMTEgcC5tLicsIGljb246IEljb25TdW4gfSxcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250YWN0SWNvbnNMaXN0KHsgZGF0YSA9IE1PQ0tEQVRBLCB2YXJpYW50IH06IENvbnRhY3RJY29uc0xpc3RQcm9wcykge1xuICBjb25zdCBpdGVtcyA9IGRhdGEubWFwKChpdGVtLCBpbmRleCkgPT4gPENvbnRhY3RJY29uIGtleT17aW5kZXh9IHZhcmlhbnQ9e3ZhcmlhbnR9IHsuLi5pdGVtfSAvPik7XG4gIHJldHVybiA8U3RhY2s+e2l0ZW1zfTwvU3RhY2s+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXNlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8U2ltcGxlR3JpZCBjb2xzPXsyfSBicmVha3BvaW50cz17W3sgbWF4V2lkdGg6IDc1NSwgY29sczogMSB9XX0+XG4gICAgICA8Qm94XG4gICAgICAgIHN4PXsodGhlbWUpID0+ICh7XG4gICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy54bCxcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IHRoZW1lLnJhZGl1cy5tZCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLndoaXRlLFxuICAgICAgICAgIG1hcmdpblRvcDoyMDBcbiAgICAgICAgICBcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxDb250YWN0SWNvbnNMaXN0IC8+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveFxuICAgICAgICBzeD17KHRoZW1lKSA9PiAoe1xuICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcueGwsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yYWRpdXMubWQsXG4gICAgICAgICAgbWFyZ2luVG9wOjIwMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke3RoZW1lLmNvbG9yc1t0aGVtZS5wcmltYXJ5Q29sb3JdWzZdfSAwJSwgJHtcbiAgICAgICAgICAgIHRoZW1lLmNvbG9yc1t0aGVtZS5wcmltYXJ5Q29sb3JdWzRdXG4gICAgICAgICAgfSAxMDAlKWAsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8Q29udGFjdEljb25zTGlzdCB2YXJpYW50PVwid2hpdGVcIiAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9TaW1wbGVHcmlkPlxuICApO1xufSJdLCJuYW1lcyI6WyJjcmVhdGVTdHlsZXMiLCJUaGVtZUljb24iLCJUZXh0IiwiU2ltcGxlR3JpZCIsIkJveCIsIlN0YWNrIiwiSWNvblN1biIsIkljb25QaG9uZSIsIkljb25NYXBQaW4iLCJJY29uQXQiLCJ1c2VTdHlsZXMiLCJ0aGVtZSIsInZhcmlhbnQiLCJ3cmFwcGVyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJjb2xvciIsIndoaXRlIiwiaWNvbiIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsIm1kIiwiYmFja2dyb3VuZEltYWdlIiwiY29sb3JzIiwicHJpbWFyeUNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiLCJncmF5IiwiZGVzY3JpcHRpb24iLCJibGFjayIsIkNvbnRhY3RJY29uIiwiSWNvbiIsImNsYXNzTmFtZSIsIm90aGVycyIsImNsYXNzZXMiLCJjeCIsImRpdiIsInNpemUiLCJyYWRpdXMiLCJtciIsIk1PQ0tEQVRBIiwiQ29udGFjdEljb25zTGlzdCIsImRhdGEiLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIlVzZXIiLCJjb2xzIiwiYnJlYWtwb2ludHMiLCJtYXhXaWR0aCIsInN4IiwicGFkZGluZyIsInhsIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserData.tsx\n"));

/***/ }),

/***/ "./pages/profile.tsx":
/*!***************************!*\
  !*** ./pages/profile.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_UserData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UserData */ \"./components/UserData.tsx\");\n\n\nfunction Profile() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_UserData__WEBPACK_IMPORTED_MODULE_1__.User, {}, void 0, false, {\n            fileName: \"/Users/arousha/Desktop/final clone/HACKATHON_2023_KAA/lumina-frontend/pages/profile.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUU1QixTQUFTQztJQUNwQixxQkFDRTtrQkFDQSw0RUFBQ0Qsc0RBQUlBOzs7Ozs7QUFJWDtLQVB3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3g/ZGNlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1VzZXJ9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckRhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICA8VXNlciAvPlxuICAgICAgIFxuICAgICAgPC8+XG4gICAgKVxufVxuICAiXSwibmFtZXMiOlsiVXNlciIsIlByb2ZpbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Farousha%2FDesktop%2Ffinal%20clone%2FHACKATHON_2023_KAA%2Flumina-frontend%2Fpages%2Fprofile.tsx&page=%2Fprofile!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);