(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const WHATSAPP_NUMBER = "918985529081";
const products = [
    {
        id: 1,
        name: "Nurse Dress - Female",
        category: "Uniforms",
        colors: [
            "Pink",
            "Blue",
            "Green",
            "Purple"
        ],
        sizes: [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40",
            "42",
            "44"
        ],
        fabric: "Terry-Cotton",
        price: "Rs 625",
        tag: "Bestseller"
    },
    {
        id: 2,
        name: "Ward Boy - Payjama",
        category: "Uniforms",
        colors: [
            "Navy Blue",
            "Grey"
        ],
        sizes: [
            "32",
            "34",
            "36",
            "38",
            "40",
            "42",
            "44"
        ],
        fabric: "Terry-Cotton",
        price: "Rs 540",
        tag: null
    },
    {
        id: 3,
        name: "Ward Boy - Pant",
        category: "Uniforms",
        colors: [
            "Navy Blue",
            "Grey"
        ],
        sizes: [
            "32",
            "34",
            "36",
            "38",
            "40",
            "42",
            "44"
        ],
        fabric: "Terry-Cotton",
        price: "Rs 680",
        tag: null
    },
    {
        id: 4,
        name: "Scrub Suit / OT Wear",
        category: "OT & Surgical",
        colors: [
            "Blue",
            "Green",
            "Pink"
        ],
        sizes: [
            "32",
            "34",
            "36",
            "38",
            "40",
            "42",
            "44"
        ],
        fabric: "Terry-Cotton - 180 GSM",
        price: "Rs 395",
        tag: "Unisex"
    },
    {
        id: 5,
        name: "Aprons - Full Sleeves",
        category: "Aprons",
        colors: [
            "White"
        ],
        sizes: [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40",
            "42",
            "44"
        ],
        fabric: "Terry-Cotton",
        price: "Rs 385",
        tag: null
    },
    {
        id: 6,
        name: "Aprons - Half Sleeves",
        category: "Aprons",
        colors: [
            "White"
        ],
        sizes: [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40",
            "42",
            "44"
        ],
        fabric: "Terry-Cotton",
        price: "Rs 325",
        tag: null
    },
    {
        id: 7,
        name: "Doctor's Apron (Knee Length)",
        category: "Aprons",
        colors: [
            "White"
        ],
        sizes: [
            "28",
            "30",
            "32",
            "34",
            "36",
            "38",
            "40",
            "42",
            "44"
        ],
        fabric: "Terry-Cotton",
        price: "On Request",
        tag: "Premium"
    },
    {
        id: 8,
        name: "OT Gown - Cotton",
        category: "OT & Surgical",
        colors: [
            "Green"
        ],
        sizes: [
            'Free Size - 48"'
        ],
        fabric: "Pure Cotton VAT Dyed",
        price: "Rs 450",
        tag: null
    },
    {
        id: 9,
        name: "OT Gown - Terry-Cotton",
        category: "OT & Surgical",
        colors: [
            "Green"
        ],
        sizes: [
            'Free Size - 48"'
        ],
        fabric: "Terry-Cotton",
        price: "Rs 425",
        tag: null
    },
    {
        id: 10,
        name: "OT Gown - Overlapping Cotton",
        category: "OT & Surgical",
        colors: [
            "Green"
        ],
        sizes: [
            'Free Size - 48"'
        ],
        fabric: "Thick Casement Cotton",
        price: "Rs 525",
        tag: null
    },
    {
        id: 11,
        name: "OT Gown - Overlapping Terry",
        category: "OT & Surgical",
        colors: [
            "Green"
        ],
        sizes: [
            'Free Size - 48"'
        ],
        fabric: "Terry-Cotton",
        price: "Rs 490",
        tag: null
    },
    {
        id: 12,
        name: "Ladies / Ayamma Gown",
        category: "Patient Care",
        colors: [
            "Multiple"
        ],
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        fabric: "Terry-Cotton",
        price: "Rs 360",
        tag: null
    },
    {
        id: 13,
        name: "Nightie / Ayamma Gown",
        category: "Patient Care",
        colors: [
            "Multiple"
        ],
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        fabric: "Terry-Cotton",
        price: "Rs 360",
        tag: null
    },
    {
        id: 14,
        name: "Patient Gown",
        category: "Patient Care",
        colors: [
            "Blue",
            "Green",
            "Maroon",
            "Purple"
        ],
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        fabric: "Polyester Viscose - Checks",
        price: "Rs 290",
        tag: null
    },
    {
        id: 15,
        name: "Attendant Gown",
        category: "Patient Care",
        colors: [
            "Blue",
            "Green",
            "Maroon",
            "Purple"
        ],
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        fabric: "Polyester Viscose - Checks",
        price: "Rs 320",
        tag: null
    },
    {
        id: 16,
        name: "Patient Dress (Shirt + Pant)",
        category: "Patient Care",
        colors: [
            "Blue",
            "Green",
            "Maroon",
            "Purple"
        ],
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        fabric: "Polyester Viscose",
        price: "Rs 370",
        tag: null
    },
    {
        id: 17,
        name: "Ayamma Sarees - Plain",
        category: "Sarees",
        colors: [
            "Navy Blue",
            "Maroon",
            "Sky Blue",
            "Grey"
        ],
        sizes: [
            "Standard"
        ],
        fabric: "Chiffon / Georgette",
        price: "Rs 245",
        tag: null
    },
    {
        id: 18,
        name: "Receptionist Fancy Sarees",
        category: "Sarees",
        colors: [
            "Multiple"
        ],
        sizes: [
            "Standard"
        ],
        fabric: "Fancy & Formal",
        price: "On Request",
        tag: "Premium"
    },
    {
        id: 19,
        name: "Executive Shirts",
        category: "Corporate",
        colors: [
            "Assorted"
        ],
        sizes: [
            "32",
            "34",
            "36",
            "38",
            "40",
            "42"
        ],
        fabric: "Polyester Cotton",
        price: "Rs 325",
        tag: null
    },
    {
        id: 20,
        name: "Safari Suit",
        category: "Corporate",
        colors: [
            "Assorted"
        ],
        sizes: [
            "32",
            "34",
            "36",
            "38",
            "40",
            "42"
        ],
        fabric: "Terry-Cotton Blend",
        price: "Rs 1575",
        tag: "Premium"
    },
    {
        id: 21,
        name: "Security Dress - Male",
        category: "Security",
        colors: [
            "Navy Blue",
            "Sky Blue"
        ],
        sizes: [
            "32",
            "34",
            "36",
            "38",
            "40",
            "42"
        ],
        fabric: "Terry-Cotton Blend",
        price: "Rs 750",
        tag: null
    },
    {
        id: 22,
        name: "Security Dress - Female",
        category: "Security",
        colors: [
            "Sky Blue",
            "Navy Blue"
        ],
        sizes: [
            "32",
            "34",
            "36",
            "38",
            "40",
            "42"
        ],
        fabric: "Spun Kurti + Payjama",
        price: "Rs 570",
        tag: null
    },
    {
        id: 23,
        name: "Bedsheet - White Standard",
        category: "Linen",
        colors: [
            "White"
        ],
        sizes: [
            '55"x90"'
        ],
        fabric: "100 TC",
        price: "Rs 135",
        tag: null
    },
    {
        id: 24,
        name: "Bedsheet - White Superior",
        category: "Linen",
        colors: [
            "White"
        ],
        sizes: [
            '58"x90"'
        ],
        fabric: "145 TC",
        price: "Rs 190",
        tag: null
    },
    {
        id: 25,
        name: "Bedsheet - Colour Superior",
        category: "Linen",
        colors: [
            "Blue",
            "Green",
            "Pink"
        ],
        sizes: [
            '58"x90"'
        ],
        fabric: "150 TC",
        price: "Rs 265",
        tag: null
    },
    {
        id: 26,
        name: "Blanket - Single",
        category: "Linen",
        colors: [
            "Camel",
            "Navy Blue",
            "Maroon",
            "Brown"
        ],
        sizes: [
            "1 KG"
        ],
        fabric: "Plain Smooth",
        price: "Rs 265",
        tag: null
    },
    {
        id: 27,
        name: "Ortho Linen - Large Towel",
        category: "Ortho Linen",
        colors: [
            "Green"
        ],
        sizes: [
            '58"x80"'
        ],
        fabric: "Pure Cotton Casement",
        price: "Rs 210",
        tag: null
    },
    {
        id: 28,
        name: "Ortho Linen - Medium Towel",
        category: "Ortho Linen",
        colors: [
            "Green"
        ],
        sizes: [
            '58"x40"'
        ],
        fabric: "Pure Cotton Casement",
        price: "Rs 110",
        tag: null
    },
    {
        id: 29,
        name: "Ortho Linen - Small Towel",
        category: "Ortho Linen",
        colors: [
            "Green"
        ],
        sizes: [
            '29"x29"'
        ],
        fabric: "Pure Cotton Casement",
        price: "Rs 60",
        tag: null
    },
    {
        id: 30,
        name: "Ortho Linen - Hand Towel",
        category: "Ortho Linen",
        colors: [
            "Green",
            "Navy Blue",
            "Sky Blue"
        ],
        sizes: [
            '14"x14"'
        ],
        fabric: "Pure Cotton Casement",
        price: "Rs 15",
        tag: null
    },
    {
        id: 31,
        name: "OT Wrapping Towel - Small",
        category: "OT & Surgical",
        colors: [
            "Green",
            "Navy Blue",
            "Sky Blue"
        ],
        sizes: [
            '29"x29"'
        ],
        fabric: "Pure Cotton Casement",
        price: "Rs 65",
        tag: null
    },
    {
        id: 32,
        name: "OT Wrapping Towel - Medium",
        category: "OT & Surgical",
        colors: [
            "Green",
            "Navy Blue",
            "Sky Blue"
        ],
        sizes: [
            '40"x58"'
        ],
        fabric: "Pure Cotton Casement",
        price: "Rs 145",
        tag: null
    },
    {
        id: 33,
        name: "Draw Sheets / Surgical Drapes",
        category: "OT & Surgical",
        colors: [
            "Green",
            "Navy Blue",
            "Sky Blue"
        ],
        sizes: [
            '58"x58"'
        ],
        fabric: "Pure Cotton Casement",
        price: "Rs 179",
        tag: null
    },
    {
        id: 34,
        name: "Hospital Curtains",
        category: "Curtains & Blinds",
        colors: [
            "Blue",
            "Green",
            "Cream",
            "White"
        ],
        sizes: [
            "Rs 14/sqft"
        ],
        fabric: "Stripes/Zigzag + Net",
        price: "Rs 14/sqft",
        tag: null
    },
    {
        id: 35,
        name: "Net (Square / Oval)",
        category: "Curtains & Blinds",
        colors: [
            "Cream",
            "White"
        ],
        sizes: [
            "Square",
            "Oval"
        ],
        fabric: "Net Cloth",
        price: "Rs 585",
        tag: null
    },
    {
        id: 36,
        name: "Curtain Track Runners",
        category: "Curtains & Blinds",
        colors: [
            "White"
        ],
        sizes: [
            "Standard"
        ],
        fabric: "Best Quality",
        price: "Rs 135",
        tag: null
    },
    {
        id: 37,
        name: "Curtain Runner Hooks",
        category: "Curtains & Blinds",
        colors: [
            "Silver"
        ],
        sizes: [
            "Per Piece"
        ],
        fabric: "Metal",
        price: "Rs 3.50/pc",
        tag: null
    },
    {
        id: 38,
        name: "Curtain Fittings Set",
        category: "Curtains & Blinds",
        colors: [
            "White"
        ],
        sizes: [
            "Per Set"
        ],
        fabric: "Best Quality",
        price: "Rs 45/set",
        tag: null
    },
    {
        id: 39,
        name: "Vertical / Roller / Roman Blinds",
        category: "Curtains & Blinds",
        colors: [
            "Various"
        ],
        sizes: [
            "Custom"
        ],
        fabric: "All Varieties",
        price: "On Request",
        tag: null
    },
    {
        id: 40,
        name: "Bath Mats / Door Mats",
        category: "Linen",
        colors: [
            "Various"
        ],
        sizes: [
            "Standard"
        ],
        fabric: "Best Quality",
        price: "On Request",
        tag: null
    },
    {
        id: 41,
        name: "Cloth Mask",
        category: "PPE",
        colors: [
            "Various"
        ],
        sizes: [
            "Free Size"
        ],
        fabric: "Terry-Cotton Single Layer",
        price: "On Request",
        tag: null
    },
    {
        id: 42,
        name: "Disposable Isolation Gowns",
        category: "PPE",
        colors: [
            "Blue"
        ],
        sizes: [
            "Free Size"
        ],
        fabric: "Non-Woven 40 GSM",
        price: "Rs 32/pc",
        tag: null
    }
];
const categories = [
    "All",
    ...Array.from(new Set(products.map((p)=>p.category)))
];
const brandSlots = [
    "Hospital Group",
    "Clinic Chain",
    "Corporate",
    "Diagnostics",
    "Hospitality",
    "Education"
];
const colorMap = {
    Pink: "bg-pink-400",
    Blue: "bg-blue-500",
    Green: "bg-green-600",
    Purple: "bg-purple-500",
    White: "bg-white border border-gray-300",
    "Navy Blue": "bg-blue-900",
    Grey: "bg-gray-400",
    Maroon: "bg-red-800",
    Camel: "bg-yellow-600",
    Brown: "bg-amber-900",
    "Sky Blue": "bg-sky-400",
    Silver: "bg-gray-300",
    Cream: "bg-amber-100 border border-gray-300",
    Multiple: "bg-gradient-to-r from-pink-400 via-green-400 to-blue-400",
    Assorted: "bg-gradient-to-r from-gray-400 to-gray-600",
    Various: "bg-gradient-to-r from-orange-300 to-orange-500"
};
function buildQuoteLink(cartItems) {
    const message = cartItems.length > 0 ? `Hi Codewear, I want a quote for:\n\n${cartItems.map((item, index)=>`${index + 1}. ${item.name} - ${item.price}`).join("\n")}\n\nPlease share availability, sizes, and bulk pricing.` : "Hi Codewear, I want a custom quote for hospital uniforms and textiles.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function Home() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const filtered = activeCategory === "All" ? products : products.filter((p)=>p.category === activeCategory);
    const cartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[cartItems]": ()=>cart.map({
                "Home.useMemo[cartItems]": (id)=>products.find({
                        "Home.useMemo[cartItems]": (product)=>product.id === id
                    }["Home.useMemo[cartItems]"])
            }["Home.useMemo[cartItems]"]).filter({
                "Home.useMemo[cartItems]": (product)=>Boolean(product)
            }["Home.useMemo[cartItems]"])
    }["Home.useMemo[cartItems]"], [
        cart
    ]);
    const quoteLink = buildQuoteLink(cartItems);
    function addToCart(productId) {
        setCart((current)=>current.includes(productId) ? current : [
                ...current,
                productId
            ]);
    }
    function removeFromCart(productId) {
        setCart((current)=>current.filter((id)=>id !== productId));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#fbfaf8] text-[#24110c]",
        style: {
            fontFamily: "Aptos, 'Segoe UI', Arial, sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "fixed left-0 right-0 top-0 z-50 border-b border-black/5 bg-[#fbfaf8]/90 backdrop-blur-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#f55a00] text-xl font-black text-white",
                                    children: "*"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-xl font-semibold tracking-[-0.02em]",
                                            children: "codewear"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-[10px] font-medium uppercase tracking-[0.28em] text-[#8d756c]",
                                            children: "Hospital Textiles"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-7 text-sm font-medium text-[#5c4038] sm:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#brands",
                                    className: "transition hover:text-[#f55a00]",
                                    children: "Brands"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#products",
                                    className: "transition hover:text-[#f55a00]",
                                    children: "Products"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#quote",
                                    className: "transition hover:text-[#f55a00]",
                                    children: "Quote"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: quoteLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "rounded-full bg-[#f55a00] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(245,90,0,0.2)] transition hover:bg-[#d94e00]",
                            children: "Get Quote"
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pt-[73px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-6 text-sm font-medium uppercase tracking-[0.32em] text-[#8d756c]",
                                        children: "Professional. Reliable. Global."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "max-w-3xl text-[clamp(3.1rem,8vw,7.2rem)] font-light leading-[0.98] tracking-[-0.04em] text-[#f55a00]",
                                        children: "Uniforms that carry your brand."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-8 max-w-xl text-lg leading-8 text-[#5c4038]",
                                        children: "Premium hospital uniforms, OT wear, linens, curtains, and custom stitched textiles for bulk and small orders."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-9 flex flex-col gap-3 sm:flex-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#products",
                                                className: "rounded-full bg-[#24110c] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#3a2017]",
                                                children: "View Products"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#brands",
                                                className: "rounded-full border border-[#24110c]/15 px-7 py-3.5 text-center text-sm font-semibold text-[#24110c] transition hover:border-[#f55a00] hover:text-[#f55a00]",
                                                children: "Our Brands"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -left-8 -top-8 z-10 hidden h-32 w-32 items-center justify-center rounded-full bg-[#f55a00] text-center text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-2xl lg:flex",
                                        children: "Codewear"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-hidden rounded-[34px] bg-[#f2e7df] shadow-[0_24px_80px_rgba(60,27,12,0.12)]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/hero-placeholder.svg",
                                            alt: "Codewear tailoring placeholder",
                                            className: "h-[360px] w-full object-cover sm:h-[520px]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "border-y border-[#f0e2d8] bg-white px-5 py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-3 text-sm font-medium uppercase tracking-[0.28em] text-[#f55a00]",
                                            children: "What we deliver"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-light leading-tight tracking-[-0.03em] text-[#24110c] sm:text-5xl",
                                            children: "More than uniforms, we deliver confidence."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-3xl text-lg leading-9 text-[#5c4038]",
                                    children: "Codewear supports hospitals, clinics, hotels, schools, corporates, and manufacturing teams with dependable fabrics, clean finishing, logo-ready production, and pan India delivery."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "brands",
                        className: "bg-[#fbfaf8] px-5 py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-10 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-3 text-sm font-medium uppercase tracking-[0.28em] text-[#8d756c]",
                                            children: "Our Brands"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-light tracking-[-0.03em] text-[#f55a00] sm:text-6xl",
                                            children: "Industries We Serve"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6",
                                    children: brandSlots.map((brand, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex h-36 items-center justify-center rounded-2xl border border-[#eadbd0] bg-white p-5 shadow-[0_12px_40px_rgba(60,27,12,0.05)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: `/brand-placeholder-${index + 1}.svg`,
                                                alt: `${brand} logo placeholder`,
                                                className: "max-h-20 w-full object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this)
                                        }, brand, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "products",
                        className: "bg-[#0a0a0a] px-5 py-16 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-9 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-3 text-sm font-medium uppercase tracking-[0.28em] text-white/35",
                                            children: "Catalogue"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-light tracking-[-0.03em] text-white sm:text-6xl",
                                            children: [
                                                "Our ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#f55a00]",
                                                    children: "Products"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-sm text-white/35",
                                            children: "Add products to cart, then send the whole quote list on WhatsApp."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-10 flex gap-2 overflow-x-auto pb-3",
                                    style: {
                                        scrollbarWidth: "none"
                                    },
                                    children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveCategory(cat),
                                            className: `flex-shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === cat ? "bg-[#f55a00] text-white" : "border border-white/10 bg-white/[0.04] text-white/45 hover:bg-white/10"}`,
                                            children: cat
                                        }, cat, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
                                    children: filtered.map((product)=>{
                                        const inCart = cart.includes(product.id);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "group overflow-hidden rounded-[22px] border border-white/[0.08] bg-white/[0.035] transition hover:border-[#f55a00]/50 hover:bg-white/[0.06]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-[4/3] bg-[#171717]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/product-placeholder.svg",
                                                            alt: `${product.name} placeholder`,
                                                            className: "h-full w-full object-cover opacity-90 transition group-hover:scale-[1.03]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 23
                                                        }, this),
                                                        product.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute right-3 top-3 rounded-full bg-[#f55a00] px-3 py-1 text-[10px] font-bold text-white",
                                                            children: product.tag
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 39
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "min-h-10 text-lg font-semibold leading-tight text-white",
                                                            children: product.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-sm text-white/35",
                                                            children: product.fabric
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 flex flex-wrap items-center gap-1.5",
                                                            children: product.colors.slice(0, 5).map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    title: color,
                                                                    className: `h-3.5 w-3.5 rounded-full ${colorMap[color] || "bg-orange-400"}`
                                                                }, color, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 flex flex-wrap gap-1.5",
                                                            children: [
                                                                product.sizes.slice(0, 5).map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "rounded-md bg-white/[0.07] px-2 py-1 text-[11px] font-medium text-white/45",
                                                                        children: size
                                                                    }, size, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 27
                                                                    }, this)),
                                                                product.sizes.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-1 py-1 text-[11px] text-white/30",
                                                                    children: [
                                                                        "+",
                                                                        product.sizes.length - 5
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 227,
                                                                    columnNumber: 54
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl font-bold text-[#f55a00]",
                                                                    children: product.price
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 230,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>addToCart(product.id),
                                                                    disabled: inCart,
                                                                    className: `rounded-full px-4 py-2 text-xs font-bold transition ${inCart ? "bg-white/10 text-white/35" : "bg-white text-[#111] hover:bg-[#f55a00] hover:text-white"}`,
                                                                    children: inCart ? "Added" : "Add to Cart"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 215,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, product.id, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 210,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "quote",
                        className: "bg-white px-5 py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-4xl rounded-[28px] bg-[#f55a00] p-8 text-center text-white shadow-[0_24px_70px_rgba(245,90,0,0.2)] sm:p-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-white/70",
                                    children: "Quote Cart"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-light tracking-[-0.03em] sm:text-5xl",
                                    children: "Ready for a bulk quote?"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75",
                                    children: "Add products from the catalogue and send the full cart to WhatsApp in one message."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: quoteLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#f55a00] transition hover:scale-[1.03]",
                                    children: "Send Quote on WhatsApp"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-x-3 bottom-3 z-50 mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#14100e]/95 p-3 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-semibold",
                                    children: [
                                        cartItems.length,
                                        " product",
                                        cartItems.length > 1 ? "s" : "",
                                        " in quote cart"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 flex flex-wrap gap-2",
                                    children: [
                                        cartItems.slice(0, 4).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>removeFromCart(item.id),
                                                className: "rounded-full bg-white/8 px-3 py-1 text-xs text-white/65 hover:bg-white/15",
                                                children: [
                                                    item.name,
                                                    " x"
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, this)),
                                        cartItems.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-2 py-1 text-xs text-white/45",
                                            children: [
                                                "+",
                                                cartItems.length - 4,
                                                " more"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 275,
                                            columnNumber: 42
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setCart([]),
                                    className: "rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-white/60 hover:text-white",
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: quoteLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "rounded-full bg-[#25D366] px-5 py-2 text-xs font-bold text-white transition hover:bg-[#20bd5a]",
                                    children: "Get Quote"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 278,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 266,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 265,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_s(Home, "sYo0p8zMtIJw5iOxGyVgDm/Sxpw=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_0rv5pxl._.js.map