(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/starter/components/provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarknetProvider",
    ()=>StarknetProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/starter/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/starter/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/starter/node_modules/@starknet-react/chains/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/starter/node_modules/@starknet-react/core/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function StarknetProvider({ children }) {
    _s();
    const { connectors } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInjectedConnectors"])({
        // Show these connectors if the user has no connector installed.
        recommended: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ready"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["braavos"])()
        ],
        // Hide recommended connectors if the user has any connector installed.
        includeRecommended: "always",
        // Randomize the order of the connectors.
        order: "alphabetical"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarknetConfig"], {
        chains: [
            __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$chains$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"]
        ],
        provider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsonRpcProvider"])({
            rpc: ()=>{
                return {
                    nodeUrl: ("TURBOPACK compile-time value", "https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_10/BzVf4CMWd3l0HywOXtpZR") ?? ""
                };
            }
        }),
        connectors: connectors,
        autoConnect: true,
        explorer: __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["voyager"],
        paymasterProvider: (0, __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paymasterRpcProvider"])({
            rpc: ()=>{
                return {
                    nodeUrl: "https://starknet.paymaster.avnu.fi",
                    headers: {
                        "x-paymaster-api-key": __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.AVNU_API_KEY ?? ""
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
_s(StarknetProvider, "QIZFWVyP7rhWJtKTvwXbbiIUgHo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$starter$2f$node_modules$2f40$starknet$2d$react$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInjectedConnectors"]
    ];
});
_c = StarknetProvider;
var _c;
__turbopack_context__.k.register(_c, "StarknetProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=starter_components_provider_tsx_1dcf6b86._.js.map