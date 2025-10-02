module.exports = [
"[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685 [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>MDXContent,
    "extractedReferences",
    ()=>extractedReferences,
    "frontmatter",
    ()=>frontmatter,
    "structuredData",
    ()=>structuredData,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
let frontmatter = {
    "title": "Testing Guide",
    "description": "Testing guidelines and practices for BetterGov.ph"
};
let extractedReferences = [];
let structuredData = {
    "contents": [
        {
            "heading": "end-to-end-testing",
            "content": "This project uses Playwright for end-to-end testing to ensure critical user flows work correctly across different browsers and devices."
        },
        {
            "heading": "running-e2e-tests",
            "content": "npm run test:e2e - Run all E2E tests headlessly"
        },
        {
            "heading": "running-e2e-tests",
            "content": "npm run test:e2e:ui - Open Playwright UI to run and debug tests interactively"
        },
        {
            "heading": "running-e2e-tests",
            "content": "npm run test:e2e:headed - Run tests with visible browser windows"
        },
        {
            "heading": "running-e2e-tests",
            "content": "npm run test:e2e:debug - Debug tests with Playwright Inspector"
        },
        {
            "heading": "running-e2e-tests",
            "content": "npm run test:e2e:codegen - Record new tests using Playwright's code generator"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Our E2E tests cover:"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Critical User Flows"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Homepage loading and navigation"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "PhilSys National ID registration"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Government services search"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Language switching"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Emergency hotlines access"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Navigation"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Main menu navigation"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Dropdown menus"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Footer links"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Breadcrumb navigation"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Accessibility"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "WCAG compliance checks using axe-core"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Keyboard navigation"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "ARIA labels and alt text"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Focus indicators"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Performance"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Page load times"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "First Contentful Paint metrics"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "DOM size optimization"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Image optimization"
        },
        {
            "heading": "e2e-test-coverage",
            "content": "Slow network handling"
        },
        {
            "heading": "writing-e2e-tests",
            "content": "E2E tests are located in the e2e/ directory. Example test structure:"
        }
    ],
    "headings": [
        {
            "id": "testing",
            "content": "Testing"
        },
        {
            "id": "end-to-end-testing",
            "content": "End-to-End Testing"
        },
        {
            "id": "running-e2e-tests",
            "content": "Running E2E Tests"
        },
        {
            "id": "e2e-test-coverage",
            "content": "E2E Test Coverage"
        },
        {
            "id": "writing-e2e-tests",
            "content": "Writing E2E Tests"
        }
    ]
};
const toc = [
    {
        depth: 2,
        url: "#testing",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Testing"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#end-to-end-testing",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "End-to-End Testing"
        }, void 0, false)
    },
    {
        depth: 4,
        url: "#running-e2e-tests",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Running E2E Tests"
        }, void 0, false)
    },
    {
        depth: 4,
        url: "#e2e-test-coverage",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "E2E Test Coverage"
        }, void 0, false)
    },
    {
        depth: 4,
        url: "#writing-e2e-tests",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Writing E2E Tests"
        }, void 0, false)
    }
];
function _createMdxContent(props) {
    const _components = {
        code: "code",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        li: "li",
        ol: "ol",
        p: "p",
        pre: "pre",
        span: "span",
        strong: "strong",
        ul: "ul",
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "testing",
                children: "Testing"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 153,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "end-to-end-testing",
                children: "End-to-End Testing"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 153,
                columnNumber: 75
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "This project uses Playwright for end-to-end testing to ensure critical user flows work correctly across different browsers and devices."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 153,
                columnNumber: 160
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h4, {
                id: "running-e2e-tests",
                children: "Running E2E Tests"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 153,
                columnNumber: 336
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run test:e2e"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 457
                            }, this),
                            " - Run all E2E tests headlessly"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 153,
                        columnNumber: 441
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run test:e2e:ui"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 588
                            }, this),
                            " - Open Playwright UI to run and debug tests interactively"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 153,
                        columnNumber: 572
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run test:e2e:headed"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 749
                            }, this),
                            " - Run tests with visible browser windows"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 153,
                        columnNumber: 733
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run test:e2e:debug"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 897
                            }, this),
                            " - Debug tests with Playwright Inspector"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 153,
                        columnNumber: 881
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run test:e2e:codegen"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 1043
                            }, this),
                            " - Record new tests using Playwright's code generator"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 153,
                        columnNumber: 1027
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 153,
                columnNumber: 419
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h4, {
                id: "e2e-test-coverage",
                children: "E2E Test Coverage"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 153,
                columnNumber: 1211
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Our E2E tests cover:"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 153,
                columnNumber: 1294
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                    children: "Critical User Flows"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 153,
                                    columnNumber: 1414
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 1399
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Homepage loading and navigation"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 1522
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "PhilSys National ID registration"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 1596
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Government services search"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 1671
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Language switching"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 1740
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Emergency hotlines access"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 1801
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 1500
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 153,
                        columnNumber: 1377
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                    children: "Navigation"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 153,
                                    columnNumber: 1952
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 1937
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Main menu navigation"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 2051
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Dropdown menus"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 2114
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Footer links"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 2171
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Breadcrumb navigation"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 2226
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 2029
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 153,
                        columnNumber: 1915
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                    children: "Accessibility"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 153,
                                    columnNumber: 2373
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 2358
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "WCAG compliance checks using axe-core"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 2475
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Keyboard navigation"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 2555
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "ARIA labels and alt text"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 2617
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Focus indicators"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 2684
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 2453
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 153,
                        columnNumber: 2336
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                    children: "Performance"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 153,
                                    columnNumber: 2826
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 2811
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                                children: [
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Page load times"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 2926
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "First Contentful Paint metrics"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 2984
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "DOM size optimization"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 3057
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Image optimization"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 3121
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                        children: "Slow network handling"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 153,
                                        columnNumber: 3182
                                    }, this),
                                    "\n"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 153,
                                columnNumber: 2904
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 153,
                        columnNumber: 2789
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 153,
                columnNumber: 1355
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h4, {
                id: "writing-e2e-tests",
                children: "Writing E2E Tests"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 153,
                columnNumber: 3315
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "E2E tests are located in the ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: "e2e/"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 153,
                        columnNumber: 3446
                    }, this),
                    " directory. Example test structure:"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 153,
                columnNumber: 3398
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                    className: "shiki shiki-themes github-light github-dark",
                    style: {
                        "--shiki-light": "#24292e",
                        "--shiki-dark": "#e1e4e8",
                        "--shiki-light-bg": "#fff",
                        "--shiki-dark-bg": "#24292e"
                    },
                    tabIndex: "0",
                    icon: '<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="currentColor" /></svg>',
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "import"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 158,
                                        columnNumber: 1354
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: " { test, expect } "
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 161,
                                        columnNumber: 35
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "from"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 164,
                                        columnNumber: 47
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " '@playwright/test'"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 167,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: ";"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 170,
                                        columnNumber: 48
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 158,
                                columnNumber: 1319
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 173,
                                columnNumber: 55
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#6F42C1",
                                            "--shiki-dark": "#B392F0"
                                        },
                                        children: "test"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 173,
                                        columnNumber: 133
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "("
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 176,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: "'user can search for services'"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 179,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: ", "
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 182,
                                        columnNumber: 59
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "async"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 185,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: " ({ "
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 188,
                                        columnNumber: 34
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#E36209",
                                            "--shiki-dark": "#FFAB70"
                                        },
                                        children: "page"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 191,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: " }) "
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 194,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "=>"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 197,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: " {"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 200,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 173,
                                columnNumber: 98
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "  await"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 203,
                                        columnNumber: 91
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: " page."
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 206,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#6F42C1",
                                            "--shiki-dark": "#B392F0"
                                        },
                                        children: "goto"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 209,
                                        columnNumber: 35
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "("
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 212,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: "'/'"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 215,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: ");"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 218,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 203,
                                columnNumber: 56
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "  await"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 221,
                                        columnNumber: 91
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: " page."
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 224,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#6F42C1",
                                            "--shiki-dark": "#B392F0"
                                        },
                                        children: "getByPlaceholder"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 227,
                                        columnNumber: 35
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "("
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 230,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 233,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#DBEDFF"
                                        },
                                        children: "Search for services"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 236,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 239,
                                        columnNumber: 48
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "i"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 242,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: ")."
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 245,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#6F42C1",
                                            "--shiki-dark": "#B392F0"
                                        },
                                        children: "fill"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 248,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "("
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 251,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: "'passport'"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 254,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: ");"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 257,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 221,
                                columnNumber: 56
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "  await"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 260,
                                        columnNumber: 91
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: " page."
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 263,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#6F42C1",
                                            "--shiki-dark": "#B392F0"
                                        },
                                        children: "getByPlaceholder"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 266,
                                        columnNumber: 35
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "("
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 269,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 272,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#DBEDFF"
                                        },
                                        children: "Search for services"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 275,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: "/"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 278,
                                        columnNumber: 48
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "i"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 281,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: ")."
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 284,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#6F42C1",
                                            "--shiki-dark": "#B392F0"
                                        },
                                        children: "press"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 287,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "("
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 290,
                                        columnNumber: 34
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: "'Enter'"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 293,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: ");"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 296,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 260,
                                columnNumber: 56
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "  await"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 299,
                                        columnNumber: 91
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#6F42C1",
                                            "--shiki-dark": "#B392F0"
                                        },
                                        children: " expect"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 302,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "(page)."
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 305,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#6F42C1",
                                            "--shiki-dark": "#B392F0"
                                        },
                                        children: "toHaveURL"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 308,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "("
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 311,
                                        columnNumber: 38
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: "'/search'"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 314,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: ");"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 317,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 299,
                                columnNumber: 56
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#D73A49",
                                            "--shiki-dark": "#F97583"
                                        },
                                        children: "  await"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 320,
                                        columnNumber: 91
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#6F42C1",
                                            "--shiki-dark": "#B392F0"
                                        },
                                        children: " expect"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 323,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "(page."
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 326,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#6F42C1",
                                            "--shiki-dark": "#B392F0"
                                        },
                                        children: "locator"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 329,
                                        columnNumber: 35
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "("
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 332,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: "'text=/passport/i'"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 335,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "))."
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 338,
                                        columnNumber: 47
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#6F42C1",
                                            "--shiki-dark": "#B392F0"
                                        },
                                        children: "toBeVisible"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 341,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#24292E",
                                            "--shiki-dark": "#E1E4E8"
                                        },
                                        children: "();"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 344,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 320,
                                columnNumber: 56
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                    },
                                    children: "});"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 347,
                                    columnNumber: 92
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 347,
                                columnNumber: 57
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 158,
                        columnNumber: 1301
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 153,
                    columnNumber: 3554
                }, this)
            }, void 0, false)
        ]
    }, void 0, true);
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MDXLayout, {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_createMdxContent, {
            ...props
        }, void 0, false, {
            fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
            lineNumber: 354,
            columnNumber: 44
        }, this)
    }, void 0, false, {
        fileName: "[project]/content/docs/contributing/testing.mdx.js?collection=docs&hash=1759350457685",
        lineNumber: 354,
        columnNumber: 22
    }, this) : _createMdxContent(props);
}
}),
"[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685 [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>MDXContent,
    "extractedReferences",
    ()=>extractedReferences,
    "frontmatter",
    ()=>frontmatter,
    "structuredData",
    ()=>structuredData,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/steps.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/callout.js [app-rsc] (ecmascript)");
;
let frontmatter = {
    "title": "Contributing Guide",
    "description": "How to contribute to BetterGov.ph"
};
let extractedReferences = [
    {
        "href": "/docs/contributing/code-of-conduct"
    },
    {
        "href": "https://discord.gg/mHtThpN8bT"
    },
    {
        "href": "mailto:volunteers@bettergov.ph"
    },
    {
        "href": "https://discord.com/channels/1415670958710325270/1418544879717318826"
    },
    {
        "href": "https://github.com/orgs/bettergovph/discussions"
    },
    {
        "href": "https://github.com/bettergovph/bettergov/issues/new"
    },
    {
        "href": "/docs/meilisearch"
    },
    {
        "href": "https://www.conventionalcommits.org/"
    },
    {
        "href": "https://www.thegooddocsproject.dev/template/contributing-guide"
    },
    {
        "href": "https://www.conventionalcommits.org/en/v1.0.0/"
    },
    {
        "href": "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo"
    }
];
let structuredData = {
    "contents": [
        {
            "heading": undefined,
            "content": "Welcome to the Better Gov Contributing Guide and thank you for your interest in supporting the project!"
        },
        {
            "heading": undefined,
            "content": "We welcome contributions of all kinds. Whether you are a developer, designer, writer, or just someone with a great idea, there's a place for you here."
        },
        {
            "heading": "types-of-contributions",
            "content": "Here are the types of contributions we currently accept:"
        },
        {
            "heading": "types-of-contributions",
            "content": "Source Code – Fix bugs, add features, or improve existing code"
        },
        {
            "heading": "types-of-contributions",
            "content": "Ideas – Share suggestions for improvements or new features"
        },
        {
            "heading": "types-of-contributions",
            "content": "Bug Reporting – Help us identify and document issues"
        },
        {
            "heading": "types-of-contributions",
            "content": "Translations – Make the project accessible in different languages"
        },
        {
            "heading": "types-of-contributions",
            "content": "Documentation – Improve guides, tutorials, or reference docs"
        },
        {
            "heading": "types-of-contributions",
            "content": "Data Scraping – Contribute data collection scripts or improvements"
        },
        {
            "heading": "better-gov-overview",
            "content": "Better Gov is a community-led initiative to create a better and more usable Philippine national government website."
        },
        {
            "heading": "better-gov-overview",
            "content": "It is an open-source project dedicated to improving access to government-related information and services through technology, transparency, and collaboration."
        },
        {
            "heading": "ground-rules",
            "content": "Before contributing, read our Code of Conduct to learn more about our community guidelines and expectations."
        },
        {
            "heading": "community-engagement",
            "content": "Connect with fellow contributors or stay up-to-date with news about Better Gov:"
        },
        {
            "heading": "community-engagement",
            "content": "Join our project contributors on Discord"
        },
        {
            "heading": "share-ideas",
            "content": "To share your new ideas for the project:"
        },
        {
            "heading": "share-ideas",
            "content": "Reach out via email volunteers@bettergov.ph"
        },
        {
            "heading": "share-ideas",
            "content": "Discord Ideas Forum: ideas"
        },
        {
            "heading": "share-ideas",
            "content": "Submit ideas in GitHub Discussions"
        },
        {
            "heading": "report-issues-and-bugs",
            "content": "If you encounter a problem with the project, please open an issue."
        },
        {
            "heading": "report-issues-and-bugs",
            "content": "When reporting an issue, please include the following details:"
        },
        {
            "heading": "report-issues-and-bugs",
            "content": "Description – A clear and concise explanation of the problem"
        },
        {
            "heading": "report-issues-and-bugs",
            "content": "Steps to reproduce – How to reproduce the issue (step by step)"
        },
        {
            "heading": "report-issues-and-bugs",
            "content": "Expected behavior – What you thought should happen"
        },
        {
            "heading": "report-issues-and-bugs",
            "content": "Actual behavior – What actually happened instead"
        },
        {
            "heading": "report-issues-and-bugs",
            "content": "Environment details – Your operating system, browser (if applicable), Node.js version, etc."
        },
        {
            "heading": "report-issues-and-bugs",
            "content": "Screenshots or logs – If relevant, add screenshots or error logs"
        },
        {
            "heading": "report-issues-and-bugs",
            "content": "type: info"
        },
        {
            "heading": "report-issues-and-bugs",
            "content": "Check existing issues before creating a new one to avoid duplicates."
        },
        {
            "heading": "before-you-start",
            "content": "Before you start contributing, ensure you have the following:"
        },
        {
            "heading": "before-you-start",
            "content": "Node.js (v22 or above recommended)"
        },
        {
            "heading": "before-you-start",
            "content": "npm (v10 or above) or yarn (optional)"
        },
        {
            "heading": "before-you-start",
            "content": "Git"
        },
        {
            "heading": "before-you-start",
            "content": "A code editor like VS Code"
        },
        {
            "heading": "environment-setup",
            "content": "To set up your environment:"
        },
        {
            "heading": "environment-setup",
            "content": "Create environment file - At the root of the project, create a .env file. See .env.example for reference"
        },
        {
            "heading": "environment-setup",
            "content": "Use recommended Node.js version:"
        },
        {
            "heading": "environment-setup",
            "content": "Install dependencies:"
        },
        {
            "heading": "environment-setup",
            "content": "Start development server:"
        },
        {
            "heading": "setting-up-search-meilisearch",
            "content": "BetterGov uses Meilisearch to power its search functionality. To set up search for local development:"
        },
        {
            "heading": "setting-up-search-meilisearch",
            "content": "Install and configure Meilisearch - Follow the detailed setup guide in Meilisearch Setup"
        },
        {
            "heading": "setting-up-search-meilisearch",
            "content": "Index your data - Load government services and directory data into the search engine"
        },
        {
            "heading": "setting-up-search-meilisearch",
            "content": "Test search functionality - Verify everything works by searching on your local site"
        },
        {
            "heading": "initial-setup",
            "content": "Fork the Repository on GitHub"
        },
        {
            "heading": "initial-setup",
            "content": "Go to the main project repository (github.com/bettergovph/bettergov)"
        },
        {
            "heading": "initial-setup",
            "content": "Click the \"Fork\" button to create a copy under your GitHub account"
        },
        {
            "heading": "initial-setup",
            "content": "Clone the Forked Repository to Local Machine"
        },
        {
            "heading": "initial-setup",
            "content": "Add the Original Repository as an Upstream"
        },
        {
            "heading": "branch-creation",
            "content": "Update local main before creating a new branch"
        },
        {
            "heading": "branch-creation",
            "content": "Create a New Feature Branch"
        },
        {
            "heading": "branch-creation",
            "content": "Use a prefix-based convention for clarity:"
        },
        {
            "heading": "branch-creation",
            "content": "Format:"
        },
        {
            "heading": "branch-creation",
            "content": "Examples:"
        },
        {
            "heading": "branch-creation",
            "content": "feature/add-login-form"
        },
        {
            "heading": "branch-creation",
            "content": "fix/navbar-responsive-issue"
        },
        {
            "heading": "branch-creation",
            "content": "docs/add-contributing-and-code-of-conduct"
        },
        {
            "heading": "branch-creation",
            "content": "type: info"
        },
        {
            "heading": "branch-creation",
            "content": "Keep branch names short, descriptive, and kebab-case."
        },
        {
            "heading": "development-loop",
            "content": "Make Changes"
        },
        {
            "heading": "development-loop",
            "content": "Make sure your code passes linting and tests before committing."
        },
        {
            "heading": "development-loop",
            "content": "Commit Messages"
        },
        {
            "heading": "development-loop",
            "content": "We follow Conventional Commits for all commit messages."
        },
        {
            "heading": "development-loop",
            "content": "Format:"
        },
        {
            "heading": "development-loop",
            "content": "Common Types Used:"
        },
        {
            "heading": "development-loop",
            "content": "feat: → A new feature"
        },
        {
            "heading": "development-loop",
            "content": "fix: → A bug fix"
        },
        {
            "heading": "development-loop",
            "content": "docs: → Documentation only changes"
        },
        {
            "heading": "development-loop",
            "content": "style: → Code style or formatting changes (no logic)"
        },
        {
            "heading": "development-loop",
            "content": "refactor: → Code refactoring (no feature or fix)"
        },
        {
            "heading": "development-loop",
            "content": "test: → Adding or updating tests"
        },
        {
            "heading": "development-loop",
            "content": "chore: → Maintenance tasks (build process, dependencies, etc.)"
        },
        {
            "heading": "development-loop",
            "content": "Examples:"
        },
        {
            "heading": "development-loop",
            "content": "Push to the Forked Repository"
        },
        {
            "heading": "development-loop",
            "content": "Sync with Upstream Again"
        },
        {
            "heading": "development-loop",
            "content": "If the upstream main branch has been updated while working, integrate changes into your feature branch to avoid conflicts:"
        },
        {
            "heading": "pull-requests",
            "content": "We use Pull Requests (PRs) to review and merge changes:"
        },
        {
            "heading": "pull-requests",
            "content": "Open a Pull Request to the main repository:"
        },
        {
            "heading": "pull-requests",
            "content": "Target the main branch (or the branch specified by maintainers)"
        },
        {
            "heading": "pull-requests",
            "content": "Provide a clear title and detailed description of your changes"
        },
        {
            "heading": "pull-requests",
            "content": "Reference any related issues (e.g., \"Closes #12\")"
        },
        {
            "heading": "pull-requests",
            "content": "AI-Assisted Work Disclosure: If you used AI tools to help generate or significantly modify code in your PR, please disclose this in the PR description"
        },
        {
            "heading": "pull-requests",
            "content": "Wait for review:"
        },
        {
            "heading": "pull-requests",
            "content": "Maintain open communication with reviewers"
        },
        {
            "heading": "pull-requests",
            "content": "Make any requested changes by committing in local feature branch"
        },
        {
            "heading": "pull-requests",
            "content": "After making changes, commit and push to the same branch—the PR will update automatically"
        },
        {
            "heading": "pull-requests",
            "content": "A maintainer will merge your PR once it's approved."
        },
        {
            "heading": "resources",
            "content": "The Good Docs Project Contributing Guide"
        },
        {
            "heading": "resources",
            "content": "Conventional Commits"
        },
        {
            "heading": "resources",
            "content": "GitHub Fork Guide"
        }
    ],
    "headings": [
        {
            "id": "types-of-contributions",
            "content": "Types of Contributions"
        },
        {
            "id": "better-gov-overview",
            "content": "Better Gov Overview"
        },
        {
            "id": "ground-rules",
            "content": "Ground Rules"
        },
        {
            "id": "community-engagement",
            "content": "Community Engagement"
        },
        {
            "id": "share-ideas",
            "content": "Share Ideas"
        },
        {
            "id": "report-issues-and-bugs",
            "content": "Report Issues and Bugs"
        },
        {
            "id": "before-you-start",
            "content": "Before You Start"
        },
        {
            "id": "environment-setup",
            "content": "Environment Setup"
        },
        {
            "id": "setting-up-search-meilisearch",
            "content": "Setting up Search (Meilisearch)"
        },
        {
            "id": "contribution-workflow",
            "content": "Contribution Workflow"
        },
        {
            "id": "initial-setup",
            "content": "Initial Setup"
        },
        {
            "id": "branch-creation",
            "content": "Branch Creation"
        },
        {
            "id": "development-loop",
            "content": "Development Loop"
        },
        {
            "id": "pull-requests",
            "content": "Pull Requests"
        },
        {
            "id": "resources",
            "content": "Resources"
        }
    ]
};
;
;
const toc = [
    {
        depth: 2,
        url: "#types-of-contributions",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Types of Contributions"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#better-gov-overview",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Better Gov Overview"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#ground-rules",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Ground Rules"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#community-engagement",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Community Engagement"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#share-ideas",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Share Ideas"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#report-issues-and-bugs",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Report Issues and Bugs"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#before-you-start",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Before You Start"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#environment-setup",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Environment Setup"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#setting-up-search-meilisearch",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Setting up Search (Meilisearch)"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#contribution-workflow",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Contribution Workflow"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#initial-setup",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Initial Setup"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#branch-creation",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Branch Creation"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#development-loop",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Development Loop"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#pull-requests",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Pull Requests"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#resources",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Resources"
        }, void 0, false)
    }
];
function _createMdxContent(props) {
    const _components = {
        a: "a",
        code: "code",
        h2: "h2",
        h3: "h3",
        li: "li",
        ol: "ol",
        p: "p",
        pre: "pre",
        span: "span",
        strong: "strong",
        ul: "ul",
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Welcome to the Better Gov Contributing Guide and thank you for your interest in supporting the project!"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "We welcome contributions of all kinds. Whether you are a developer, designer, writer, or just someone with a great idea, there's a place for you here."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 156
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "types-of-contributions",
                children: "Types of Contributions"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 347
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Here are the types of contributions we currently accept:"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 440
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Source Code"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 575
                            }, this),
                            " – Fix bugs, add features, or improve existing code"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 559
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Ideas"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 725
                            }, this),
                            " – Share suggestions for improvements or new features"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 709
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Bug Reporting"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 871
                            }, this),
                            " – Help us identify and document issues"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 855
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Translations"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 1011
                            }, this),
                            " – Make the project accessible in different languages"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 995
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Documentation"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 1164
                            }, this),
                            " – Improve guides, tutorials, or reference docs"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 1148
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Data Scraping"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 1312
                            }, this),
                            " – Contribute data collection scripts or improvements"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 1296
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 537
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "better-gov-overview",
                children: "Better Gov Overview"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 1473
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Better Gov is a community-led initiative to create a better and more usable Philippine national government website."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 1560
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "It is an open-source project dedicated to improving access to government-related information and services through technology, transparency, and collaboration."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 1716
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "ground-rules",
                children: "Ground Rules"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 1915
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "Before contributing, read our ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "/docs/contributing/code-of-conduct",
                        children: "Code of Conduct"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 2037
                    }, this),
                    " to learn more about our community guidelines and expectations."
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 1988
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "community-engagement",
                children: "Community Engagement"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 2218
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Connect with fellow contributors or stay up-to-date with news about Better Gov:"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 2307
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Join our project contributors on ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://discord.gg/mHtThpN8bT",
                                children: "Discord"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 2502
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 2449
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 2427
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "share-ideas",
                children: "Share Ideas"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 2627
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "To share your new ideas for the project:"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 2698
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Reach out via email ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "mailto:volunteers@bettergov.ph",
                                children: "volunteers@bettergov.ph"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 2841
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 2801
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Discord Ideas Forum: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://discord.com/channels/1415670958710325270/1418544879717318826",
                                children: "ideas"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 3001
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 2960
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Submit ideas in ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://github.com/orgs/bettergovph/discussions",
                                children: "GitHub Discussions"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 3176
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 3140
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 2779
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "report-issues-and-bugs",
                children: "Report Issues and Bugs"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 3330
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "If you encounter a problem with the project, please ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://github.com/bettergovph/bettergov/issues/new",
                        children: "open an issue"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 3494
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 3423
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "When reporting an issue, please include the following details:"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 3628
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 3769
                            }, this),
                            " – A clear and concise explanation of the problem"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 3753
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Steps to reproduce"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 3917
                            }, this),
                            " – How to reproduce the issue (step by step)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 3901
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Expected behavior"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 4067
                            }, this),
                            " – What you thought should happen"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 4051
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Actual behavior"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 4205
                            }, this),
                            " – What actually happened instead"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 4189
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Environment details"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 4341
                            }, this),
                            " – Your operating system, browser (if applicable), Node.js version, etc."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 4325
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Screenshots or logs"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 4520
                            }, this),
                            " – If relevant, add screenshots or error logs"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 4504
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 3731
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                type: "info",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                    children: "Check existing issues before creating a new one to avoid duplicates."
                }, void 0, false, {
                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 421,
                    columnNumber: 4700
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 4679
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "before-you-start",
                children: "Before You Start"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 4819
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Before you start contributing, ensure you have the following:"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 4900
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "Node.js (v22 or above recommended)"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 5024
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "npm (v10 or above) or yarn (optional)"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 5101
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "Git"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 5181
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "A code editor like VS Code"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 5227
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 5002
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "environment-setup",
                children: "Environment Setup"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 5319
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "To set up your environment:"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 5402
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                        children: "Create environment file"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 421,
                                        columnNumber: 5529
                                    }, this),
                                    " - At the root of the project, create a ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: ".env"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 421,
                                        columnNumber: 5641
                                    }, this),
                                    " file. See ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: ".env.example"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 421,
                                        columnNumber: 5701
                                    }, this),
                                    " for reference"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 5514
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 5492
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                        children: "Use recommended Node.js version"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 421,
                                        columnNumber: 5854
                                    }, this),
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 421,
                                columnNumber: 5839
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                                    className: "shiki shiki-themes github-light github-dark",
                                    style: {
                                        "--shiki-light": "#24292e",
                                        "--shiki-dark": "#e1e4e8",
                                        "--shiki-light-bg": "#fff",
                                        "--shiki-dark-bg": "#24292e"
                                    },
                                    tabIndex: "0",
                                    icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                className: "line",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    style: {
                                                        "--shiki-light": "#6A737D",
                                                        "--shiki-dark": "#6A737D"
                                                    },
                                                    children: "# If you have nvm installed:"
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 426,
                                                    columnNumber: 480
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 426,
                                                columnNumber: 445
                                            }, this),
                                            "\n",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                className: "line",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#6F42C1",
                                                            "--shiki-dark": "#B392F0"
                                                        },
                                                        children: "nvm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 429,
                                                        columnNumber: 117
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#032F62",
                                                            "--shiki-dark": "#9ECBFF"
                                                        },
                                                        children: " use"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 432,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 429,
                                                columnNumber: 82
                                            }, this),
                                            "\n",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                className: "line"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 435,
                                                columnNumber: 58
                                            }, this),
                                            "\n",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                className: "line",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    style: {
                                                        "--shiki-light": "#6A737D",
                                                        "--shiki-dark": "#6A737D"
                                                    },
                                                    children: "# Or if you have fnm installed:"
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 435,
                                                    columnNumber: 136
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 435,
                                                columnNumber: 101
                                            }, this),
                                            "\n",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                className: "line",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#6F42C1",
                                                            "--shiki-dark": "#B392F0"
                                                        },
                                                        children: "fnm"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 438,
                                                        columnNumber: 120
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#032F62",
                                                            "--shiki-dark": "#9ECBFF"
                                                        },
                                                        children: " use"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 441,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 438,
                                                columnNumber: 85
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 426,
                                        columnNumber: 427
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 421,
                                    columnNumber: 5959
                                }, this)
                            }, void 0, false),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 421,
                        columnNumber: 5817
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                        children: "Install dependencies"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 444,
                                        columnNumber: 158
                                    }, this),
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 444,
                                columnNumber: 143
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                                    className: "shiki shiki-themes github-light github-dark",
                                    style: {
                                        "--shiki-light": "#24292e",
                                        "--shiki-dark": "#e1e4e8",
                                        "--shiki-light-bg": "#fff",
                                        "--shiki-dark-bg": "#24292e"
                                    },
                                    tabIndex: "0",
                                    icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    style: {
                                                        "--shiki-light": "#6F42C1",
                                                        "--shiki-dark": "#B392F0"
                                                    },
                                                    children: "npm"
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 449,
                                                    columnNumber: 480
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    style: {
                                                        "--shiki-light": "#032F62",
                                                        "--shiki-dark": "#9ECBFF"
                                                    },
                                                    children: " install"
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 452,
                                                    columnNumber: 32
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 449,
                                            columnNumber: 445
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 449,
                                        columnNumber: 427
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 444,
                                    columnNumber: 252
                                }, this)
                            }, void 0, false),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 444,
                        columnNumber: 121
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                        children: "Start development server"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 455,
                                        columnNumber: 162
                                    }, this),
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 455,
                                columnNumber: 147
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                                    className: "shiki shiki-themes github-light github-dark",
                                    style: {
                                        "--shiki-light": "#24292e",
                                        "--shiki-dark": "#e1e4e8",
                                        "--shiki-light-bg": "#fff",
                                        "--shiki-dark-bg": "#24292e"
                                    },
                                    tabIndex: "0",
                                    icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            className: "line",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    style: {
                                                        "--shiki-light": "#6F42C1",
                                                        "--shiki-dark": "#B392F0"
                                                    },
                                                    children: "npm"
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 460,
                                                    columnNumber: 480
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    style: {
                                                        "--shiki-light": "#032F62",
                                                        "--shiki-dark": "#9ECBFF"
                                                    },
                                                    children: " run"
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 463,
                                                    columnNumber: 32
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    style: {
                                                        "--shiki-light": "#032F62",
                                                        "--shiki-dark": "#9ECBFF"
                                                    },
                                                    children: " dev"
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 466,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 460,
                                            columnNumber: 445
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 460,
                                        columnNumber: 427
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 455,
                                    columnNumber: 260
                                }, this)
                            }, void 0, false),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 455,
                        columnNumber: 125
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 421,
                columnNumber: 5470
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "setting-up-search-meilisearch",
                children: "Setting up Search (Meilisearch)"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 469,
                columnNumber: 144
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "BetterGov uses Meilisearch to power its search functionality. To set up search for local development:"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 469,
                columnNumber: 253
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Install and configure Meilisearch"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 469,
                                columnNumber: 433
                            }, this),
                            " - Follow the detailed setup guide in ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "/docs/meilisearch",
                                children: "Meilisearch Setup"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 469,
                                columnNumber: 553
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 469,
                        columnNumber: 417
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Index your data"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 469,
                                columnNumber: 669
                            }, this),
                            " - Load government services and directory data into the search engine"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 469,
                        columnNumber: 653
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Test search functionality"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 469,
                                columnNumber: 841
                            }, this),
                            " - Verify everything works by searching on your local site"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 469,
                        columnNumber: 825
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 469,
                columnNumber: 395
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "contribution-workflow",
                children: "Contribution Workflow"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 469,
                columnNumber: 1019
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Steps"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                        id: "initial-setup",
                        children: "Initial Setup"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 469,
                        columnNumber: 1117
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Fork the Repository on GitHub"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 469,
                            columnNumber: 1201
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 469,
                        columnNumber: 1186
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: [
                                    "Go to the main project repository (",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: "github.com/bettergovph/bettergov"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 469,
                                        columnNumber: 1368
                                    }, this),
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 469,
                                columnNumber: 1313
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: [
                                    "Click the ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                        children: "\"Fork\""
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 469,
                                        columnNumber: 1499
                                    }, this),
                                    " button to create a copy under your GitHub account"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 469,
                                columnNumber: 1469
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 469,
                        columnNumber: 1291
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Clone the Forked Repository to Local Machine"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 469,
                            columnNumber: 1661
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 469,
                        columnNumber: 1646
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                            className: "shiki shiki-themes github-light github-dark",
                            style: {
                                "--shiki-light": "#24292e",
                                "--shiki-dark": "#e1e4e8",
                                "--shiki-light-bg": "#fff",
                                "--shiki-dark-bg": "#24292e"
                            },
                            tabIndex: "0",
                            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 474,
                                                columnNumber: 480
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " clone"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 477,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " https://github.com/"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 480,
                                                columnNumber: 35
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#D73A49",
                                                    "--shiki-dark": "#F97583"
                                                },
                                                children: "<"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 483,
                                                columnNumber: 49
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: "your-usernam"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 486,
                                                columnNumber: 30
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#24292E",
                                                    "--shiki-dark": "#E1E4E8"
                                                },
                                                children: "e"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 489,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#D73A49",
                                                    "--shiki-dark": "#F97583"
                                                },
                                                children: ">"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 492,
                                                columnNumber: 30
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: "/bettergov.git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 495,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 474,
                                        columnNumber: 445
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#005CC5",
                                                    "--shiki-dark": "#79B8FF"
                                                },
                                                children: "cd"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 498,
                                                columnNumber: 103
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " bettergov"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 501,
                                                columnNumber: 31
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 498,
                                        columnNumber: 68
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 474,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 469,
                            columnNumber: 1768
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Add the Original Repository as an Upstream"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 504,
                            columnNumber: 113
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 504,
                        columnNumber: 98
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                            className: "shiki shiki-themes github-light github-dark",
                            style: {
                                "--shiki-light": "#24292e",
                                "--shiki-dark": "#e1e4e8",
                                "--shiki-light-bg": "#fff",
                                "--shiki-dark-bg": "#24292e"
                            },
                            tabIndex: "0",
                            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    className: "line",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#6F42C1",
                                                "--shiki-dark": "#B392F0"
                                            },
                                            children: "git"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 509,
                                            columnNumber: 480
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#032F62",
                                                "--shiki-dark": "#9ECBFF"
                                            },
                                            children: " remote"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 512,
                                            columnNumber: 32
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#032F62",
                                                "--shiki-dark": "#9ECBFF"
                                            },
                                            children: " add"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 515,
                                            columnNumber: 36
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#032F62",
                                                "--shiki-dark": "#9ECBFF"
                                            },
                                            children: " upstream"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 518,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#032F62",
                                                "--shiki-dark": "#9ECBFF"
                                            },
                                            children: " https://github.com/bettergovph/bettergov.git"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 521,
                                            columnNumber: 38
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 509,
                                    columnNumber: 445
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 509,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 504,
                            columnNumber: 218
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                        id: "branch-creation",
                        children: "Branch Creation"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 524,
                        columnNumber: 133
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Update local main before creating a new branch"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 524,
                            columnNumber: 221
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 524,
                        columnNumber: 206
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                            className: "shiki shiki-themes github-light github-dark",
                            style: {
                                "--shiki-light": "#24292e",
                                "--shiki-dark": "#e1e4e8",
                                "--shiki-light-bg": "#fff",
                                "--shiki-dark-bg": "#24292e"
                            },
                            tabIndex: "0",
                            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 529,
                                                columnNumber: 480
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 532,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " main"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 535,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 529,
                                        columnNumber: 445
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 538,
                                                columnNumber: 94
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " fetch"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 541,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " upstream"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 544,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 538,
                                        columnNumber: 59
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 547,
                                                columnNumber: 98
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " merge"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 550,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " upstream/main"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 553,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 547,
                                        columnNumber: 63
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 556,
                                                columnNumber: 103
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " push"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 559,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " origin"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 562,
                                                columnNumber: 34
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " main"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 565,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 556,
                                        columnNumber: 68
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 529,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 524,
                            columnNumber: 330
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Create a New Feature Branch"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 568,
                            columnNumber: 108
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 568,
                        columnNumber: 93
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: "Use a prefix-based convention for clarity:"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 568,
                        columnNumber: 196
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Format:"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 568,
                            columnNumber: 288
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 568,
                        columnNumber: 273
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                            className: "shiki shiki-themes github-light github-dark",
                            style: {
                                "--shiki-light": "#24292e",
                                "--shiki-dark": "#e1e4e8",
                                "--shiki-light-bg": "#fff",
                                "--shiki-dark-bg": "#24292e"
                            },
                            tabIndex: "0",
                            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    className: "line",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        children: "<prefix>/<short-description>"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 573,
                                        columnNumber: 584
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 573,
                                    columnNumber: 549
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 573,
                                columnNumber: 531
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 568,
                            columnNumber: 358
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Examples:"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 573,
                            columnNumber: 727
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 573,
                        columnNumber: 712
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                    children: "feature/add-login-form"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 573,
                                    columnNumber: 835
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 573,
                                columnNumber: 819
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                    children: "fix/navbar-responsive-issue"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 573,
                                    columnNumber: 937
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 573,
                                columnNumber: 921
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                    children: "docs/add-contributing-and-code-of-conduct"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 573,
                                    columnNumber: 1044
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 573,
                                columnNumber: 1028
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 573,
                        columnNumber: 797
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                        type: "info",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                            children: "Keep branch names short, descriptive, and kebab-case."
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 573,
                            columnNumber: 1187
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 573,
                        columnNumber: 1166
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                        id: "development-loop",
                        children: "Development Loop"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 573,
                        columnNumber: 1285
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Make Changes"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 573,
                            columnNumber: 1375
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 573,
                        columnNumber: 1360
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: "Make sure your code passes linting and tests before committing."
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 573,
                        columnNumber: 1448
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                            className: "shiki shiki-themes github-light github-dark",
                            style: {
                                "--shiki-light": "#24292e",
                                "--shiki-dark": "#e1e4e8",
                                "--shiki-light-bg": "#fff",
                                "--shiki-dark-bg": "#24292e"
                            },
                            tabIndex: "0",
                            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 578,
                                                columnNumber: 480
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " add"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 581,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " ."
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 584,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 578,
                                        columnNumber: 445
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 587,
                                                columnNumber: 91
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " commit"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 590,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#005CC5",
                                                    "--shiki-dark": "#79B8FF"
                                                },
                                                children: " -a"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 593,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 587,
                                        columnNumber: 56
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 578,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 573,
                            columnNumber: 1548
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Commit Messages"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 596,
                            columnNumber: 106
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 596,
                        columnNumber: 91
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "We follow ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://www.conventionalcommits.org/",
                                children: "Conventional Commits"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 596,
                                columnNumber: 211
                            }, this),
                            " for all commit messages."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 596,
                        columnNumber: 182
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Format:"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 596,
                            columnNumber: 370
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 596,
                        columnNumber: 355
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                            className: "shiki shiki-themes github-light github-dark",
                            style: {
                                "--shiki-light": "#24292e",
                                "--shiki-dark": "#e1e4e8",
                                "--shiki-light-bg": "#fff",
                                "--shiki-dark-bg": "#24292e"
                            },
                            tabIndex: "0",
                            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    className: "line",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        children: "<type>[optional scope]: <short description>"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 601,
                                        columnNumber: 584
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 601,
                                    columnNumber: 549
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 601,
                                columnNumber: 531
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 596,
                            columnNumber: 440
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Common Types Used:"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 601,
                            columnNumber: 742
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 601,
                        columnNumber: 727
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: "feat:"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 601,
                                        columnNumber: 859
                                    }, this),
                                    " → A new feature"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 601,
                                columnNumber: 843
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: "fix:"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 601,
                                        columnNumber: 964
                                    }, this),
                                    " → A bug fix"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 601,
                                columnNumber: 948
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: "docs:"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 601,
                                        columnNumber: 1064
                                    }, this),
                                    " → Documentation only changes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 601,
                                columnNumber: 1048
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: "style:"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 601,
                                        columnNumber: 1182
                                    }, this),
                                    " → Code style or formatting changes (no logic)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 601,
                                columnNumber: 1166
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: "refactor:"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 601,
                                        columnNumber: 1318
                                    }, this),
                                    " → Code refactoring (no feature or fix)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 601,
                                columnNumber: 1302
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: "test:"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 601,
                                        columnNumber: 1450
                                    }, this),
                                    " → Adding or updating tests"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 601,
                                columnNumber: 1434
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                        children: "chore:"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 601,
                                        columnNumber: 1566
                                    }, this),
                                    " → Maintenance tasks (build process, dependencies, etc.)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 601,
                                columnNumber: 1550
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 601,
                        columnNumber: 821
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Examples:"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 601,
                            columnNumber: 1728
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 601,
                        columnNumber: 1713
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                            className: "shiki shiki-themes github-light github-dark",
                            style: {
                                "--shiki-light": "#24292e",
                                "--shiki-dark": "#e1e4e8",
                                "--shiki-light-bg": "#fff",
                                "--shiki-dark-bg": "#24292e"
                            },
                            tabIndex: "0",
                            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "feat(button"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 606,
                                                columnNumber: 480
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#24292E",
                                                    "--shiki-dark": "#E1E4E8"
                                                },
                                                children: "): add primary button variant"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 609,
                                                columnNumber: 40
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 606,
                                        columnNumber: 445
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "fix(navbar"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 612,
                                                columnNumber: 118
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#24292E",
                                                    "--shiki-dark": "#E1E4E8"
                                                },
                                                children: "): correct mobile menu toggle"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 615,
                                                columnNumber: 39
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 612,
                                        columnNumber: 83
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "docs:"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 618,
                                                columnNumber: 118
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " add"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 621,
                                                columnNumber: 34
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " CONTRIBUTING.md"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 624,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " and"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 627,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " CODE_OF_CONDUCT.md"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 630,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 618,
                                        columnNumber: 83
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 606,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 601,
                            columnNumber: 1800
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Push to the Forked Repository"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 633,
                            columnNumber: 122
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 633,
                        columnNumber: 107
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                            className: "shiki shiki-themes github-light github-dark",
                            style: {
                                "--shiki-light": "#24292e",
                                "--shiki-dark": "#e1e4e8",
                                "--shiki-light-bg": "#fff",
                                "--shiki-dark-bg": "#24292e"
                            },
                            tabIndex: "0",
                            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    className: "line",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#6F42C1",
                                                "--shiki-dark": "#B392F0"
                                            },
                                            children: "git"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 638,
                                            columnNumber: 480
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#032F62",
                                                "--shiki-dark": "#9ECBFF"
                                            },
                                            children: " push"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 641,
                                            columnNumber: 32
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#005CC5",
                                                "--shiki-dark": "#79B8FF"
                                            },
                                            children: " -u"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 644,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#032F62",
                                                "--shiki-dark": "#9ECBFF"
                                            },
                                            children: " origin"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 647,
                                            columnNumber: 32
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#032F62",
                                                "--shiki-dark": "#9ECBFF"
                                            },
                                            children: " feat/add-new-component"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 650,
                                            columnNumber: 36
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 638,
                                    columnNumber: 445
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 638,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 633,
                            columnNumber: 214
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Sync with Upstream Again"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 653,
                            columnNumber: 126
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 653,
                        columnNumber: 111
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "If the upstream ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "main"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 653,
                                columnNumber: 246
                            }, this),
                            " branch has been updated while working, integrate changes into your feature branch to avoid conflicts:"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 653,
                        columnNumber: 211
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                            className: "shiki shiki-themes github-light github-dark",
                            style: {
                                "--shiki-light": "#24292e",
                                "--shiki-dark": "#e1e4e8",
                                "--shiki-light-bg": "#fff",
                                "--shiki-dark-bg": "#24292e"
                            },
                            tabIndex: "0",
                            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 658,
                                                columnNumber: 480
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " fetch"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 661,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " upstream"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 664,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 658,
                                        columnNumber: 445
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 667,
                                                columnNumber: 98
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " rebase"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 670,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " upstream/main"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 673,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 667,
                                        columnNumber: 63
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 676,
                                                columnNumber: 103
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " push"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 679,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 676,
                                        columnNumber: 68
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 658,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 653,
                            columnNumber: 415
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                        id: "pull-requests",
                        children: "Pull Requests"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 682,
                        columnNumber: 93
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: "We use Pull Requests (PRs) to review and merge changes:"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 682,
                        columnNumber: 162
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Open a Pull Request to the main repository:"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 682,
                            columnNumber: 267
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 682,
                        columnNumber: 252
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: "Target the main branch (or the branch specified by maintainers)"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 682,
                                columnNumber: 393
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: "Provide a clear title and detailed description of your changes"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 682,
                                columnNumber: 499
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: "Reference any related issues (e.g., \"Closes #12\")"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 682,
                                columnNumber: 604
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                        children: "AI-Assisted Work Disclosure:"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 682,
                                        columnNumber: 714
                                    }, this),
                                    " If you used AI tools to help generate or significantly modify code in your PR, please disclose this in the PR description"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 682,
                                columnNumber: 698
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 682,
                        columnNumber: 371
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "Wait for review:"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 682,
                            columnNumber: 968
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 682,
                        columnNumber: 953
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                        children: [
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: "Maintain open communication with reviewers"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 682,
                                columnNumber: 1067
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: "Make any requested changes by committing in local feature branch"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 682,
                                columnNumber: 1152
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                                children: "After making changes, commit and push to the same branch—the PR will update automatically"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 682,
                                columnNumber: 1259
                            }, this),
                            "\n"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 682,
                        columnNumber: 1045
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.pre, {
                            className: "shiki shiki-themes github-light github-dark",
                            style: {
                                "--shiki-light": "#24292e",
                                "--shiki-dark": "#e1e4e8",
                                "--shiki-light-bg": "#fff",
                                "--shiki-dark-bg": "#24292e"
                            },
                            tabIndex: "0",
                            icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 687,
                                                columnNumber: 480
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " add"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 690,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " ."
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 693,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 687,
                                        columnNumber: 445
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 696,
                                                columnNumber: 91
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " commit"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 699,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#005CC5",
                                                    "--shiki-dark": "#79B8FF"
                                                },
                                                children: " -m"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 702,
                                                columnNumber: 36
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " \"refactor: address review feedback\""
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 705,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 696,
                                        columnNumber: 56
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#6F42C1",
                                                    "--shiki-dark": "#B392F0"
                                                },
                                                children: "git"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 708,
                                                columnNumber: 127
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " push"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 711,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 708,
                                        columnNumber: 92
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 687,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 682,
                            columnNumber: 1410
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                            children: "A maintainer will merge your PR once it's approved."
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 714,
                            columnNumber: 108
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 714,
                        columnNumber: 93
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 469,
                columnNumber: 1110
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "resources",
                children: "Resources"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 714,
                columnNumber: 234
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                            href: "https://www.thegooddocsproject.dev/template/contributing-guide",
                            children: "The Good Docs Project Contributing Guide"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 714,
                            columnNumber: 339
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 714,
                        columnNumber: 323
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                            href: "https://www.conventionalcommits.org/en/v1.0.0/",
                            children: "Conventional Commits"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 714,
                            columnNumber: 523
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 714,
                        columnNumber: 507
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                            href: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo",
                            children: "GitHub Fork Guide"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 714,
                            columnNumber: 671
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 714,
                        columnNumber: 655
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 714,
                columnNumber: 301
            }, this)
        ]
    }, void 0, true);
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MDXLayout, {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_createMdxContent, {
            ...props
        }, void 0, false, {
            fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
            lineNumber: 718,
            columnNumber: 44
        }, this)
    }, void 0, false, {
        fileName: "[project]/content/docs/contributing/index.mdx.js?collection=docs&hash=1759350457685",
        lineNumber: 718,
        columnNumber: 22
    }, this) : _createMdxContent(props);
}
}),
"[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685 [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*@jsxRuntime automatic*/ /*@jsxImportSource react*/ __turbopack_context__.s([
    "default",
    ()=>MDXContent,
    "extractedReferences",
    ()=>extractedReferences,
    "frontmatter",
    ()=>frontmatter,
    "structuredData",
    ()=>structuredData,
    "toc",
    ()=>toc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
let frontmatter = {
    "title": "Code of Conduct",
    "description": "Community guidelines and expectations for BetterGov.ph contributors"
};
let extractedReferences = [
    {
        "href": "mailto:volunteers@bettergov.ph"
    },
    {
        "href": "https://discord.gg/mHtThpN8bT"
    },
    {
        "href": "https://www.contributor-covenant.org/version/3/0/"
    },
    {
        "href": "https://creativecommons.org/licenses/by-sa/4.0/"
    },
    {
        "href": "https://www.contributor-covenant.org/faq"
    },
    {
        "href": "https://www.contributor-covenant.org/translations"
    },
    {
        "href": "https://www.contributor-covenant.org/resources"
    },
    {
        "href": "https://github.com/mozilla/inclusion"
    }
];
let structuredData = {
    "contents": [
        {
            "heading": "our-pledge",
            "content": "We pledge to make our community welcoming, safe, and equitable for all."
        },
        {
            "heading": "our-pledge",
            "content": "We are committed to fostering an environment that respects and promotes the dignity, rights, and contributions of all individuals, regardless of characteristics including race, ethnicity, caste, color, age, physical characteristics, neurodiversity, disability, sex or gender, gender identity or expression, sexual orientation, language, philosophy or religion, national or social origin, socio-economic position, level of education, or other status. The same privileges of participation are extended to everyone who participates in good faith and in accordance with this Covenant."
        },
        {
            "heading": "encouraged-behaviors",
            "content": "While acknowledging differences in social norms, we all strive to meet our community's expectations for positive behavior. We also understand that our words and actions may be interpreted differently than we intend based on culture, background, or native language."
        },
        {
            "heading": "encouraged-behaviors",
            "content": "With these considerations in mind, we agree to behave mindfully toward each other and act in ways that center our shared values, including:"
        },
        {
            "heading": "encouraged-behaviors",
            "content": "Respecting the purpose of our community, our activities, and our ways of gathering."
        },
        {
            "heading": "encouraged-behaviors",
            "content": "Engaging kindly and honestly with others."
        },
        {
            "heading": "encouraged-behaviors",
            "content": "Respecting different viewpoints and experiences."
        },
        {
            "heading": "encouraged-behaviors",
            "content": "Taking responsibility for our actions and contributions."
        },
        {
            "heading": "encouraged-behaviors",
            "content": "Gracefully giving and accepting constructive feedback."
        },
        {
            "heading": "encouraged-behaviors",
            "content": "Committing to repairing harm when it occurs."
        },
        {
            "heading": "encouraged-behaviors",
            "content": "Behaving in other ways that promote and sustain the well-being of our community."
        },
        {
            "heading": "restricted-behaviors",
            "content": "We agree to restrict the following behaviors in our community. Instances, threats, and promotion of these behaviors are violations of this Code of Conduct."
        },
        {
            "heading": "restricted-behaviors",
            "content": "Harassment. Violating explicitly expressed boundaries or engaging in unnecessary personal attention after any clear request to stop."
        },
        {
            "heading": "restricted-behaviors",
            "content": "Character attacks. Making insulting, demeaning, or pejorative comments directed at a community member or group of people."
        },
        {
            "heading": "restricted-behaviors",
            "content": "Stereotyping or discrimination. Characterizing anyone's personality or behavior on the basis of immutable identities or traits."
        },
        {
            "heading": "restricted-behaviors",
            "content": "Sexualization. Behaving in a way that would generally be considered inappropriately intimate in the context or purpose of the community."
        },
        {
            "heading": "restricted-behaviors",
            "content": "Violating confidentiality. Sharing or acting on someone's personal or private information without their permission."
        },
        {
            "heading": "restricted-behaviors",
            "content": "Endangerment. Causing, encouraging, or threatening violence or other harm toward any person or group."
        },
        {
            "heading": "restricted-behaviors",
            "content": "Behaving in other ways that threaten the well-being of our community."
        },
        {
            "heading": "other-restrictions",
            "content": "Misleading identity. Impersonating someone else for any reason, or pretending to be someone else to evade enforcement actions."
        },
        {
            "heading": "other-restrictions",
            "content": "Failing to credit sources. Not properly crediting the sources of content you contribute."
        },
        {
            "heading": "other-restrictions",
            "content": "Promotional materials. Sharing marketing or other commercial content in a way that is outside the norms of the community."
        },
        {
            "heading": "other-restrictions",
            "content": "Irresponsible communication. Failing to responsibly present content which includes, links or describes any other restricted behaviors."
        },
        {
            "heading": "reporting-an-issue",
            "content": "Tensions can occur between community members even when they are trying their best to collaborate. Not every conflict represents a code of conduct violation, and this Code of Conduct reinforces encouraged behaviors and norms that can help avoid conflicts and minimize harm."
        },
        {
            "heading": "reporting-an-issue",
            "content": "When an incident occurs, it is important to report it promptly. To report a possible violation of the Code of Conduct, you may contact us by email at volunteers@bettergov.ph or reach out directly to a moderator on our Discord server."
        },
        {
            "heading": "reporting-an-issue",
            "content": "Community Moderators take reports of violations seriously and will make every effort to respond in a timely manner. They will investigate all reports of code of conduct violations, reviewing messages, logs, and recordings, or interviewing witnesses and other participants. Community Moderators will keep investigation and enforcement actions as transparent as possible while prioritizing safety and confidentiality. In order to honor these values, enforcement actions are carried out in private with the involved parties, but communicating to the whole community may be part of a mutually agreed upon resolution."
        },
        {
            "heading": "addressing-and-repairing-harm",
            "content": "If an investigation by the Community Moderators finds that this Code of Conduct has been violated, the following enforcement ladder may be used to determine how best to repair harm, based on the incident's impact on the individuals involved and the community as a whole. Depending on the severity of a violation, lower rungs on the ladder may be skipped."
        },
        {
            "heading": "1-warning",
            "content": "Event: A violation involving a single incident or series of incidents."
        },
        {
            "heading": "1-warning",
            "content": "Consequence: A private, written warning from the Community Moderators."
        },
        {
            "heading": "1-warning",
            "content": "Repair: Examples of repair include a private written apology, acknowledgement of responsibility, and seeking clarification on expectations."
        },
        {
            "heading": "2-temporarily-limited-activities",
            "content": "Event: A repeated incidence of a violation that previously resulted in a warning, or the first incidence of a more serious violation."
        },
        {
            "heading": "2-temporarily-limited-activities",
            "content": "Consequence: A private, written warning with a time-limited cooldown period designed to underscore the seriousness of the situation and give the community members involved time to process the incident. The cooldown period may be limited to particular communication channels or interactions with particular community members."
        },
        {
            "heading": "2-temporarily-limited-activities",
            "content": "Repair: Examples of repair may include making an apology, using the cooldown period to reflect on actions and impact, and being thoughtful about re-entering community spaces after the period is over."
        },
        {
            "heading": "3-temporary-suspension",
            "content": "Event: A pattern of repeated violation which the Community Moderators have tried to address with warnings, or a single serious violation."
        },
        {
            "heading": "3-temporary-suspension",
            "content": "Consequence: A private written warning with conditions for return from suspension. In general, temporary suspensions give the person being suspended time to reflect upon their behavior and possible corrective actions."
        },
        {
            "heading": "3-temporary-suspension",
            "content": "Repair: Examples of repair include respecting the spirit of the suspension, meeting the specified conditions for return, and being thoughtful about how to reintegrate with the community when the suspension is lifted."
        },
        {
            "heading": "4-permanent-ban",
            "content": "Event: A pattern of repeated code of conduct violations that other steps on the ladder have failed to resolve, or a violation so serious that the Community Moderators determine there is no way to keep the community safe with this person as a member."
        },
        {
            "heading": "4-permanent-ban",
            "content": "Consequence: Access to all community spaces, tools, and communication channels is removed. In general, permanent bans should be rarely used, should have strong reasoning behind them, and should only be resorted to if working through other remedies has failed to change the behavior."
        },
        {
            "heading": "4-permanent-ban",
            "content": "Repair: There is no possible repair in cases of this severity."
        },
        {
            "heading": "4-permanent-ban",
            "content": "This enforcement ladder is intended as a guideline. It does not limit the ability of Community Managers to use their discretion and judgment, in keeping with the best interests of our community."
        },
        {
            "heading": "scope",
            "content": "This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public or other spaces. Examples of representing our community include using an official email address, posting via an official social media account, or acting as an appointed representative at an online or offline event."
        },
        {
            "heading": "attribution",
            "content": "This Code of Conduct is adapted from the Contributor Covenant, version 3.0, permanently available at https://www.contributor-covenant.org/version/3/0/."
        },
        {
            "heading": "attribution",
            "content": "Contributor Covenant is stewarded by the Organization for Ethical Source and licensed under CC BY-SA 4.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-sa/4.0/"
        },
        {
            "heading": "attribution",
            "content": "For answers to common questions about Contributor Covenant, see the FAQ at https://www.contributor-covenant.org/faq. Translations are provided at https://www.contributor-covenant.org/translations. Additional enforcement and community guideline resources can be found at https://www.contributor-covenant.org/resources. The enforcement ladder was inspired by the work of Mozilla's code of conduct team."
        }
    ],
    "headings": [
        {
            "id": "our-pledge",
            "content": "Our Pledge"
        },
        {
            "id": "encouraged-behaviors",
            "content": "Encouraged Behaviors"
        },
        {
            "id": "restricted-behaviors",
            "content": "Restricted Behaviors"
        },
        {
            "id": "other-restrictions",
            "content": "Other Restrictions"
        },
        {
            "id": "reporting-an-issue",
            "content": "Reporting an Issue"
        },
        {
            "id": "addressing-and-repairing-harm",
            "content": "Addressing and Repairing Harm"
        },
        {
            "id": "1-warning",
            "content": "1. Warning"
        },
        {
            "id": "2-temporarily-limited-activities",
            "content": "2. Temporarily Limited Activities"
        },
        {
            "id": "3-temporary-suspension",
            "content": "3. Temporary Suspension"
        },
        {
            "id": "4-permanent-ban",
            "content": "4. Permanent Ban"
        },
        {
            "id": "scope",
            "content": "Scope"
        },
        {
            "id": "attribution",
            "content": "Attribution"
        }
    ]
};
const toc = [
    {
        depth: 2,
        url: "#our-pledge",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Our Pledge"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#encouraged-behaviors",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Encouraged Behaviors"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#restricted-behaviors",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Restricted Behaviors"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#other-restrictions",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Other Restrictions"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#reporting-an-issue",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Reporting an Issue"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#addressing-and-repairing-harm",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Addressing and Repairing Harm"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#1-warning",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "1. Warning"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#2-temporarily-limited-activities",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "2. Temporarily Limited Activities"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#3-temporary-suspension",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "3. Temporary Suspension"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#4-permanent-ban",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "4. Permanent Ban"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#scope",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Scope"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#attribution",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Attribution"
        }, void 0, false)
    }
];
function _createMdxContent(props) {
    const _components = {
        a: "a",
        h2: "h2",
        h3: "h3",
        li: "li",
        ol: "ol",
        p: "p",
        strong: "strong",
        ul: "ul",
        ...props.components
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "our-pledge",
                children: "Our Pledge"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "We pledge to make our community welcoming, safe, and equitable for all."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 81
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "We are committed to fostering an environment that respects and promotes the dignity, rights, and contributions of all individuals, regardless of characteristics including race, ethnicity, caste, color, age, physical characteristics, neurodiversity, disability, sex or gender, gender identity or expression, sexual orientation, language, philosophy or religion, national or social origin, socio-economic position, level of education, or other status. The same privileges of participation are extended to everyone who participates in good faith and in accordance with this Covenant."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 193
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "encouraged-behaviors",
                children: "Encouraged Behaviors"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 814
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "While acknowledging differences in social norms, we all strive to meet our community's expectations for positive behavior. We also understand that our words and actions may be interpreted differently than we intend based on culture, background, or native language."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 903
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "With these considerations in mind, we agree to behave mindfully toward each other and act in ways that center our shared values, including:"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 1208
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Respecting the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "purpose of our community"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 1445
                            }, this),
                            ", our activities, and our ways of gathering."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 1410
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Engaging ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "kindly and honestly"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 1614
                            }, this),
                            " with others."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 1585
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Respecting ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "different viewpoints"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 1749
                            }, this),
                            " and experiences."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 1718
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Taking responsibility"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 1874
                            }, this),
                            " for our actions and contributions."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 1858
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Gracefully giving and accepting ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "constructive feedback"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 2054
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 2002
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Committing to ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "repairing harm"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 2182
                            }, this),
                            " when it occurs."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 2148
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Behaving in other ways that promote and sustain the ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "well-being of our community"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 2356
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 2284
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 1388
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "restricted-behaviors",
                children: "Restricted Behaviors"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 2479
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "We agree to restrict the following behaviors in our community. Instances, threats, and promotion of these behaviors are violations of this Code of Conduct."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 2568
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Harassment."
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 2802
                            }, this),
                            " Violating explicitly expressed boundaries or engaging in unnecessary personal attention after any clear request to stop."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 2786
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Character attacks."
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 3022
                            }, this),
                            " Making insulting, demeaning, or pejorative comments directed at a community member or group of people."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 3006
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Stereotyping or discrimination."
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 3231
                            }, this),
                            " Characterizing anyone's personality or behavior on the basis of immutable identities or traits."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 3215
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Sexualization."
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 3446
                            }, this),
                            " Behaving in a way that would generally be considered inappropriately intimate in the context or purpose of the community."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 3430
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Violating confidentiality"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 3670
                            }, this),
                            ". Sharing or acting on someone's personal or private information without their permission."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 3654
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Endangerment."
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 3873
                            }, this),
                            " Causing, encouraging, or threatening violence or other harm toward any person or group."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 3857
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Behaving in other ways that ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "threaten the well-being"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 4094
                            }, this),
                            " of our community."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 4046
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 2764
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "other-restrictions",
                children: "Other Restrictions"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 4230
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Misleading identity."
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 4353
                            }, this),
                            " Impersonating someone else for any reason, or pretending to be someone else to evade enforcement actions."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 4337
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Failing to credit sources."
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 4567
                            }, this),
                            " Not properly crediting the sources of content you contribute."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 4551
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Promotional materials"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 4743
                            }, this),
                            ". Sharing marketing or other commercial content in a way that is outside the norms of the community."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 4727
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Irresponsible communication."
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 4952
                            }, this),
                            " Failing to responsibly present content which includes, links or describes any other restricted behaviors."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 4936
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 4315
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "reporting-an-issue",
                children: "Reporting an Issue"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 5181
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Tensions can occur between community members even when they are trying their best to collaborate. Not every conflict represents a code of conduct violation, and this Code of Conduct reinforces encouraged behaviors and norms that can help avoid conflicts and minimize harm."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 5266
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "When an incident occurs, it is important to report it promptly. To report a possible violation of the Code of Conduct, you may contact us by email at ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "mailto:volunteers@bettergov.ph",
                        children: "volunteers@bettergov.ph"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 5748
                    }, this),
                    " or reach out directly to a moderator on our ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://discord.gg/mHtThpN8bT",
                        children: "Discord"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 5893
                    }, this),
                    " server."
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 5579
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Community Moderators take reports of violations seriously and will make every effort to respond in a timely manner. They will investigate all reports of code of conduct violations, reviewing messages, logs, and recordings, or interviewing witnesses and other participants. Community Moderators will keep investigation and enforcement actions as transparent as possible while prioritizing safety and confidentiality. In order to honor these values, enforcement actions are carried out in private with the involved parties, but communicating to the whole community may be part of a mutually agreed upon resolution."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 6006
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "addressing-and-repairing-harm",
                children: "Addressing and Repairing Harm"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 6659
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "If an investigation by the Community Moderators finds that this Code of Conduct has been violated, the following enforcement ladder may be used to determine how best to repair harm, based on the incident's impact on the individuals involved and the community as a whole. Depending on the severity of a violation, lower rungs on the ladder may be skipped."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 6766
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "1-warning",
                children: "1. Warning"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 7161
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Event:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 7267
                            }, this),
                            " A violation involving a single incident or series of incidents."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 7251
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Consequence:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 7425
                            }, this),
                            " A private, written warning from the Community Moderators."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 7409
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Repair:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 7583
                            }, this),
                            " Examples of repair include a private written apology, acknowledgement of responsibility, and seeking clarification on expectations."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 7567
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 7229
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "2-temporarily-limited-activities",
                children: "2. Temporarily Limited Activities"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 7817
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Event:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 7969
                            }, this),
                            " A repeated incidence of a violation that previously resulted in a warning, or the first incidence of a more serious violation."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 7953
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Consequence:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 8190
                            }, this),
                            " A private, written warning with a time-limited cooldown period designed to underscore the seriousness of the situation and give the community members involved time to process the incident. The cooldown period may be limited to particular communication channels or interactions with particular community members."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 8174
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Repair:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 8602
                            }, this),
                            " Examples of repair may include making an apology, using the cooldown period to reflect on actions and impact, and being thoughtful about re-entering community spaces after the period is over."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 8586
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 7931
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "3-temporary-suspension",
                children: "3. Temporary Suspension"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 8896
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Event:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 9028
                            }, this),
                            " A pattern of repeated violation which the Community Moderators have tried to address with warnings, or a single serious violation."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 9012
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Consequence:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 9253
                            }, this),
                            " A private written warning with conditions for return from suspension. In general, temporary suspensions give the person being suspended time to reflect upon their behavior and possible corrective actions."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 9237
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Repair:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 9558
                            }, this),
                            " Examples of repair include respecting the spirit of the suspension, meeting the specified conditions for return, and being thoughtful about how to reintegrate with the community when the suspension is lifted."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 9542
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 8990
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "4-permanent-ban",
                children: "4. Permanent Ban"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 9869
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Event:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 9987
                            }, this),
                            " A pattern of repeated code of conduct violations that other steps on the ladder have failed to resolve, or a violation so serious that the Community Moderators determine there is no way to keep the community safe with this person as a member."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 9971
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Consequence:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 10324
                            }, this),
                            " Access to all community spaces, tools, and communication channels is removed. In general, permanent bans should be rarely used, should have strong reasoning behind them, and should only be resorted to if working through other remedies has failed to change the behavior."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 10308
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Repair:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 257,
                                columnNumber: 10694
                            }, this),
                            " There is no possible repair in cases of this severity."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 10678
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 9949
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "This enforcement ladder is intended as a guideline. It does not limit the ability of Community Managers to use their discretion and judgment, in keeping with the best interests of our community."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 10851
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "scope",
                children: "Scope"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 11086
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "This Code of Conduct applies within all community spaces, and also applies when an individual is officially representing the community in public or other spaces. Examples of representing our community include using an official email address, posting via an official social media account, or acting as an appointed representative at an online or offline event."
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 11145
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "attribution",
                children: "Attribution"
            }, void 0, false, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 11545
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "This Code of Conduct is adapted from the Contributor Covenant, version 3.0, permanently available at ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://www.contributor-covenant.org/version/3/0/",
                        children: "https://www.contributor-covenant.org/version/3/0/"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 11736
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 11616
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "Contributor Covenant is stewarded by the Organization for Ethical Source and licensed under CC BY-SA 4.0. To view a copy of this license, visit ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://creativecommons.org/licenses/by-sa/4.0/",
                        children: "https://creativecommons.org/licenses/by-sa/4.0/"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 12067
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 11904
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "For answers to common questions about Contributor Covenant, see the FAQ at ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://www.contributor-covenant.org/faq",
                        children: "https://www.contributor-covenant.org/faq"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 12320
                    }, this),
                    ". Translations are provided at ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://www.contributor-covenant.org/translations",
                        children: "https://www.contributor-covenant.org/translations"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 12478
                    }, this),
                    ". Additional enforcement and community guideline resources can be found at ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://www.contributor-covenant.org/resources",
                        children: "https://www.contributor-covenant.org/resources"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 12698
                    }, this),
                    ". The enforcement ladder was inspired by the work of ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://github.com/mozilla/inclusion",
                        children: "Mozilla's code of conduct team"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 257,
                        columnNumber: 12890
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 257,
                columnNumber: 12226
            }, this)
        ]
    }, void 0, true);
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MDXLayout, {
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_createMdxContent, {
            ...props
        }, void 0, false, {
            fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
            lineNumber: 261,
            columnNumber: 44
        }, this)
    }, void 0, false, {
        fileName: "[project]/content/docs/contributing/code-of-conduct.mdx.js?collection=docs&hash=1759350457685",
        lineNumber: 261,
        columnNumber: 22
    }, this) : _createMdxContent(props);
}
}),
];

//# sourceMappingURL=content_docs_contributing_8b3c6f8d._.js.map