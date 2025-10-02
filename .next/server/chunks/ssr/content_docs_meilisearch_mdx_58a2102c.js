module.exports = [
"[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685 [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/tabs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/callout.js [app-rsc] (ecmascript)");
;
let frontmatter = {
    "title": "Meilisearch Setup",
    "description": "Set up Meilisearch for BetterGov's search functionality"
};
let extractedReferences = [
    {
        "href": "#getting-started-with-meilisearch"
    },
    {
        "href": "#working-with-data"
    },
    {
        "href": "#building-the-site"
    },
    {
        "href": "#managing-contractors"
    },
    {
        "href": "#flood-control-projects"
    },
    {
        "href": "http://localhost:5173"
    },
    {
        "href": "https://www.perplexity.ai/settings/api"
    },
    {
        "href": "https://www.meilisearch.com/docs"
    },
    {
        "href": "https://github.com/meilisearch/meilisearch-js"
    },
    {
        "href": "/docs/contributing"
    },
    {
        "href": "https://github.com/bettergovph/bettergov/issues"
    },
    {
        "href": "https://discord.gg/mHtThpN8bT"
    }
];
let structuredData = {
    "contents": [
        {
            "heading": undefined,
            "content": "This guide covers setting up Meilisearch for BetterGov's search functionality and documents all the data processing scripts."
        },
        {
            "heading": "whats-inside",
            "content": "Getting Started with Meilisearch - Set up search for your local development"
        },
        {
            "heading": "whats-inside",
            "content": "Working with Data - Process and manage government data"
        },
        {
            "heading": "whats-inside",
            "content": "Building the Site - Generate sitemaps and metadata"
        },
        {
            "heading": "whats-inside",
            "content": "Managing Contractors - Handle contractor profile data"
        },
        {
            "heading": "whats-inside",
            "content": "Flood Control Projects - Work with flood control data"
        },
        {
            "heading": "getting-started-with-meilisearch",
            "content": "Think of Meilisearch as the brain behind BetterGov's search feature. It helps users quickly find government services, offices, and information they need."
        },
        {
            "heading": "what-youll-need",
            "content": "Before we begin, make sure you have these ready:"
        },
        {
            "heading": "what-youll-need",
            "content": "Node.js version 22 or newer (check with node --version)"
        },
        {
            "heading": "what-youll-need",
            "content": "A text editor to update configuration files"
        },
        {
            "heading": "what-youll-need",
            "content": "Terminal access to run commands"
        },
        {
            "heading": "what-youll-need",
            "content": "About 10 minutes for the initial setup"
        },
        {
            "heading": "install-meilisearch",
            "content": "Using Homebrew:"
        },
        {
            "heading": "install-meilisearch",
            "content": "Or download directly:"
        },
        {
            "heading": "install-meilisearch",
            "content": "Using PowerShell (run as Administrator):"
        },
        {
            "heading": "install-meilisearch",
            "content": "Or use Windows Subsystem for Linux (WSL):"
        },
        {
            "heading": "install-meilisearch",
            "content": "Ubuntu/Debian:"
        },
        {
            "heading": "install-meilisearch",
            "content": "Fedora/CentOS/RHEL:"
        },
        {
            "heading": "set-up-configuration",
            "content": "Create a .env file in the project root:"
        },
        {
            "heading": "set-up-configuration",
            "content": "type: info"
        },
        {
            "heading": "set-up-configuration",
            "content": "The master key can be any value you choose - it's like your admin password. The search key is read-only, perfect for the frontend."
        },
        {
            "heading": "populate-initial-data",
            "content": "Before generating keys, populate Meilisearch with data:"
        },
        {
            "heading": "generate-search-key",
            "content": "Create a search key for the website:"
        },
        {
            "heading": "generate-search-key",
            "content": "Copy the generated key and update your .env file:"
        },
        {
            "heading": "verify-everything-works",
            "content": "Start your development server and test search:"
        },
        {
            "heading": "verify-everything-works",
            "content": "Visit http://localhost:5173 and try searching for government services."
        },
        {
            "heading": "quick-setup-all-indexes",
            "content": "Load all indexes at once:"
        },
        {
            "heading": "quick-setup-all-indexes",
            "content": "This runs:"
        },
        {
            "heading": "quick-setup-all-indexes",
            "content": "npm run index:meilisearch - Main government data"
        },
        {
            "heading": "quick-setup-all-indexes",
            "content": "npm run index:flood-control:arcgis - Flood control projects"
        },
        {
            "heading": "quick-setup-all-indexes",
            "content": "npm run index:contractor-profiles - Contractor profiles"
        },
        {
            "heading": "individual-indexes",
            "content": "Main Government Data:"
        },
        {
            "heading": "individual-indexes",
            "content": "Flood Control Projects:"
        },
        {
            "heading": "individual-indexes",
            "content": "Contractor Information:"
        },
        {
            "heading": "working-with-data",
            "content": "Data processing scripts:"
        },
        {
            "heading": "working-with-data",
            "content": "URL and Navigation:"
        },
        {
            "heading": "working-with-data",
            "content": "add-directory-slugs.js - Creates clean URLs for directory pages"
        },
        {
            "heading": "working-with-data",
            "content": "add-lgu-slugs.js - Creates URLs for Local Government Unit pages"
        },
        {
            "heading": "working-with-data",
            "content": "Data Organization:"
        },
        {
            "heading": "working-with-data",
            "content": "extract-regions.js - Organizes data by Philippine regions"
        },
        {
            "heading": "working-with-data",
            "content": "extract-websites.js - Collects official government website URLs"
        },
        {
            "heading": "working-with-data",
            "content": "flatten-contacts.js - Makes contact info searchable"
        },
        {
            "heading": "working-with-data",
            "content": "split-lgu.cjs - Breaks up large LGU files for faster loading"
        },
        {
            "heading": "working-with-data",
            "content": "split-services.js - Organizes services by category"
        },
        {
            "heading": "working-with-data",
            "content": "fetch-hrep.js - Gets House of Representatives member data"
        },
        {
            "heading": "building-the-site",
            "content": "Generate files for search engines and AI assistants:"
        },
        {
            "heading": "managing-contractors",
            "content": "Update contractor information (run in order):"
        },
        {
            "heading": "managing-contractors",
            "content": "Download data: npm run fetch:contractor-profiles (requires PERPLEXITY_API_KEY)"
        },
        {
            "heading": "managing-contractors",
            "content": "Clean data: npm run process:unique-contractors (also requires PERPLEXITY_API_KEY)"
        },
        {
            "heading": "managing-contractors",
            "content": "Index data: npm run index:contractor-profiles"
        },
        {
            "heading": "managing-contractors",
            "content": "Get your Perplexity API key at Perplexity AI Settings."
        },
        {
            "heading": "flood-control-projects",
            "content": "Two ways to manage flood control data:"
        },
        {
            "heading": "flood-control-projects",
            "content": "From Local Files:"
        },
        {
            "heading": "flood-control-projects",
            "content": "index_flood_control.cjs - Uses JSON files in the project"
        },
        {
            "heading": "flood-control-projects",
            "content": "From ArcGIS (Recommended):"
        },
        {
            "heading": "flood-control-projects",
            "content": "index_flood_control_arcgis.js - Pulls latest data from government GIS"
        },
        {
            "heading": "cloudflare-d1-database",
            "content": "For Cloudflare deployment:"
        },
        {
            "heading": "cloudflare-d1-database",
            "content": "Requires:"
        },
        {
            "heading": "cloudflare-d1-database",
            "content": "Wrangler CLI setup"
        },
        {
            "heading": "cloudflare-d1-database",
            "content": "D1 database configured"
        },
        {
            "heading": "cloudflare-d1-database",
            "content": "flood_control.json data file"
        },
        {
            "heading": "cant-connect-to-meilisearch",
            "content": "Make sure Meilisearch is running"
        },
        {
            "heading": "cant-connect-to-meilisearch",
            "content": "Check your .env file has correct host and port"
        },
        {
            "heading": "cant-connect-to-meilisearch",
            "content": "Verify master key matches"
        },
        {
            "heading": "api-key-not-found",
            "content": "Run npm run index:create-key"
        },
        {
            "heading": "api-key-not-found",
            "content": "Copy the generated key"
        },
        {
            "heading": "api-key-not-found",
            "content": "Update your .env file"
        },
        {
            "heading": "search-isnt-finding-anything",
            "content": "Check if indexing finished without errors"
        },
        {
            "heading": "search-isnt-finding-anything",
            "content": "Try npm run index:meilisearch:reset to rebuild"
        },
        {
            "heading": "search-isnt-finding-anything",
            "content": "Look for error messages in terminal"
        },
        {
            "heading": "out-of-memory-errors",
            "content": "Give Node more memory:"
        },
        {
            "heading": "resources",
            "content": "Meilisearch Documentation"
        },
        {
            "heading": "resources",
            "content": "JavaScript SDK Guide"
        },
        {
            "heading": "resources",
            "content": "Contributing to BetterGov"
        },
        {
            "heading": "need-help",
            "content": "Check the troubleshooting section above"
        },
        {
            "heading": "need-help",
            "content": "Search GitHub issues"
        },
        {
            "heading": "need-help",
            "content": "Ask in our Discord community"
        },
        {
            "heading": "need-help",
            "content": "Open a new issue if you found a bug"
        }
    ],
    "headings": [
        {
            "id": "whats-inside",
            "content": "What's Inside"
        },
        {
            "id": "getting-started-with-meilisearch",
            "content": "Getting Started with Meilisearch"
        },
        {
            "id": "what-youll-need",
            "content": "What You'll Need"
        },
        {
            "id": "setting-everything-up",
            "content": "Setting Everything Up"
        },
        {
            "id": "install-meilisearch",
            "content": "Install Meilisearch"
        },
        {
            "id": "set-up-configuration",
            "content": "Set Up Configuration"
        },
        {
            "id": "start-meilisearch",
            "content": "Start Meilisearch"
        },
        {
            "id": "populate-initial-data",
            "content": "Populate Initial Data"
        },
        {
            "id": "generate-search-key",
            "content": "Generate Search Key"
        },
        {
            "id": "verify-everything-works",
            "content": "Verify Everything Works"
        },
        {
            "id": "loading-your-data",
            "content": "Loading Your Data"
        },
        {
            "id": "quick-setup-all-indexes",
            "content": "Quick Setup (All Indexes)"
        },
        {
            "id": "individual-indexes",
            "content": "Individual Indexes"
        },
        {
            "id": "working-with-data",
            "content": "Working with Data"
        },
        {
            "id": "building-the-site",
            "content": "Building the Site"
        },
        {
            "id": "managing-contractors",
            "content": "Managing Contractors"
        },
        {
            "id": "flood-control-projects",
            "content": "Flood Control Projects"
        },
        {
            "id": "cloudflare-d1-database",
            "content": "Cloudflare D1 Database"
        },
        {
            "id": "troubleshooting",
            "content": "Troubleshooting"
        },
        {
            "id": "cant-connect-to-meilisearch",
            "content": "\"Can't connect to Meilisearch\""
        },
        {
            "id": "api-key-not-found",
            "content": "\"API key not found\""
        },
        {
            "id": "search-isnt-finding-anything",
            "content": "\"Search isn't finding anything\""
        },
        {
            "id": "out-of-memory-errors",
            "content": "\"Out of memory\" errors"
        },
        {
            "id": "resources",
            "content": "Resources"
        },
        {
            "id": "need-help",
            "content": "Need Help?"
        }
    ]
};
;
;
;
const toc = [
    {
        depth: 2,
        url: "#whats-inside",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "What's Inside"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#getting-started-with-meilisearch",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Getting Started with Meilisearch"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#what-youll-need",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "What You'll Need"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#setting-everything-up",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Setting Everything Up"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#install-meilisearch",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Install Meilisearch"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#set-up-configuration",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Set Up Configuration"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#start-meilisearch",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Start Meilisearch"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#populate-initial-data",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Populate Initial Data"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#generate-search-key",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Generate Search Key"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#verify-everything-works",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Verify Everything Works"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#loading-your-data",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Loading Your Data"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#quick-setup-all-indexes",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Quick Setup (All Indexes)"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#individual-indexes",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Individual Indexes"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#working-with-data",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Working with Data"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#building-the-site",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Building the Site"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#managing-contractors",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Managing Contractors"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#flood-control-projects",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Flood Control Projects"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#cloudflare-d1-database",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Cloudflare D1 Database"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#troubleshooting",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Troubleshooting"
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#cant-connect-to-meilisearch",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "\"Can't connect to Meilisearch\""
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#api-key-not-found",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "\"API key not found\""
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#search-isnt-finding-anything",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "\"Search isn't finding anything\""
        }, void 0, false)
    },
    {
        depth: 3,
        url: "#out-of-memory-errors",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "\"Out of memory\" errors"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#resources",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Resources"
        }, void 0, false)
    },
    {
        depth: 2,
        url: "#need-help",
        title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Need Help?"
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
                children: "This guide covers setting up Meilisearch for BetterGov's search functionality and documents all the data processing scripts."
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 464,
                columnNumber: 12
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "whats-inside",
                children: "What's Inside"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 464,
                columnNumber: 177
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "#getting-started-with-meilisearch",
                                children: "Getting Started with Meilisearch"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 464,
                                columnNumber: 289
                            }, this),
                            " - Set up search for your local development"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 464,
                        columnNumber: 273
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "#working-with-data",
                                children: "Working with Data"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 464,
                                columnNumber: 483
                            }, this),
                            " - Process and manage government data"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 464,
                        columnNumber: 467
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "#building-the-site",
                                children: "Building the Site"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 464,
                                columnNumber: 641
                            }, this),
                            " - Generate sitemaps and metadata"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 464,
                        columnNumber: 625
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "#managing-contractors",
                                children: "Managing Contractors"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 464,
                                columnNumber: 795
                            }, this),
                            " - Handle contractor profile data"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 464,
                        columnNumber: 779
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "#flood-control-projects",
                                children: "Flood Control Projects"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 464,
                                columnNumber: 955
                            }, this),
                            " - Work with flood control data"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 464,
                        columnNumber: 939
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 464,
                columnNumber: 251
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "getting-started-with-meilisearch",
                children: "Getting Started with Meilisearch"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 464,
                columnNumber: 1124
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Think of Meilisearch as the brain behind BetterGov's search feature. It helps users quickly find government services, offices, and information they need."
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 464,
                columnNumber: 1237
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "what-youll-need",
                children: "What You'll Need"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 464,
                columnNumber: 1431
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Before we begin, make sure you have these ready:"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 464,
                columnNumber: 1511
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Node.js"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 464,
                                columnNumber: 1638
                            }, this),
                            " version 22 or newer (check with ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "node --version"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 464,
                                columnNumber: 1727
                            }, this),
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 464,
                        columnNumber: 1622
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "A text editor"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 464,
                                columnNumber: 1826
                            }, this),
                            " to update configuration files"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 464,
                        columnNumber: 1810
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Terminal access"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 464,
                                columnNumber: 1957
                            }, this),
                            " to run commands"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 464,
                        columnNumber: 1941
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "About 10 minutes"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 464,
                                columnNumber: 2076
                            }, this),
                            " for the initial setup"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 464,
                        columnNumber: 2060
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 464,
                columnNumber: 1600
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "setting-everything-up",
                children: "Setting Everything Up"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 464,
                columnNumber: 2209
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Steps"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                        id: "install-meilisearch",
                        children: "Install Meilisearch"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 464,
                        columnNumber: 2307
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tabs"], {
                        items: [
                            'macOS',
                            'Windows',
                            'Linux',
                            'Docker'
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tab"], {
                                value: "macOS",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                        children: "Using Homebrew:"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 464,
                                        columnNumber: 2461
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
                                                            children: "brew"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 469,
                                                            columnNumber: 480
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: " install"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 472,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: " meilisearch"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 475,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 469,
                                                    columnNumber: 445
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 469,
                                                columnNumber: 427
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 464,
                                            columnNumber: 2513
                                        }, this)
                                    }, void 0, false),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                        children: "Or download directly:"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 478,
                                        columnNumber: 100
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
                                                            children: "curl"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 483,
                                                            columnNumber: 480
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#005CC5",
                                                                "--shiki-dark": "#79B8FF"
                                                            },
                                                            children: " -L"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 486,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: " https://install.meilisearch.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 489,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#D73A49",
                                                                "--shiki-dark": "#F97583"
                                                            },
                                                            children: " |"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 492,
                                                            columnNumber: 61
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#6F42C1",
                                                                "--shiki-dark": "#B392F0"
                                                            },
                                                            children: " sh"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 495,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 483,
                                                    columnNumber: 445
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 483,
                                                columnNumber: 427
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 478,
                                            columnNumber: 158
                                        }, this)
                                    }, void 0, false)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 464,
                                columnNumber: 2442
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tab"], {
                                value: "Windows",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                        children: "Using PowerShell (run as Administrator):"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 498,
                                        columnNumber: 118
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
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        className: "line",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#6A737D",
                                                                "--shiki-dark": "#6A737D"
                                                            },
                                                            children: "# Download the latest Windows executable"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 503,
                                                            columnNumber: 584
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 503,
                                                        columnNumber: 549
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
                                                                children: "Invoke-WebRequest"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 506,
                                                                columnNumber: 129
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#D73A49",
                                                                    "--shiki-dark": "#F97583"
                                                                },
                                                                children: " -"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 509,
                                                                columnNumber: 46
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#24292E",
                                                                    "--shiki-dark": "#E1E4E8"
                                                                },
                                                                children: "Uri "
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 512,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: "\"https://github.com/meilisearch/meilisearch/releases/latest/download/meilisearch-windows-amd64.exe\""
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 515,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#D73A49",
                                                                    "--shiki-dark": "#F97583"
                                                                },
                                                                children: " -"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 518,
                                                                columnNumber: 130
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#24292E",
                                                                    "--shiki-dark": "#E1E4E8"
                                                                },
                                                                children: "OutFile "
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 521,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: "\"meilisearch.exe\""
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 524,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 506,
                                                        columnNumber: 94
                                                    }, this),
                                                    "\n",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        className: "line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 527,
                                                        columnNumber: 73
                                                    }, this),
                                                    "\n",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        className: "line",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#6A737D",
                                                                "--shiki-dark": "#6A737D"
                                                            },
                                                            children: "# Run Meilisearch"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 527,
                                                            columnNumber: 151
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 527,
                                                        columnNumber: 116
                                                    }, this),
                                                    "\n",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        className: "line",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#24292E",
                                                                    "--shiki-dark": "#E1E4E8"
                                                                },
                                                                children: ".\\"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 530,
                                                                columnNumber: 106
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#005CC5",
                                                                    "--shiki-dark": "#79B8FF"
                                                                },
                                                                children: "meilisearch.exe"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 533,
                                                                columnNumber: 32
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#D73A49",
                                                                    "--shiki-dark": "#F97583"
                                                                },
                                                                children: " --"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 536,
                                                                columnNumber: 44
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#24292E",
                                                                    "--shiki-dark": "#E1E4E8"
                                                                },
                                                                children: "master"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 539,
                                                                columnNumber: 32
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#D73A49",
                                                                    "--shiki-dark": "#F97583"
                                                                },
                                                                children: "-"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 542,
                                                                columnNumber: 35
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#24292E",
                                                                    "--shiki-dark": "#E1E4E8"
                                                                },
                                                                children: "key"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 545,
                                                                columnNumber: 30
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#D73A49",
                                                                    "--shiki-dark": "#F97583"
                                                                },
                                                                children: "="
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 548,
                                                                columnNumber: 32
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: "\"your_master_key_here\""
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 551,
                                                                columnNumber: 30
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 530,
                                                        columnNumber: 71
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 503,
                                                columnNumber: 531
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 498,
                                            columnNumber: 195
                                        }, this)
                                    }, void 0, false),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                        children: "Or use Windows Subsystem for Linux (WSL):"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 554,
                                        columnNumber: 112
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
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#6A737D",
                                                                "--shiki-dark": "#6A737D"
                                                            },
                                                            children: "# In WSL terminal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 559,
                                                            columnNumber: 480
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 559,
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
                                                                children: "curl"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 562,
                                                                columnNumber: 106
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#005CC5",
                                                                    "--shiki-dark": "#79B8FF"
                                                                },
                                                                children: " -L"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 565,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: " https://install.meilisearch.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 568,
                                                                columnNumber: 32
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#D73A49",
                                                                    "--shiki-dark": "#F97583"
                                                                },
                                                                children: " |"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 571,
                                                                columnNumber: 61
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#6F42C1",
                                                                    "--shiki-dark": "#B392F0"
                                                                },
                                                                children: " sh"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 574,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 562,
                                                        columnNumber: 71
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 559,
                                                columnNumber: 427
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 554,
                                            columnNumber: 190
                                        }, this)
                                    }, void 0, false)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 498,
                                columnNumber: 97
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tab"], {
                                value: "Linux",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                        children: "Ubuntu/Debian:"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 577,
                                        columnNumber: 116
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
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#6A737D",
                                                                "--shiki-dark": "#6A737D"
                                                            },
                                                            children: "# Download and install"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 582,
                                                            columnNumber: 480
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 582,
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
                                                                children: "curl"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 585,
                                                                columnNumber: 111
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#005CC5",
                                                                    "--shiki-dark": "#79B8FF"
                                                                },
                                                                children: " -L"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 588,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: " https://install.meilisearch.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 591,
                                                                columnNumber: 32
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#D73A49",
                                                                    "--shiki-dark": "#F97583"
                                                                },
                                                                children: " |"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 594,
                                                                columnNumber: 61
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#6F42C1",
                                                                    "--shiki-dark": "#B392F0"
                                                                },
                                                                children: " sh"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 597,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 585,
                                                        columnNumber: 76
                                                    }, this),
                                                    "\n",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        className: "line"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 600,
                                                        columnNumber: 57
                                                    }, this),
                                                    "\n",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        className: "line",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#6A737D",
                                                                "--shiki-dark": "#6A737D"
                                                            },
                                                            children: "# Or using apt (after adding repository)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 600,
                                                            columnNumber: 135
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 600,
                                                        columnNumber: 100
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
                                                                children: "echo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 603,
                                                                columnNumber: 129
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: " \"deb [trusted=yes] https://apt.fury.io/meilisearch/ /\""
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 606,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#D73A49",
                                                                    "--shiki-dark": "#F97583"
                                                                },
                                                                children: " |"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 609,
                                                                columnNumber: 86
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#6F42C1",
                                                                    "--shiki-dark": "#B392F0"
                                                                },
                                                                children: " sudo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 612,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: " tee"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 615,
                                                                columnNumber: 34
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: " /etc/apt/sources.list.d/fury.list"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 618,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 603,
                                                        columnNumber: 94
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
                                                                children: "sudo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 621,
                                                                columnNumber: 123
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: " apt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 624,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: " update"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 627,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#24292E",
                                                                    "--shiki-dark": "#E1E4E8"
                                                                },
                                                                children: " && "
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 630,
                                                                columnNumber: 36
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#6F42C1",
                                                                    "--shiki-dark": "#B392F0"
                                                                },
                                                                children: "sudo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 633,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: " apt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 636,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: " install"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 639,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: " meilisearch"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 642,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 621,
                                                        columnNumber: 88
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 582,
                                                columnNumber: 427
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 577,
                                            columnNumber: 167
                                        }, this)
                                    }, void 0, false),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                                        children: "Fedora/CentOS/RHEL:"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 645,
                                        columnNumber: 100
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
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#6A737D",
                                                                "--shiki-dark": "#6A737D"
                                                            },
                                                            children: "# Download binary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 650,
                                                            columnNumber: 480
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 650,
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
                                                                children: "curl"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 653,
                                                                columnNumber: 106
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#005CC5",
                                                                    "--shiki-dark": "#79B8FF"
                                                                },
                                                                children: " -L"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 656,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#032F62",
                                                                    "--shiki-dark": "#9ECBFF"
                                                                },
                                                                children: " https://install.meilisearch.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 659,
                                                                columnNumber: 32
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#D73A49",
                                                                    "--shiki-dark": "#F97583"
                                                                },
                                                                children: " |"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 662,
                                                                columnNumber: 61
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                                style: {
                                                                    "--shiki-light": "#6F42C1",
                                                                    "--shiki-dark": "#B392F0"
                                                                },
                                                                children: " sh"
                                                            }, void 0, false, {
                                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                                lineNumber: 665,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 653,
                                                        columnNumber: 71
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 650,
                                                columnNumber: 427
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 645,
                                            columnNumber: 156
                                        }, this)
                                    }, void 0, false)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 577,
                                columnNumber: 97
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tab"], {
                                value: "Docker",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
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
                                                            children: "docker"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 673,
                                                            columnNumber: 480
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: " pull"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 676,
                                                            columnNumber: 35
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: " getmeili/meilisearch:latest"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 679,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 673,
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
                                                            children: "docker"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 682,
                                                            columnNumber: 117
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: " run"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 685,
                                                            columnNumber: 35
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#005CC5",
                                                                "--shiki-dark": "#79B8FF"
                                                            },
                                                            children: " -p"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 688,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: " 7700:7700"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 691,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#005CC5",
                                                                "--shiki-dark": "#79B8FF"
                                                            },
                                                            children: " -e"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 694,
                                                            columnNumber: 39
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: " MEILI_MASTER_KEY=\"your_master_key_here\""
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 697,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: " getmeili/meilisearch:latest"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 700,
                                                            columnNumber: 71
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 682,
                                                    columnNumber: 82
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 673,
                                            columnNumber: 427
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 668,
                                        columnNumber: 119
                                    }, this)
                                }, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 668,
                                columnNumber: 97
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 464,
                        columnNumber: 2388
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                        id: "set-up-configuration",
                        children: "Set Up Configuration"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 703,
                        columnNumber: 129
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "Create a ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: ".env"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 703,
                                columnNumber: 240
                            }, this),
                            " file in the project root:"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 703,
                        columnNumber: 212
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#6A737D",
                                                "--shiki-dark": "#6A737D"
                                            },
                                            children: "# Where Meilisearch lives"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 708,
                                            columnNumber: 480
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 708,
                                        columnNumber: 445
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#24292E",
                                                    "--shiki-dark": "#E1E4E8"
                                                },
                                                children: "VITE_MEILISEARCH_HOST"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 711,
                                                columnNumber: 114
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#D73A49",
                                                    "--shiki-dark": "#F97583"
                                                },
                                                children: "="
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 714,
                                                columnNumber: 50
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: "http://localhost"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 717,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 711,
                                        columnNumber: 79
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#24292E",
                                                    "--shiki-dark": "#E1E4E8"
                                                },
                                                children: "VITE_MEILISEARCH_PORT"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 720,
                                                columnNumber: 105
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#D73A49",
                                                    "--shiki-dark": "#F97583"
                                                },
                                                children: "="
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 723,
                                                columnNumber: 50
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: "7700"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 726,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 720,
                                        columnNumber: 70
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 729,
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
                                            children: "# Your master key (keep this secret!)"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 729,
                                            columnNumber: 136
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 729,
                                        columnNumber: 101
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#24292E",
                                                    "--shiki-dark": "#E1E4E8"
                                                },
                                                children: "MEILISEARCH_MASTER_KEY"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 732,
                                                columnNumber: 126
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#D73A49",
                                                    "--shiki-dark": "#F97583"
                                                },
                                                children: "="
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 735,
                                                columnNumber: 51
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: "aSampleMasterKey"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 738,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 732,
                                        columnNumber: 91
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 741,
                                        columnNumber: 70
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#6A737D",
                                                "--shiki-dark": "#6A737D"
                                            },
                                            children: "# Search key for the frontend (we'll generate this in Step 4)"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 741,
                                            columnNumber: 148
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 741,
                                        columnNumber: 113
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#24292E",
                                                    "--shiki-dark": "#E1E4E8"
                                                },
                                                children: "VITE_MEILISEARCH_SEARCH_API_KEY"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 744,
                                                columnNumber: 150
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#D73A49",
                                                    "--shiki-dark": "#F97583"
                                                },
                                                children: "="
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 747,
                                                columnNumber: 60
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: "your_search_api_key_here"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 750,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 744,
                                        columnNumber: 115
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 753,
                                        columnNumber: 78
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#6A737D",
                                                "--shiki-dark": "#6A737D"
                                            },
                                            children: "# Perplexity API key (required for contractor data processing)"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 753,
                                            columnNumber: 156
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 753,
                                        columnNumber: 121
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#24292E",
                                                    "--shiki-dark": "#E1E4E8"
                                                },
                                                children: "PERPLEXITY_API_KEY"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 756,
                                                columnNumber: 151
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#D73A49",
                                                    "--shiki-dark": "#F97583"
                                                },
                                                children: "="
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 759,
                                                columnNumber: 47
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: "your_perplexity_api_key_here"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 762,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 756,
                                        columnNumber: 116
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 708,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 703,
                            columnNumber: 333
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                        type: "info",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                            children: "The master key can be any value you choose - it's like your admin password. The search key is read-only, perfect for the frontend."
                        }, void 0, false, {
                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 765,
                            columnNumber: 137
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 765,
                        columnNumber: 116
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                        id: "start-meilisearch",
                        children: "Start Meilisearch"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 765,
                        columnNumber: 312
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tabs"], {
                        items: [
                            'macOS/Linux',
                            'Windows',
                            'Docker'
                        ],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tab"], {
                                value: "macOS/Linux",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
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
                                                        children: "# If installed locally"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 770,
                                                        columnNumber: 480
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 770,
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
                                                            children: "meilisearch"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 773,
                                                            columnNumber: 111
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#005CC5",
                                                                "--shiki-dark": "#79B8FF"
                                                            },
                                                            children: " --master-key="
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 776,
                                                            columnNumber: 40
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: "\"your_master_key_here\""
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 779,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 773,
                                                    columnNumber: 76
                                                }, this),
                                                "\n",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    className: "line"
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 782,
                                                    columnNumber: 78
                                                }, this),
                                                "\n",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    className: "line",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#6A737D",
                                                            "--shiki-dark": "#6A737D"
                                                        },
                                                        children: "# Or if you downloaded the binary directly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 782,
                                                        columnNumber: 156
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 782,
                                                    columnNumber: 121
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
                                                            children: "./meilisearch"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 785,
                                                            columnNumber: 131
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#005CC5",
                                                                "--shiki-dark": "#79B8FF"
                                                            },
                                                            children: " --master-key="
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 788,
                                                            columnNumber: 42
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: "\"your_master_key_here\""
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 791,
                                                            columnNumber: 43
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 785,
                                                    columnNumber: 96
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 770,
                                            columnNumber: 427
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 765,
                                        columnNumber: 467
                                    }, this)
                                }, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 765,
                                columnNumber: 440
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tab"], {
                                value: "Windows",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
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
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    className: "line",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#6A737D",
                                                            "--shiki-dark": "#6A737D"
                                                        },
                                                        children: "# In PowerShell"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 799,
                                                        columnNumber: 584
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 799,
                                                    columnNumber: 549
                                                }, this),
                                                "\n",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    className: "line",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#24292E",
                                                                "--shiki-dark": "#E1E4E8"
                                                            },
                                                            children: ".\\"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 802,
                                                            columnNumber: 104
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#005CC5",
                                                                "--shiki-dark": "#79B8FF"
                                                            },
                                                            children: "meilisearch.exe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 805,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#D73A49",
                                                                "--shiki-dark": "#F97583"
                                                            },
                                                            children: " --"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 808,
                                                            columnNumber: 44
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#24292E",
                                                                "--shiki-dark": "#E1E4E8"
                                                            },
                                                            children: "master"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 811,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#D73A49",
                                                                "--shiki-dark": "#F97583"
                                                            },
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 814,
                                                            columnNumber: 35
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#24292E",
                                                                "--shiki-dark": "#E1E4E8"
                                                            },
                                                            children: "key"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 817,
                                                            columnNumber: 30
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#D73A49",
                                                                "--shiki-dark": "#F97583"
                                                            },
                                                            children: "="
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 820,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: "\"your_master_key_here\""
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 823,
                                                            columnNumber: 30
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 802,
                                                    columnNumber: 69
                                                }, this),
                                                "\n",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    className: "line"
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 826,
                                                    columnNumber: 78
                                                }, this),
                                                "\n",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                    className: "line",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#6A737D",
                                                            "--shiki-dark": "#6A737D"
                                                        },
                                                        children: "# Or in Command Prompt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 826,
                                                        columnNumber: 156
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 826,
                                                    columnNumber: 121
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
                                                            children: "meilisearch.exe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 829,
                                                            columnNumber: 111
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#D73A49",
                                                                "--shiki-dark": "#F97583"
                                                            },
                                                            children: " --"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 832,
                                                            columnNumber: 44
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#24292E",
                                                                "--shiki-dark": "#E1E4E8"
                                                            },
                                                            children: "master"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 835,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#D73A49",
                                                                "--shiki-dark": "#F97583"
                                                            },
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 838,
                                                            columnNumber: 35
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#24292E",
                                                                "--shiki-dark": "#E1E4E8"
                                                            },
                                                            children: "key"
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 841,
                                                            columnNumber: 30
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#D73A49",
                                                                "--shiki-dark": "#F97583"
                                                            },
                                                            children: "="
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 844,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                            style: {
                                                                "--shiki-light": "#032F62",
                                                                "--shiki-dark": "#9ECBFF"
                                                            },
                                                            children: "\"your_master_key_here\""
                                                        }, void 0, false, {
                                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                            lineNumber: 847,
                                                            columnNumber: 30
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                    lineNumber: 829,
                                                    columnNumber: 76
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 799,
                                            columnNumber: 531
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 794,
                                        columnNumber: 141
                                    }, this)
                                }, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 794,
                                columnNumber: 118
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tab"], {
                                value: "Docker",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
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
                                                        children: "docker"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 855,
                                                        columnNumber: 480
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#032F62",
                                                            "--shiki-dark": "#9ECBFF"
                                                        },
                                                        children: " run"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 858,
                                                        columnNumber: 35
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#005CC5",
                                                            "--shiki-dark": "#79B8FF"
                                                        },
                                                        children: " -p"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 861,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#032F62",
                                                            "--shiki-dark": "#9ECBFF"
                                                        },
                                                        children: " 7700:7700"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 864,
                                                        columnNumber: 32
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#005CC5",
                                                            "--shiki-dark": "#79B8FF"
                                                        },
                                                        children: " -e"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 867,
                                                        columnNumber: 39
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#032F62",
                                                            "--shiki-dark": "#9ECBFF"
                                                        },
                                                        children: " MEILI_MASTER_KEY=\"your_master_key_here\""
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 870,
                                                        columnNumber: 32
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                        style: {
                                                            "--shiki-light": "#032F62",
                                                            "--shiki-dark": "#9ECBFF"
                                                        },
                                                        children: " getmeili/meilisearch:latest"
                                                    }, void 0, false, {
                                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                        lineNumber: 873,
                                                        columnNumber: 71
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 855,
                                                columnNumber: 445
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 855,
                                            columnNumber: 427
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 850,
                                        columnNumber: 140
                                    }, this)
                                }, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 850,
                                columnNumber: 118
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 765,
                        columnNumber: 389
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                        id: "populate-initial-data",
                        children: "Populate Initial Data"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 876,
                        columnNumber: 129
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: "Before generating keys, populate Meilisearch with data:"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 876,
                        columnNumber: 214
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
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#6A737D",
                                                "--shiki-dark": "#6A737D"
                                            },
                                            children: "# Add the main government data"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 881,
                                            columnNumber: 480
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 881,
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
                                                children: "npm"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 884,
                                                columnNumber: 119
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " run"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 887,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " index:meilisearch"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 890,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 884,
                                        columnNumber: 84
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 893,
                                        columnNumber: 72
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#6A737D",
                                                "--shiki-dark": "#6A737D"
                                            },
                                            children: "# Add flood control data"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 893,
                                            columnNumber: 150
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 893,
                                        columnNumber: 115
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
                                                children: "npm"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 896,
                                                columnNumber: 113
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " run"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 899,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " index:flood-control:arcgis"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 902,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 896,
                                        columnNumber: 78
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 905,
                                        columnNumber: 81
                                    }, this),
                                    "\n",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        className: "line",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#6A737D",
                                                "--shiki-dark": "#6A737D"
                                            },
                                            children: "# Add contractor profiles (requires PERPLEXITY_API_KEY)"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 905,
                                            columnNumber: 159
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 905,
                                        columnNumber: 124
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
                                                children: "npm"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 908,
                                                columnNumber: 144
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " run"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 911,
                                                columnNumber: 32
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                                style: {
                                                    "--shiki-light": "#032F62",
                                                    "--shiki-dark": "#9ECBFF"
                                                },
                                                children: " index:contractor-profiles"
                                            }, void 0, false, {
                                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                                lineNumber: 914,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 908,
                                        columnNumber: 109
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 881,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 876,
                            columnNumber: 306
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                        id: "generate-search-key",
                        children: "Generate Search Key"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 917,
                        columnNumber: 114
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: "Create a search key for the website:"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 917,
                        columnNumber: 195
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
                                            children: "npm"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 922,
                                            columnNumber: 480
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#032F62",
                                                "--shiki-dark": "#9ECBFF"
                                            },
                                            children: " run"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 925,
                                            columnNumber: 32
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#032F62",
                                                "--shiki-dark": "#9ECBFF"
                                            },
                                            children: " index:create-key"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 928,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 922,
                                    columnNumber: 445
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 922,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 917,
                            columnNumber: 268
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "Copy the generated key and update your ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: ".env"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 931,
                                columnNumber: 163
                            }, this),
                            " file:"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 931,
                        columnNumber: 105
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
                                                "--shiki-light": "#24292E",
                                                "--shiki-dark": "#E1E4E8"
                                            },
                                            children: "VITE_MEILISEARCH_SEARCH_API_KEY"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 936,
                                            columnNumber: 480
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#D73A49",
                                                "--shiki-dark": "#F97583"
                                            },
                                            children: "=<"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 939,
                                            columnNumber: 60
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#032F62",
                                                "--shiki-dark": "#9ECBFF"
                                            },
                                            children: "paste_your_generated_key_here"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 942,
                                            columnNumber: 31
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#D73A49",
                                                "--shiki-dark": "#F97583"
                                            },
                                            children: ">"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 945,
                                            columnNumber: 58
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 936,
                                    columnNumber: 445
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 936,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 931,
                            columnNumber: 236
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                        id: "verify-everything-works",
                        children: "Verify Everything Works"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 948,
                        columnNumber: 89
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: "Start your development server and test search:"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 948,
                        columnNumber: 178
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
                                            children: "npm"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 953,
                                            columnNumber: 480
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#032F62",
                                                "--shiki-dark": "#9ECBFF"
                                            },
                                            children: " run"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 956,
                                            columnNumber: 32
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                            style: {
                                                "--shiki-light": "#032F62",
                                                "--shiki-dark": "#9ECBFF"
                                            },
                                            children: " dev"
                                        }, void 0, false, {
                                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                            lineNumber: 959,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 953,
                                    columnNumber: 445
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 953,
                                columnNumber: 427
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 948,
                            columnNumber: 261
                        }, this)
                    }, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                        children: [
                            "Visit ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "http://localhost:5173",
                                children: "http://localhost:5173"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 962,
                                columnNumber: 117
                            }, this),
                            " and try searching for government services."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 962,
                        columnNumber: 92
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 464,
                columnNumber: 2300
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "loading-your-data",
                children: "Loading Your Data"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 962,
                columnNumber: 279
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "quick-setup-all-indexes",
                children: "Quick Setup (All Indexes)"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 962,
                columnNumber: 362
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Load all indexes at once:"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 962,
                columnNumber: 459
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
                                    children: "# Load all indexes in one command"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 967,
                                    columnNumber: 480
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 967,
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
                                        children: "npm"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 970,
                                        columnNumber: 122
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " run"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 973,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " index:all"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 976,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 970,
                                columnNumber: 87
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 967,
                        columnNumber: 427
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 962,
                    columnNumber: 527
                }, this)
            }, void 0, false),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "This runs:"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 979,
                columnNumber: 104
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run index:meilisearch"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 979,
                                columnNumber: 193
                            }, this),
                            " - Main government data"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 979,
                        columnNumber: 177
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run index:flood-control:arcgis"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 979,
                                columnNumber: 325
                            }, this),
                            " - Flood control projects"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 979,
                        columnNumber: 309
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run index:contractor-profiles"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 979,
                                columnNumber: 468
                            }, this),
                            " - Contractor profiles"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 979,
                        columnNumber: 452
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 979,
                columnNumber: 155
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "individual-indexes",
                children: "Individual Indexes"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 979,
                columnNumber: 614
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                    children: "Main Government Data:"
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 979,
                    columnNumber: 714
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 979,
                columnNumber: 699
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
                                    children: "# Add or update data"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 984,
                                    columnNumber: 480
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 984,
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
                                        children: "npm"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 987,
                                        columnNumber: 109
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " run"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 990,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " index:meilisearch"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 993,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 987,
                                columnNumber: 74
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 996,
                                columnNumber: 72
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#6A737D",
                                        "--shiki-dark": "#6A737D"
                                    },
                                    children: "# Rebuild from scratch"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 996,
                                    columnNumber: 150
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 996,
                                columnNumber: 115
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
                                        children: "npm"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 999,
                                        columnNumber: 111
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " run"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1002,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " index:meilisearch:reset"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1005,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 999,
                                columnNumber: 76
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 984,
                        columnNumber: 427
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 979,
                    columnNumber: 804
                }, this)
            }, void 0, false),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                    children: "Flood Control Projects:"
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 1008,
                    columnNumber: 133
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1008,
                columnNumber: 118
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
                                    children: "# Update flood control data"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1013,
                                    columnNumber: 480
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1013,
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
                                        children: "npm"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1016,
                                        columnNumber: 116
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " run"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1019,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " index:flood-control:arcgis"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1022,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1016,
                                columnNumber: 81
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1025,
                                columnNumber: 81
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#6A737D",
                                        "--shiki-dark": "#6A737D"
                                    },
                                    children: "# Rebuild flood control index"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1025,
                                    columnNumber: 159
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1025,
                                columnNumber: 124
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
                                        children: "npm"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1028,
                                        columnNumber: 118
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " run"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1031,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " index:flood-control:arcgis:reset"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1034,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1028,
                                columnNumber: 83
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1013,
                        columnNumber: 427
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 1008,
                    columnNumber: 225
                }, this)
            }, void 0, false),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                    children: "Contractor Information:"
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 1037,
                    columnNumber: 142
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1037,
                columnNumber: 127
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
                                    children: "# Step 1: Download latest data (requires PERPLEXITY_API_KEY)"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1042,
                                    columnNumber: 480
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1042,
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
                                        children: "npm"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1045,
                                        columnNumber: 149
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " run"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1048,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " fetch:contractor-profiles"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1051,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1045,
                                columnNumber: 114
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1054,
                                columnNumber: 80
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#6A737D",
                                        "--shiki-dark": "#6A737D"
                                    },
                                    children: "# Step 2: Clean up and remove duplicates"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1054,
                                    columnNumber: 158
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1054,
                                columnNumber: 123
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
                                        children: "npm"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1057,
                                        columnNumber: 129
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " run"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1060,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " process:unique-contractors"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1063,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1057,
                                columnNumber: 94
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1066,
                                columnNumber: 81
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#6A737D",
                                        "--shiki-dark": "#6A737D"
                                    },
                                    children: "# Step 3: Add to search index"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1066,
                                    columnNumber: 159
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1066,
                                columnNumber: 124
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
                                        children: "npm"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1069,
                                        columnNumber: 118
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " run"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1072,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " index:contractor-profiles"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1075,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1069,
                                columnNumber: 83
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1042,
                        columnNumber: 427
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 1037,
                    columnNumber: 234
                }, this)
            }, void 0, false),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "working-with-data",
                children: "Working with Data"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1078,
                columnNumber: 120
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Data processing scripts:"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1078,
                columnNumber: 203
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                    children: "URL and Navigation:"
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 1078,
                    columnNumber: 283
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1078,
                columnNumber: 268
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "add-directory-slugs.js"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1078,
                                columnNumber: 407
                            }, this),
                            " - Creates clean URLs for directory pages"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1078,
                        columnNumber: 391
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "add-lgu-slugs.js"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1078,
                                columnNumber: 554
                            }, this),
                            " - Creates URLs for Local Government Unit pages"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1078,
                        columnNumber: 538
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1078,
                columnNumber: 369
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                    children: "Data Organization:"
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 1078,
                    columnNumber: 723
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1078,
                columnNumber: 708
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "extract-regions.js"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1078,
                                columnNumber: 846
                            }, this),
                            " - Organizes data by Philippine regions"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1078,
                        columnNumber: 830
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "extract-websites.js"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1078,
                                columnNumber: 987
                            }, this),
                            " - Collects official government website URLs"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1078,
                        columnNumber: 971
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "flatten-contacts.js"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1078,
                                columnNumber: 1134
                            }, this),
                            " - Makes contact info searchable"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1078,
                        columnNumber: 1118
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "split-lgu.cjs"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1078,
                                columnNumber: 1269
                            }, this),
                            " - Breaks up large LGU files for faster loading"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1078,
                        columnNumber: 1253
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "split-services.js"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1078,
                                columnNumber: 1413
                            }, this),
                            " - Organizes services by category"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1078,
                        columnNumber: 1397
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "fetch-hrep.js"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1078,
                                columnNumber: 1547
                            }, this),
                            " - Gets House of Representatives member data"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1078,
                        columnNumber: 1531
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1078,
                columnNumber: 808
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "building-the-site",
                children: "Building the Site"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1078,
                columnNumber: 1695
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Generate files for search engines and AI assistants:"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1078,
                columnNumber: 1778
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
                                    children: "# Generate sitemap for search engines"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1083,
                                    columnNumber: 480
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1083,
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
                                        children: "npm"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1086,
                                        columnNumber: 126
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " run"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1089,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " generate:sitemap"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1092,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1086,
                                columnNumber: 91
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1095,
                                columnNumber: 71
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#6A737D",
                                        "--shiki-dark": "#6A737D"
                                    },
                                    children: "# Generate llms.txt for AI assistants"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1095,
                                    columnNumber: 149
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1095,
                                columnNumber: 114
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
                                        children: "npm"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1098,
                                        columnNumber: 126
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " run"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1101,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " generate:llms-txt"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1104,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1098,
                                columnNumber: 91
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1107,
                                columnNumber: 72
                            }, this),
                            "\n",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                className: "line",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#6A737D",
                                        "--shiki-dark": "#6A737D"
                                    },
                                    children: "# Generate both at once"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1107,
                                    columnNumber: 150
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1107,
                                columnNumber: 115
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
                                        children: "npm"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1110,
                                        columnNumber: 112
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " run"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1113,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " generate:metadata"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1116,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1110,
                                columnNumber: 77
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1083,
                        columnNumber: 427
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 1078,
                    columnNumber: 1873
                }, this)
            }, void 0, false),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "managing-contractors",
                children: "Managing Contractors"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1119,
                columnNumber: 112
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Update contractor information (run in order):"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1119,
                columnNumber: 201
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Download data:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1119,
                                columnNumber: 325
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run fetch:contractor-profiles"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1119,
                                columnNumber: 389
                            }, this),
                            " (requires ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "PERPLEXITY_API_KEY"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1119,
                                columnNumber: 478
                            }, this),
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1119,
                        columnNumber: 309
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Clean data:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1119,
                                columnNumber: 581
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run process:unique-contractors"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1119,
                                columnNumber: 642
                            }, this),
                            " (also requires ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "PERPLEXITY_API_KEY"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1119,
                                columnNumber: 737
                            }, this),
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1119,
                        columnNumber: 565
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                                children: "Index data:"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1119,
                                columnNumber: 840
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run index:contractor-profiles"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1119,
                                columnNumber: 901
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1119,
                        columnNumber: 824
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1119,
                columnNumber: 287
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: [
                    "Get your Perplexity API key at ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                        href: "https://www.perplexity.ai/settings/api",
                        children: "Perplexity AI Settings"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1119,
                        columnNumber: 1071
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1119,
                columnNumber: 1021
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "flood-control-projects",
                children: "Flood Control Projects"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1119,
                columnNumber: 1201
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Two ways to manage flood control data:"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1119,
                columnNumber: 1294
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                    children: "From Local Files:"
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 1119,
                    columnNumber: 1388
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1119,
                columnNumber: 1373
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "index_flood_control.cjs"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1119,
                                columnNumber: 1510
                            }, this),
                            " - Uses JSON files in the project"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1119,
                        columnNumber: 1494
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1119,
                columnNumber: 1472
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.strong, {
                    children: "From ArcGIS (Recommended):"
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 1119,
                    columnNumber: 1672
                }, this)
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1119,
                columnNumber: 1657
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "index_flood_control_arcgis.js"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1119,
                                columnNumber: 1803
                            }, this),
                            " - Pulls latest data from government GIS"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1119,
                        columnNumber: 1787
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1119,
                columnNumber: 1765
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "cloudflare-d1-database",
                children: "Cloudflare D1 Database"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1119,
                columnNumber: 1963
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "For Cloudflare deployment:"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1119,
                columnNumber: 2056
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
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#005CC5",
                                            "--shiki-dark": "#79B8FF"
                                        },
                                        children: "cd"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1124,
                                        columnNumber: 480
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " src/data/flood_control"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1127,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1124,
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
                                        children: "node"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1130,
                                        columnNumber: 112
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                        style: {
                                            "--shiki-light": "#032F62",
                                            "--shiki-dark": "#9ECBFF"
                                        },
                                        children: " load_flood_control.js"
                                    }, void 0, false, {
                                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                        lineNumber: 1133,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1130,
                                columnNumber: 77
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1124,
                        columnNumber: 427
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 1119,
                    columnNumber: 2125
                }, this)
            }, void 0, false),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Requires:"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1136,
                columnNumber: 116
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "Wrangler CLI setup"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1136,
                        columnNumber: 188
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "D1 database configured"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1136,
                        columnNumber: 249
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "flood_control.json"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1136,
                                columnNumber: 330
                            }, this),
                            " data file"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1136,
                        columnNumber: 314
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1136,
                columnNumber: 166
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "troubleshooting",
                children: "Troubleshooting"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1136,
                columnNumber: 449
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "cant-connect-to-meilisearch",
                children: "\"Can't connect to Meilisearch\""
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1136,
                columnNumber: 528
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "Make sure Meilisearch is running"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1136,
                        columnNumber: 658
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Check your ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: ".env"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1136,
                                columnNumber: 764
                            }, this),
                            " file has correct host and port"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1136,
                        columnNumber: 733
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "Verify master key matches"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1136,
                        columnNumber: 867
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1136,
                columnNumber: 636
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "api-key-not-found",
                children: "\"API key not found\""
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1136,
                columnNumber: 958
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Run ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run index:create-key"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1136,
                                columnNumber: 1091
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1136,
                        columnNumber: 1067
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "Copy the generated key"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1136,
                        columnNumber: 1179
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Update your ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: ".env"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1136,
                                columnNumber: 1276
                            }, this),
                            " file"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1136,
                        columnNumber: 1244
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1136,
                columnNumber: 1045
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "search-isnt-finding-anything",
                children: "\"Search isn't finding anything\""
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1136,
                columnNumber: 1376
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "Check if indexing finished without errors"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1136,
                        columnNumber: 1508
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Try ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.code, {
                                children: "npm run index:meilisearch:reset"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1136,
                                columnNumber: 1616
                            }, this),
                            " to rebuild"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1136,
                        columnNumber: 1592
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "Look for error messages in terminal"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1136,
                        columnNumber: 1726
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1136,
                columnNumber: 1486
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h3, {
                id: "out-of-memory-errors",
                children: "\"Out of memory\" errors"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1136,
                columnNumber: 1827
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.p, {
                children: "Give Node more memory:"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1136,
                columnNumber: 1920
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
                                        "--shiki-light": "#24292E",
                                        "--shiki-dark": "#E1E4E8"
                                    },
                                    children: "NODE_OPTIONS"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1141,
                                    columnNumber: 480
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#D73A49",
                                        "--shiki-dark": "#F97583"
                                    },
                                    children: "="
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1144,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                    },
                                    children: "\"--max-old-space-size=4096\""
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1147,
                                    columnNumber: 30
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#6F42C1",
                                        "--shiki-dark": "#B392F0"
                                    },
                                    children: " npm"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1150,
                                    columnNumber: 58
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                    },
                                    children: " run"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1153,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.span, {
                                    style: {
                                        "--shiki-light": "#032F62",
                                        "--shiki-dark": "#9ECBFF"
                                    },
                                    children: " index:meilisearch"
                                }, void 0, false, {
                                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                    lineNumber: 1156,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 1141,
                            columnNumber: 445
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1141,
                        columnNumber: 427
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                    lineNumber: 1136,
                    columnNumber: 1985
                }, this)
            }, void 0, false),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "resources",
                children: "Resources"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1159,
                columnNumber: 112
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ul, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                            href: "https://www.meilisearch.com/docs",
                            children: "Meilisearch Documentation"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 1159,
                            columnNumber: 217
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1159,
                        columnNumber: 201
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                            href: "https://github.com/meilisearch/meilisearch-js",
                            children: "JavaScript SDK Guide"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 1159,
                            columnNumber: 356
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1159,
                        columnNumber: 340
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                            href: "/docs/contributing",
                            children: "Contributing to BetterGov"
                        }, void 0, false, {
                            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                            lineNumber: 1159,
                            columnNumber: 503
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1159,
                        columnNumber: 487
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1159,
                columnNumber: 179
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.h2, {
                id: "need-help",
                children: "Need Help?"
            }, void 0, false, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1159,
                columnNumber: 635
            }, this),
            "\n",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.ol, {
                children: [
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "Check the troubleshooting section above"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1159,
                        columnNumber: 725
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Search ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://github.com/bettergovph/bettergov/issues",
                                children: "GitHub issues"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1159,
                                columnNumber: 834
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1159,
                        columnNumber: 807
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: [
                            "Ask in our ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.a, {
                                href: "https://discord.gg/mHtThpN8bT",
                                children: "Discord community"
                            }, void 0, false, {
                                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                                lineNumber: 1159,
                                columnNumber: 991
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1159,
                        columnNumber: 960
                    }, this),
                    "\n",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(_components.li, {
                        children: "Open a new issue if you found a bug"
                    }, void 0, false, {
                        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                        lineNumber: 1159,
                        columnNumber: 1103
                    }, this),
                    "\n"
                ]
            }, void 0, true, {
                fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
                lineNumber: 1159,
                columnNumber: 703
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
            fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
            lineNumber: 1163,
            columnNumber: 44
        }, this)
    }, void 0, false, {
        fileName: "[project]/content/docs/meilisearch.mdx.js?collection=docs&hash=1759350457685",
        lineNumber: 1163,
        columnNumber: 22
    }, this) : _createMdxContent(props);
}
}),
];

//# sourceMappingURL=content_docs_meilisearch_mdx_58a2102c.js.map