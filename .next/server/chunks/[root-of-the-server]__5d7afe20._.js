module.exports = [
"[project]/.next-internal/server/app/api/search/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/search/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// Static search data - this should match your actual pages
const searchIndex = [
    {
        id: '/docs',
        title: 'Documentation',
        content: 'BetterGov Documentation - Comprehensive documentation for BetterGov.ph',
        url: '/docs'
    },
    {
        id: '/docs/about',
        title: 'About',
        content: 'About BetterGov - Learn about our mission and goals',
        url: '/docs/about'
    },
    {
        id: '/docs/meilisearch',
        title: 'Meilisearch',
        content: 'Meilisearch integration - Search functionality for BetterGov',
        url: '/docs/meilisearch'
    },
    {
        id: '/docs/getting-started',
        title: 'Getting Started',
        content: 'Get started with BetterGov - Quick start guide',
        url: '/docs/getting-started'
    },
    {
        id: '/docs/getting-started/installation',
        title: 'Installation',
        content: 'Installation guide - How to install and set up BetterGov',
        url: '/docs/getting-started/installation'
    },
    {
        id: '/docs/contributing',
        title: 'Contributing',
        content: 'Contributing to BetterGov - How to contribute to the project',
        url: '/docs/contributing'
    },
    {
        id: '/docs/contributing/testing',
        title: 'Testing',
        content: 'Testing guidelines - How to test your contributions',
        url: '/docs/contributing/testing'
    },
    {
        id: '/docs/contributing/code-of-conduct',
        title: 'Code of Conduct',
        content: 'Community guidelines - Our code of conduct and community standards',
        url: '/docs/contributing/code-of-conduct'
    }
];
async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query')?.toLowerCase() || '';
    if (!query) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json([]);
    }
    const results = searchIndex.filter((item)=>{
        const title = item.title.toLowerCase();
        const content = item.content.toLowerCase();
        return title.includes(query) || content.includes(query);
    }).map((item)=>({
            id: item.id,
            type: 'page',
            content: item.title,
            url: item.url
        })).slice(0, 10);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(results);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5d7afe20._.js.map