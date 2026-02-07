module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/starter/components/provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarknetProvider",
    ()=>StarknetProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/starter/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/starter/node_modules/@starknet-react/chains/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/starter/node_modules/@starknet-react/core/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function StarknetProvider({ children }) {
    const { connectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInjectedConnectors"])({
        // Show these connectors if the user has no connector installed.
        recommended: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ready"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["braavos"])()
        ],
        // Hide recommended connectors if the user has any connector installed.
        includeRecommended: "always",
        // Randomize the order of the connectors.
        order: "alphabetical"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StarknetConfig"], {
        chains: [
            __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepolia"]
        ],
        provider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonRpcProvider"])({
            rpc: ()=>{
                return {
                    nodeUrl: ("TURBOPACK compile-time value", "https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_10/BzVf4CMWd3l0HywOXtpZR") ?? ""
                };
            }
        }),
        connectors: connectors,
        explorer: __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyager"],
        paymasterProvider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paymasterRpcProvider"])({
            rpc: ()=>{
                return {
                    nodeUrl: "https://starknet.paymaster.avnu.fi",
                    headers: {
                        "x-paymaster-api-key": process.env.AVNU_API_KEY ?? ""
                    }
                };
            }
        }),
        children: children
    }, void 0, false, {
        fileName: "[project]/starter/components/provider.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__52236bdc._.js.map