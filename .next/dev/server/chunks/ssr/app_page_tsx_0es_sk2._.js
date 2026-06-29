module.exports = [
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
;
const WHATSAPP_NUMBER = "918985529081";
const products = [
    {
        id: 1,
        name: "Hospital Nurse Uniform",
        category: "Uniforms",
        colors: [
            "White",
            "Pink",
            "Blue",
            "Green"
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
        fabric: "Cotton + Poly Cotton",
        price: "Rs 550",
        tag: null
    },
    {
        id: 3,
        name: "PVC Hospital Plastic Apron",
        category: "Aprons",
        colors: [
            "White",
            "Blue"
        ],
        sizes: [
            "Free Size"
        ],
        fabric: "LDPE Plastic / Disposable Safety Apron",
        price: "Rs 395",
        tag: null
    },
    {
        id: 4,
        name: "Doctor Scrub Suit",
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
        fabric: "Poly Cotton / Hospital-Grade Scrub Fabric",
        price: "Rs 695/set",
        tag: null
    },
    {
        id: 7,
        name: "Unisex Full Length Patient Gowns",
        category: "Patient Care",
        colors: [
            "Blue",
            "Green",
            "White"
        ],
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        fabric: "Cotton-Polyester Blended Patient Gown Fabric",
        price: "Rs 385",
        tag: "Unisex"
    },
    {
        id: 8,
        name: "Disposable Isolation Gowns",
        category: "PPE",
        colors: [
            "White",
            "Blue"
        ],
        sizes: [
            "Free Size"
        ],
        fabric: "Non-Woven Disposable Medical Fabric",
        price: "Rs 58",
        tag: null
    },
    {
        id: 9,
        name: "Housekeeping Uniform",
        category: "Uniforms",
        colors: [
            "Blue",
            "Green",
            "Grey"
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
        fabric: "Polyester-Cotton Uniform Fabric",
        price: "Rs 625/set",
        tag: null
    },
    {
        id: 12,
        name: "Non Woven Disposable Gown",
        category: "PPE",
        colors: [
            "White",
            "Blue"
        ],
        sizes: [
            "Free Size"
        ],
        fabric: "Non-Woven PP Medical Disposable Fabric",
        price: "Rs 58",
        tag: null
    },
    {
        id: 13,
        name: "Normal OT Gown",
        category: "OT & Surgical",
        colors: [
            "Green",
            "Blue"
        ],
        sizes: [
            'Free Size - 48"'
        ],
        fabric: "OT-Grade Cotton/Poly-Viscose Hospital Fabric",
        price: "Rs 495",
        tag: null
    },
    {
        id: 14,
        name: "Overlapping OT Gown",
        category: "OT & Surgical",
        colors: [
            "Green",
            "Blue"
        ],
        sizes: [
            'Free Size - 48"'
        ],
        fabric: "OT-Grade Cotton/Poly-Viscose Hospital Fabric",
        price: "Rs 485",
        tag: null
    },
    {
        id: 15,
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
        fabric: "Cotton-Polyester Blended Patient Wear Fabric",
        price: "Rs 395",
        tag: null
    },
    {
        id: 16,
        name: "Attendant Disposable Gown",
        category: "Patient Care",
        colors: [
            "White",
            "Blue"
        ],
        sizes: [
            "Free Size"
        ],
        fabric: "Disposable Non-Woven Medical Fabric",
        price: "Rs 325",
        tag: null
    },
    {
        id: 17,
        name: "Embroidery",
        category: "Services",
        colors: [
            "Custom"
        ],
        sizes: [
            "Per Design"
        ],
        fabric: "Cotton + Poly Cotton Base",
        price: "Rs 20/Design",
        tag: null
    },
    {
        id: 18,
        name: "Hospital Executive Pant And Shirt Uniform",
        category: "Corporate",
        colors: [
            "White",
            "Blue",
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
        fabric: "Poly Cotton",
        price: "Rs 700/set",
        tag: null
    },
    {
        id: 19,
        name: "Receptionist Uniform Sarees",
        category: "Sarees",
        colors: [
            "Multiple"
        ],
        sizes: [
            "Standard"
        ],
        fabric: "Polyester-Viscose Saree Fabric With Smooth Drape",
        price: "Rs 480",
        tag: null
    },
    {
        id: 20,
        name: "Printed Uniform Saree Crepee",
        category: "Sarees",
        colors: [
            "Multiple"
        ],
        sizes: [
            "Standard"
        ],
        fabric: "Printed Crepe Fabric",
        price: "Rs 390",
        tag: null
    },
    {
        id: 21,
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
        id: 23,
        name: "Ward Boy - Pair",
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
        id: 24,
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
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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
        id: 32,
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
        id: 33,
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
        id: 34,
        name: "Patient Gown (Checks)",
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
        id: 37,
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
        id: 38,
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
        id: 39,
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
        id: 40,
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
        id: 41,
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
        id: 42,
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
        id: 43,
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
        id: 44,
        name: "Bedsheet - Poly Cotton",
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
        id: 45,
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
        id: 46,
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
        id: 47,
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
        id: 48,
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
        id: 49,
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
        id: 50,
        name: "Ortho Linen - Hole Towel",
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
        id: 51,
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
        id: 52,
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
        id: 53,
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
        id: 54,
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
        id: 55,
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
        id: 56,
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
        id: 57,
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
        id: 58,
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
        id: 59,
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
        id: 60,
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
        id: 61,
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
        id: 62,
        name: "Disposable Isolation Gowns (40 GSM)",
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
const clientLogos = [
    {
        name: "Client 1",
        src: "/client1.png"
    },
    {
        name: "Client 2",
        src: "/clients%20(1).jpeg"
    },
    {
        name: "Client 3",
        src: "/clients%20(1).jpg"
    },
    {
        name: "Client 4",
        src: "/clients%20(1).png"
    },
    {
        name: "Client 5",
        src: "/clients%20(2).png"
    },
    {
        name: "Client 6",
        src: "/clients%20(3).png"
    },
    {
        name: "Client 7",
        src: "/clients%20(4).png"
    },
    {
        name: "PACE Hospitals",
        src: "/PACE+Hospitals-+Hyderabad-+India+-+Logo.png"
    }
];
const serviceHighlights = [
    "100% Customised Colour",
    "Customised Stitching",
    "Bulk Orders",
    "Pan India Delivery"
];
const trustSignals = [
    "Hospital uniforms",
    "OT wear",
    "Linens",
    "Curtains"
];
const MINIMUM_ORDER_QUANTITY = 50;
const ORDER_TYPES = [
    "Bulk order",
    "Custom stitching",
    "Logo branding"
];
const CART_NOTICE = `Minimum order is ${MINIMUM_ORDER_QUANTITY} pcs per product. GST and transportation charges will be additional as applicable.`;
const hospitalColours = [
    {
        name: "White",
        className: "bg-white border border-white/70"
    },
    {
        name: "Sky Blue",
        className: "bg-sky-400"
    },
    {
        name: "Scrub Green",
        className: "bg-emerald-600"
    },
    {
        name: "Navy",
        className: "bg-blue-900"
    },
    {
        name: "Grey",
        className: "bg-gray-400"
    }
];
const productImages = {
    // Hospital Nurse Uniform
    1: [
        "/uniforms/nurseuniforms%20(1).jpeg",
        "/uniforms/nurseuniforms%20(2).jpeg",
        "/uniforms/nurseuniforms%20(3).jpeg",
        "/uniforms/nurseuniforms%20(4).jpeg",
        "/uniforms/nurseuniforms%20(5).jpeg"
    ],
    // PVC Hospital Plastic Apron
    3: [
        "/uniforms/aprons%20(1).jpeg",
        "/uniforms/aprons%20(2).jpeg",
        "/uniforms/aprons%20(3).jpeg",
        "/uniforms/aprons%20(4).jpeg",
        "/uniforms/aprons%20(5).jpeg",
        "/uniforms/aprons%20(6).jpeg",
        "/uniforms/aprons%20(7).jpeg",
        "/uniforms/aprons%20(8).jpeg"
    ],
    // Doctor Scrub Suit
    4: [
        "/uniforms/scrubsuit%20(1).jpeg",
        "/uniforms/scrubsuit%20(2).jpeg",
        "/uniforms/scrubsuit%20(3).jpeg",
        "/uniforms/scrubsuit%20(4).jpeg",
        "/uniforms/scrubsuit%20(5).jpeg"
    ],
    // Unisex Full Length Patient Gowns
    7: [
        "/uniforms/Hospital%20Patient%20Gowns%20(1).jpeg",
        "/uniforms/Hospital%20Patient%20Gowns%20(2).jpeg",
        "/uniforms/Hospital%20Patient%20Gowns%20(3).jpeg",
        "/uniforms/Hospital%20Patient%20Gowns%20(4).jpeg",
        "/uniforms/Hospital%20Patient%20Gowns%20(5).jpeg",
        "/uniforms/Hospital%20Patient%20Gowns%20(6).jpeg",
        "/uniforms/Hospital%20Patient%20Gowns%20(7).jpeg"
    ],
    // Disposable Isolation Gowns
    8: [
        "/uniforms/Disposable%20Isolation%20Gowns%20(1).jpeg",
        "/uniforms/Disposable%20Isolation%20Gowns%20(2).jpeg"
    ],
    // Housekeeping Uniform
    9: [
        "/uniforms/House%20keeping%20Uniforms%20(2).jpeg",
        "/uniforms/House%20keeping%20Uniforms%20(3).jpeg",
        "/uniforms/House%20keeping%20Uniforms%20(4).jpeg",
        "/uniforms/House%20keeping%20Uniforms%20(5).jpeg",
        "/uniforms/House%20keeping%20Uniforms%20(6).jpeg"
    ],
    // Non Woven Disposable Gown
    12: [
        "/uniforms/Non%20Woven%20Disposable%20Gown.jpeg"
    ],
    // Normal OT Gown
    13: [
        "/uniforms/Normal%20OT%20Gown.jpeg"
    ],
    // Overlapping OT Gown
    14: [
        "/uniforms/Overlapping%20OT%20Gown.jpeg"
    ],
    // Patient Gown
    15: [
        "/uniforms/Hospital%20Patient%20Gowns%20(1).jpeg",
        "/uniforms/Hospital%20Patient%20Gowns%20(2).jpeg",
        "/uniforms/Hospital%20Patient%20Gowns%20(3).jpeg",
        "/uniforms/Hospital%20Patient%20Gowns%20(4).jpeg"
    ],
    // Attendant Disposable Gown
    16: [
        "/uniforms/Disposable%20Isolation%20Gowns%20(1).jpeg",
        "/uniforms/Disposable%20Isolation%20Gowns%20(2).jpeg"
    ],
    // Embroidery
    17: [
        "/uniforms/Embroidery%20(1).jpeg",
        "/uniforms/Embroidery%20(2).jpeg",
        "/uniforms/Embroidery%20(3).jpeg"
    ],
    // Hospital Executive Pant And Shirt
    18: [
        "/uniforms/Hospital%20Executive%20pant%20%26%20shirt.jpeg",
        "/uniforms/Hospital%20Executive%20pant%20%26%20shirt1.jpeg",
        "/uniforms/Hospital%20Officials%20executive%20shirt.jpeg"
    ],
    // Receptionist Uniform Sarees
    19: [
        "/uniforms/Reception%20Uniform%20Sarees..jpeg"
    ],
    // Printed Uniform Saree Crepee
    20: [
        "/uniforms/Printed%20uniform%20saree%20crepee.jpeg"
    ],
    // Nurse Dress - Female
    21: [
        "/nurse%20dress%20(1).jpeg",
        "/nurse%20dress%20(2).jpeg",
        "/nurse%20dress%20(3).jpeg",
        "/nurse%20dress%20(4).jpeg",
        "/nurse%20dress%20(5).jpeg",
        "/nurse%20dress%20(6).jpeg",
        "/nurse%20dress%20(7).jpeg"
    ],
    // Ward Boy - Pair
    23: [
        "/WARDBOY%20(1).jpeg",
        "/WARDBOY%20(2).jpeg",
        "/WARDBOY%20(3).jpeg",
        "/WARDBOY%20(4).jpeg",
        "/WARDBOY%20(5).jpeg"
    ],
    // Scrub Suit / OT Wear
    24: [
        "/uniforms/scrubsuit%20(1).jpeg",
        "/uniforms/scrubsuit%20(2).jpeg",
        "/uniforms/scrubsuit%20(3).jpeg",
        "/uniforms/scrubsuit%20(4).jpeg",
        "/uniforms/scrubsuit%20(5).jpeg"
    ],
    // Doctor's Apron (Knee Length)
    27: [
        "/uniforms/aprons%20(1).jpeg",
        "/uniforms/aprons%20(2).jpeg",
        "/uniforms/aprons%20(3).jpeg",
        "/uniforms/aprons%20(4).jpeg"
    ],
    // OT Gown - Cotton
    28: [
        "/uniforms/Normal%20OT%20Gown.jpeg"
    ],
    // OT Gown - Terry-Cotton
    29: [
        "/uniforms/Normal%20OT%20Gown.jpeg"
    ],
    // OT Gown - Overlapping Cotton
    30: [
        "/uniforms/OT%20Gown%20-%20Overlapping%20Cotton%20(1).jpeg",
        "/uniforms/OT%20Gown%20-%20Overlapping%20Cotton%20(2).jpeg",
        "/uniforms/OT%20Gown%20-%20Overlapping%20Cotton%20(3).jpeg",
        "/uniforms/OT%20Gown%20-%20Overlapping%20Cotton.jpeg"
    ],
    // Ladies / Ayamma Gown
    32: [
        "/uniforms/Ladies%20Ayamma%20Gown%20(1).jpeg",
        "/uniforms/Ladies%20Ayamma%20Gown%20(2).jpeg"
    ],
    // Nightie / Ayamma Gown
    33: [
        "/uniforms/Ladies%20Ayamma%20Gown%20(1).jpeg",
        "/uniforms/Ladies%20Ayamma%20Gown%20(2).jpeg"
    ],
    // Patient Gown (Checks)
    34: [
        "/uniforms/Hospital%20Patient%20Gowns%20(5).jpeg",
        "/uniforms/Hospital%20Patient%20Gowns%20(6).jpeg",
        "/uniforms/Hospital%20Patient%20Gowns%20(7).jpeg"
    ],
    // Ayamma Sarees - Plain
    37: [
        "/uniforms/Ayamma%20Saree.jpeg"
    ],
    // Receptionist Fancy Sarees
    38: [
        "/uniforms/Reception%20Uniform%20Sarees..jpeg"
    ],
    // Executive Shirts
    39: [
        "/uniforms/Hospital%20Officials%20executive%20shirt.jpeg"
    ],
    // Safari Suit
    40: [
        "/uniforms/House%20keeping%20Uniforms%20(1).png"
    ],
    // Security Dress - Male
    41: [
        "/uniforms/security%20dress%20(2).jpeg"
    ],
    // Security Dress - Female
    42: [
        "/uniforms/security%20dress%20female%20(1).jpeg",
        "/uniforms/security%20dress%20female%20(2).jpeg"
    ],
    // Bedsheet - White Standard
    43: [
        "/uniforms/Bedsheet%20-%20White%20Standard.jpeg"
    ],
    // Bedsheet - Poly Cotton
    44: [
        "/uniforms/Bedsheet%20-%20Poly%20Cotton.jpeg",
        "/uniforms/Bedsheet%20-%20Poly%20Cotton1.jpeg"
    ],
    // Bedsheet - Colour Superior
    45: [
        "/uniforms/bedsheet%20colour%20superior.jpeg"
    ],
    // Blanket - Single
    46: [
        "/uniforms/Hospital%20wool%20blanket.jpeg",
        "/uniforms/Merino%20wool%20Blankets%201.jpeg",
        "/uniforms/merino%20wool%20blankets.jpeg",
        "/uniforms/Plain%20fleece%20blanket%20-%20single.jpeg"
    ],
    // Ortho Linen - Large Towel
    47: [
        "/uniforms/Ortho%20linen%20-%20larger%20towel.jpeg"
    ],
    // Ortho Linen - Medium Towel
    48: [
        "/uniforms/Ortho%20linen%20-%20Medium%20Towel.jpeg"
    ],
    // Ortho Linen - Small Towel
    49: [
        "/uniforms/Ortho%20linen%20-%20Small%20Towel.jpeg"
    ],
    // Ortho Linen - Hole Towel
    50: [
        "/uniforms/Ortho%20linen%20-%20Hole%20Towel.jpeg"
    ],
    // OT Wrapping Towel - Small
    51: [
        "/uniforms/ot%20wrapping%20towels%20(1).jpeg",
        "/uniforms/ot%20wrapping%20towels%20(2).jpeg",
        "/uniforms/OT%20wrapping%20Towels..jpeg"
    ],
    // OT Wrapping Towel - Medium
    52: [
        "/uniforms/ot%20wrapping%20towels%20(1).jpeg",
        "/uniforms/ot%20wrapping%20towels%20(2).jpeg",
        "/uniforms/OT%20wrapping%20Towels..jpeg"
    ],
    // Draw Sheets / Surgical Drapes
    53: [
        "/uniforms/Draw%20sheets.jpeg"
    ],
    // Hospital Curtains
    54: [
        "/uniforms/Hospital%20Curtains%20(1).jpeg",
        "/uniforms/Hospital%20Curtains%20(2).jpeg",
        "/uniforms/Hospital%20Curtains%20(3).jpeg",
        "/uniforms/Hospital%20Curtains%20(4).jpeg",
        "/uniforms/Hospital%20Curtains%20(5).jpeg",
        "/uniforms/Hospital%20Curtains%20(6).jpeg",
        "/uniforms/Hospital%20Curtains%20(7).jpeg"
    ],
    // Net (Square / Oval)
    55: [
        "/uniforms/Net%20Square%20Oval.jpeg"
    ],
    // Curtain Track Runners
    56: [
        "/uniforms/Curtains%20Track%20Runners.jpeg"
    ],
    // Curtain Runner Hooks
    57: [
        "/uniforms/Curtain%20Runner%20Hooks.jpeg"
    ],
    // Curtain Fittings Set
    58: [
        "/uniforms/Curtain%20Fittings%20Set.jpeg"
    ],
    // Cloth Mask
    61: [
        "/uniforms/Cloth%20mask%20(1).jpeg",
        "/uniforms/Cloth%20mask%20(2).jpeg"
    ],
    // Disposable Isolation Gowns (40 GSM)
    62: [
        "/uniforms/Disposable%20Isolation%20Gowns%20(1).jpeg",
        "/uniforms/Disposable%20Isolation%20Gowns%20(2).jpeg"
    ]
};
function ProductImageCarousel({ product }) {
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const images = productImages[product.id];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!images || images.length <= 1) return;
        const timer = setInterval(()=>setIdx((i)=>(i + 1) % images.length), 6000);
        return ()=>clearInterval(timer);
    }, [
        images
    ]);
    if (!images || images.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: "/product-placeholder.svg",
            alt: `${product.name} placeholder`,
            width: 800,
            height: 600,
            className: "h-full w-full object-cover opacity-90 transition group-hover:scale-[1.03]"
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 208,
            columnNumber: 12
        }, this);
    }
    function go(dir, e) {
        e.stopPropagation();
        setIdx((i)=>(i + dir + images.length) % images.length);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: images[idx],
                alt: `${product.name} ${idx + 1}`,
                width: 800,
                height: 1000,
                className: "h-full w-full object-cover opacity-90 transition group-hover:scale-[1.03]"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: (e)=>go(-1, e),
                        className: "absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-2 py-1 text-lg text-white hover:bg-black/80",
                        children: "‹"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: (e)=>go(1, e),
                        className: "absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-2 py-1 text-lg text-white hover:bg-black/80",
                        children: "›"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1",
                        children: images.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-1.5 w-1.5 rounded-full ${i === idx ? "bg-white" : "bg-white/40"}`
                            }, i, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true);
}
function createEmptyQuantities(product) {
    return Object.fromEntries(product.sizes.map((size)=>[
            size,
            0
        ]));
}
function getTotalQuantity(quantities) {
    return Object.values(quantities).reduce((total, quantity)=>total + quantity, 0);
}
function getSelectedSizes(quantities) {
    return Object.entries(quantities).filter(([, quantity])=>quantity > 0);
}
function buildQuoteLink(cartItems) {
    const message = cartItems.length > 0 ? `Hi Codewear, I want a quote for:\n\n${cartItems.map((item, index)=>{
        const sizeBreakup = getSelectedSizes(item.quantities).map(([size, quantity])=>`   - ${size}: ${quantity} pcs`).join("\n");
        return `${index + 1}. ${item.product.name} - ${item.product.price}\n   Order type: ${item.orderType}\n   Total: ${getTotalQuantity(item.quantities)} pcs\n${sizeBreakup}`;
    }).join("\n\n")}\n\nNote: ${CART_NOTICE}\nPlease share availability, GST, transportation, and bulk pricing.` : "Hi Codewear, I want a custom quote for hospital uniforms and textiles.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function Home() {
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isNavScrolled, setIsNavScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [configuringProductId, setConfiguringProductId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedOrderType, setSelectedOrderType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(ORDER_TYPES[0]);
    const [selectedQuantities, setSelectedQuantities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const filtered = activeCategory === "All" ? products : products.filter((p)=>p.category === activeCategory);
    const cartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>cart.map((item)=>{
            const product = products.find((candidate)=>candidate.id === item.productId);
            return product ? {
                ...item,
                product
            } : null;
        }).filter((item)=>Boolean(item)), [
        cart
    ]);
    const configuringProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>products.find((product)=>product.id === configuringProductId) ?? null, [
        configuringProductId
    ]);
    const isConfiguringExistingItem = Boolean(configuringProduct && cart.some((item)=>item.productId === configuringProduct.id));
    const selectedTotalQuantity = getTotalQuantity(selectedQuantities);
    const quantityRemaining = Math.max(MINIMUM_ORDER_QUANTITY - selectedTotalQuantity, 0);
    const quoteLink = buildQuoteLink(cartItems);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function updateNavState() {
            setIsNavScrolled(window.scrollY > 96);
        }
        updateNavState();
        window.addEventListener("scroll", updateNavState, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", updateNavState);
    }, []);
    function openOrderPanel(product) {
        const existingItem = cart.find((item)=>item.productId === product.id);
        setSelectedOrderType(existingItem?.orderType ?? ORDER_TYPES[0]);
        setSelectedQuantities({
            ...createEmptyQuantities(product),
            ...existingItem?.quantities ?? {}
        });
        setConfiguringProductId(product.id);
        setIsCartOpen(false);
    }
    function closeOrderPanel() {
        setConfiguringProductId(null);
        setSelectedQuantities({});
    }
    function updateSizeQuantity(size, value) {
        const quantity = Math.max(0, Math.floor(Number(value) || 0));
        setSelectedQuantities((current)=>({
                ...current,
                [size]: quantity
            }));
    }
    function addConfiguredProductToCart() {
        if (!configuringProduct || selectedTotalQuantity < MINIMUM_ORDER_QUANTITY) {
            return;
        }
        const cleanedQuantities = Object.fromEntries(getSelectedSizes(selectedQuantities));
        const nextItem = {
            productId: configuringProduct.id,
            orderType: selectedOrderType,
            quantities: cleanedQuantities
        };
        setCart((current)=>{
            const existingIndex = current.findIndex((item)=>item.productId === configuringProduct.id);
            if (existingIndex === -1) {
                return [
                    ...current,
                    nextItem
                ];
            }
            return current.map((item, index)=>index === existingIndex ? nextItem : item);
        });
        closeOrderPanel();
        setIsCartOpen(true);
    }
    function removeFromCart(productId) {
        setCart((current)=>current.filter((item)=>item.productId !== productId));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#fbfaf8] text-[#24110c]",
        style: {
            fontFamily: "Aptos, 'Segoe UI', Arial, sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed left-0 right-0 top-0 z-50 border-b transition duration-300 ${isNavScrolled ? "border-white/60 bg-[#fbfaf8]/88 shadow-[0_16px_44px_rgba(36,17,12,0.12)] backdrop-blur-xl" : "border-transparent bg-black/8 text-white"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://codewear.co.in/",
                            className: "flex min-w-0 items-center",
                            "aria-label": "Codewear home",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/logo1.png",
                                alt: "Codewear Premium Hospital Textiles Logo",
                                width: 220,
                                height: 80,
                                priority: true,
                                className: "h-10 w-auto max-w-[150px] object-contain sm:h-12 sm:max-w-[190px]"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 353,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `hidden items-center gap-7 text-sm font-semibold sm:flex ${isNavScrolled ? "text-[#5c4038]" : "text-white"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#products",
                                    className: "transition hover:text-[#f55a00]",
                                    children: "Products"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#brands",
                                    className: "transition hover:text-[#f55a00]",
                                    children: "Clients"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 366,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#quote",
                                    className: "transition hover:text-[#f55a00]",
                                    children: "Quote"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex shrink-0 items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": `Open quote cart with ${cartItems.length} item${cartItems.length === 1 ? "" : "s"}`,
                                    "aria-expanded": isCartOpen,
                                    onClick: ()=>setIsCartOpen((current)=>!current),
                                    className: "relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white text-[#24110c] shadow-[0_12px_30px_rgba(0,0,0,0.16)] transition hover:border-[#f55a00] hover:text-[#f55a00]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            "aria-hidden": "true",
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this),
                                        cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f55a00] px-1 text-[11px] font-bold leading-none text-white",
                                            children: cartItems.length
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: quoteLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex h-11 items-center justify-center rounded-full bg-[#f55a00] px-4 text-sm font-bold text-white shadow-[0_14px_32px_rgba(245,90,0,0.24)] transition hover:bg-[#d94e00] sm:px-5",
                                    children: "Get Quote"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, this),
                                isCartOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-0 top-full mt-3 w-[min(92vw,380px)] overflow-hidden rounded-lg border border-[#eadbd0] bg-white text-[#24110c] shadow-[0_24px_70px_rgba(60,27,12,0.22)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between border-b border-[#f0e2d8] px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-bold",
                                                            children: "Quote Cart"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-xs text-[#8d756c]",
                                                            children: [
                                                                cartItems.length,
                                                                " product",
                                                                cartItems.length === 1 ? "" : "s",
                                                                " selected"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "aria-label": "Close cart",
                                                    onClick: ()=>setIsCartOpen(false),
                                                    className: "inline-flex h-9 w-9 items-center justify-center rounded-full text-[#5c4038] transition hover:bg-[#f55a00]/10 hover:text-[#f55a00]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        "aria-hidden": "true",
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 392,
                                            columnNumber: 17
                                        }, this),
                                        cartItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-h-[52vh] overflow-y-auto p-3",
                                            children: cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-md px-2 py-2 hover:bg-[#fbfaf8]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-semibold leading-tight",
                                                                            children: item.product.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 408,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-1 text-xs text-[#8d756c]",
                                                                            children: [
                                                                                item.orderType,
                                                                                " - ",
                                                                                getTotalQuantity(item.quantities),
                                                                                " pcs - ",
                                                                                item.product.price
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 409,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>removeFromCart(item.productId),
                                                                    className: "rounded-full px-2 py-1 text-xs font-bold text-[#f55a00] hover:bg-[#f55a00]/10",
                                                                    children: "Remove"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 406,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 flex flex-wrap gap-1.5",
                                                            children: getSelectedSizes(item.quantities).map(([size, quantity])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-full bg-[#f4ede8] px-2 py-1 text-[11px] font-semibold text-[#5c4038]",
                                                                    children: [
                                                                        size,
                                                                        ": ",
                                                                        quantity
                                                                    ]
                                                                }, size, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 419,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>openOrderPanel(item.product),
                                                            className: "mt-2 text-xs font-bold text-[#f55a00] hover:underline",
                                                            children: "Edit quantities"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, item.productId, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 403,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "px-4 py-6 text-sm leading-6 text-[#5c4038]",
                                            children: "Your cart is empty. Add products from the catalogue and they will appear here."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 431,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-[#f0e2d8] p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-3 rounded-md bg-[#fff4ec] px-3 py-2 text-xs leading-5 text-[#7a4a34]",
                                                    children: CART_NOTICE
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setCart([]),
                                                            className: "flex-1 rounded-full border border-[#24110c]/10 px-4 py-2 text-xs font-semibold text-[#5c4038] transition hover:border-[#f55a00] hover:text-[#f55a00]",
                                                            children: "Clear"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 439,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: quoteLink,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "flex-1 rounded-full bg-[#25D366] px-4 py-2 text-center text-xs font-bold text-white transition hover:bg-[#20bd5a]",
                                                            children: "Get Quotation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 442,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 438,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 391,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 370,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 352,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this),
            configuringProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[60] flex items-end justify-center bg-black/58 px-4 py-4 backdrop-blur-sm sm:items-center",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "order-panel-title",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: (event)=>{
                        event.preventDefault();
                        addConfiguredProductToCart();
                    },
                    className: "flex max-h-[calc(100svh-1rem)] w-full max-w-2xl flex-col overflow-hidden rounded-lg bg-white text-[#24110c] shadow-[0_30px_90px_rgba(0,0,0,0.34)] sm:max-h-[92svh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-4 border-b border-[#f0e2d8] px-5 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold uppercase text-[#f55a00]",
                                            children: "Configure order"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 463,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            id: "order-panel-title",
                                            className: "mt-1 text-xl font-bold leading-tight",
                                            children: configuringProduct.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-[#8d756c]",
                                            children: [
                                                configuringProduct.fabric,
                                                " - ",
                                                configuringProduct.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-label": "Close order panel",
                                    onClick: closeOrderPanel,
                                    className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#5c4038] transition hover:bg-[#f55a00]/10 hover:text-[#f55a00]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        "aria-hidden": "true",
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 467,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 461,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-h-0 flex-1 overflow-y-auto px-5 py-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-bold text-[#5c4038]",
                                    htmlFor: "order-type",
                                    children: "Order type"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 473,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "order-type",
                                    value: selectedOrderType,
                                    onChange: (event)=>setSelectedOrderType(event.target.value),
                                    className: "mt-2 h-12 w-full rounded-md border border-[#eadbd0] bg-white px-3 text-sm font-semibold outline-none transition focus:border-[#f55a00] focus:ring-2 focus:ring-[#f55a00]/20",
                                    children: ORDER_TYPES.map((orderType)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: orderType,
                                            children: orderType
                                        }, orderType, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 481,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 rounded-lg border border-[#eadbd0]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-[1fr_140px] gap-3 border-b border-[#eadbd0] bg-[#fbfaf8] px-4 py-3 text-xs font-bold uppercase text-[#8d756c]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Size"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Quantity"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 486,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "divide-y divide-[#f0e2d8]",
                                            children: configuringProduct.sizes.map((size)=>{
                                                const quantity = selectedQuantities[size] ?? 0;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "grid grid-cols-[1fr_140px] items-center gap-3 px-4 py-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-bold text-[#24110c]",
                                                            children: size
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: "0",
                                                            step: "1",
                                                            inputMode: "numeric",
                                                            value: quantity || "",
                                                            placeholder: "0",
                                                            onChange: (event)=>updateSizeQuantity(size, event.target.value),
                                                            className: "h-11 rounded-md border border-[#eadbd0] px-3 text-right text-sm font-bold outline-none transition focus:border-[#f55a00] focus:ring-2 focus:ring-[#f55a00]/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, size, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 490,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 485,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 grid gap-3 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg bg-[#f4ede8] px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold uppercase text-[#8d756c]",
                                                    children: "Total quantity"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-2xl font-black text-[#24110c]",
                                                    children: selectedTotalQuantity
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 514,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-lg px-4 py-3 ${quantityRemaining > 0 ? "bg-[#fff4ec] text-[#a04100]" : "bg-[#e9f8ef] text-[#146c34]"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold uppercase",
                                                    children: "Minimum order"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm font-bold",
                                                    children: quantityRemaining > 0 ? `Add ${quantityRemaining} more pcs to continue` : "Minimum quantity reached"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 518,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 513,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 rounded-lg bg-[#fff4ec] px-4 py-3 text-sm leading-6 text-[#7a4a34]",
                                    children: CART_NOTICE
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 526,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-sm font-semibold text-[#8d756c]",
                                    children: "Add this product to cart, then click Get Quotation on WhatsApp."
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 529,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 472,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "shrink-0 bg-white p-4 shadow-[0_-14px_30px_rgba(36,17,12,0.08)] sm:border-t sm:border-[#f0e2d8]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2 sm:flex-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: closeOrderPanel,
                                        className: "inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-[#24110c]/12 px-5 text-sm font-bold text-[#5c4038] transition hover:border-[#f55a00] hover:text-[#f55a00]",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 536,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: selectedTotalQuantity < MINIMUM_ORDER_QUANTITY,
                                        className: "inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[#f55a00] px-5 text-sm font-bold text-white transition hover:bg-[#d94e00] disabled:cursor-not-allowed disabled:bg-[#f4c8b0] disabled:text-white/80",
                                        children: isConfiguringExistingItem ? "Update Cart" : "Add to Cart"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 539,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 535,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 534,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 454,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 453,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative isolate overflow-hidden bg-[#17110f] px-4 pb-8 pt-24 text-white sm:px-6 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/bg.png",
                                alt: "",
                                fill: true,
                                priority: true,
                                sizes: "100vw",
                                className: "absolute inset-0 -z-30 object-cover object-[58%_center]"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 554,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(10,8,6,0.82),rgba(10,8,6,0.58)_48%,rgba(10,8,6,0.28))]"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 562,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.08)_48%,rgba(0,0,0,0.62))]"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 563,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto flex min-h-[78svh] max-w-7xl flex-col justify-center py-8 sm:min-h-[80svh] lg:min-h-[82vh]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-3xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold uppercase text-white/78 sm:text-base",
                                            children: "Professional. Reliable. Global."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 567,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-5 max-w-3xl text-5xl font-semibold leading-none text-[#ff5a00] sm:text-6xl lg:text-7xl",
                                            children: "Uniforms that carry your brand."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 568,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl",
                                            children: "Premium hospital uniforms, OT wear, linens, curtains, and custom stitched textiles for bulk and small orders."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-7 flex flex-wrap items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#products",
                                                    className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#f55a00] shadow-[0_16px_38px_rgba(0,0,0,0.22)] transition hover:bg-[#fff4ec] sm:px-7",
                                                    children: [
                                                        "View Products",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            "aria-hidden": "true",
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#brands",
                                                    className: "inline-flex min-h-12 items-center justify-center rounded-full border border-white/48 bg-white/12 px-6 text-sm font-bold text-white backdrop-blur-md transition hover:border-white hover:bg-white/18 sm:px-7",
                                                    children: "Our Clients"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 580,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 575,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 flex max-w-2xl flex-wrap gap-2",
                                            children: trustSignals.map((signal)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-white/20 bg-black/24 px-3 py-2 text-xs font-semibold text-white/82 backdrop-blur-sm",
                                                    children: signal
                                                }, signal, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 585,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 566,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 553,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "overflow-hidden bg-[#f55a00] py-3 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                children: `
            @keyframes serviceHighlightFlow {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 597,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-max items-center gap-8 whitespace-nowrap",
                                style: {
                                    animation: "serviceHighlightFlow 24s linear infinite"
                                },
                                children: Array.from({
                                    length: 4
                                }).map((_, groupIndex)=>serviceHighlights.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 text-sm font-bold uppercase sm:text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg leading-none sm:text-xl",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, `${groupIndex}-${item}`, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 610,
                                            columnNumber: 17
                                        }, this)))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 604,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 596,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "products",
                        className: "scroll-mt-24 bg-black px-5 py-16 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto max-w-7xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-9 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-3 text-sm font-medium uppercase text-white/40",
                                            children: "Catalogue"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-light text-white sm:text-6xl",
                                            children: [
                                                "Our ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#f55a00]",
                                                    children: "Products"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 623,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-sm text-white/45",
                                            children: "Add products to cart, then get the quotation on WhatsApp."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 626,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 621,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-10 flex gap-2 overflow-x-auto pb-3",
                                    style: {
                                        scrollbarWidth: "none"
                                    },
                                    children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveCategory(cat),
                                            className: `flex-shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === cat ? "bg-[#f55a00] text-white" : "border border-white/10 bg-white/[0.04] text-white/45 hover:bg-white/10"}`,
                                            children: cat
                                        }, cat, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 631,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 629,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
                                    children: filtered.map((product)=>{
                                        const cartItem = cart.find((item)=>item.productId === product.id);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "group overflow-hidden rounded-lg border border-white/[0.08] bg-[#101010] transition hover:border-[#f55a00]/50 hover:bg-[#141414]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-[3/4] bg-[#171717]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductImageCarousel, {
                                                            product: product
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 649,
                                                            columnNumber: 23
                                                        }, this),
                                                        product.tag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "absolute right-3 top-3 rounded-full bg-[#f55a00] px-3 py-1 text-[10px] font-bold text-white",
                                                            children: product.tag
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 650,
                                                            columnNumber: 39
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 648,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "min-h-10 text-lg font-semibold leading-tight text-white",
                                                            children: product.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 653,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-sm text-white/35",
                                                            children: product.fabric
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 654,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mb-2 text-xs font-semibold uppercase text-white/35",
                                                                    children: "General hospital colours"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 656,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap items-center gap-1.5",
                                                                    children: hospitalColours.map((colour)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            title: colour.name,
                                                                            className: `h-3.5 w-3.5 rounded-full ${colour.className}`
                                                                        }, colour.name, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 659,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 657,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-2 text-xs font-medium text-white/35",
                                                                    children: "Customised colours available on request."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 662,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 655,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-4 flex flex-wrap gap-1.5",
                                                            children: product.sizes.map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "rounded-md bg-white/[0.07] px-2 py-1 text-[11px] font-medium text-white/45",
                                                                    children: size
                                                                }, size, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 666,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 664,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-4 rounded-md bg-white/[0.05] px-3 py-2 text-xs font-semibold text-white/50",
                                                            children: [
                                                                "Minimum order: ",
                                                                MINIMUM_ORDER_QUANTITY,
                                                                " pcs"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 669,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xl font-bold text-[#f55a00]",
                                                                    children: product.price
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 671,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>openOrderPanel(product),
                                                                    className: "rounded-full bg-white px-4 py-2 text-xs font-bold text-[#111] transition hover:bg-[#f55a00] hover:text-white",
                                                                    children: cartItem ? "Edit Order" : "Add to Cart"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 672,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 670,
                                                            columnNumber: 23
                                                        }, this),
                                                        cartItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-3 text-xs font-semibold text-[#ffb083]",
                                                            children: [
                                                                "In cart: ",
                                                                getTotalQuantity(cartItem.quantities),
                                                                " pcs"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 681,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, product.id, true, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 647,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 643,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 620,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "brands",
                        className: "scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#fbfaf8_100%)] px-5 py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                children: `
            @keyframes brandScroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }

            .brand-logo-strip:hover .brand-logo-track {
              animation-play-state: paused;
            }
          `
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 694,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-7xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto mb-8 max-w-3xl text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-3 text-sm font-bold uppercase text-[#8d756c]",
                                                children: "Our Clients"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 706,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl font-light text-[#f55a00] sm:text-6xl",
                                                children: "Trusted By Healthcare Teams"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 707,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto mt-5 h-1 w-24 rounded-full bg-[#f55a00]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 708,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 705,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "brand-logo-strip relative -mx-5 overflow-hidden py-9",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/85 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 712,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/85 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 713,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "brand-logo-track flex w-max items-center gap-8 sm:gap-10 lg:gap-12",
                                                style: {
                                                    animation: "brandScroll 30s linear infinite"
                                                },
                                                children: [
                                                    ...clientLogos,
                                                    ...clientLogos
                                                ].map((client, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-28 w-48 flex-shrink-0 items-center justify-center sm:w-56 lg:h-32 lg:w-64",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: client.src,
                                                            alt: `${client.name} logo`,
                                                            width: 420,
                                                            height: 180,
                                                            className: "max-h-24 w-auto max-w-full object-contain opacity-90 drop-shadow-[0_12px_30px_rgba(60,27,12,0.1)] transition duration-300 hover:scale-105 hover:opacity-100 lg:max-h-28"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 717,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, `${client.name}-${index}`, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 716,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 714,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 711,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 704,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 693,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "quote",
                        className: "scroll-mt-24 bg-[#f55a00] px-5 py-16 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-3 text-sm font-semibold uppercase text-white/72",
                                            children: "Quote Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 730,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-light sm:text-5xl",
                                            children: "Ready for a bulk quote?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 731,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4 max-w-2xl text-sm leading-7 text-white/78",
                                            children: "Add products from the catalogue and send the full cart to WhatsApp in one message."
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 732,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 729,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: quoteLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-[#f55a00] transition hover:bg-[#fff4ec]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            "aria-hidden": "true",
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 737,
                                            columnNumber: 15
                                        }, this),
                                        "Send on WhatsApp"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 736,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 728,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 727,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "overflow-hidden bg-[#101010] py-2 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                children: `
            @keyframes footerBrandFlow {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
          `
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 744,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex w-max items-center gap-6 whitespace-nowrap",
                                style: {
                                    animation: "footerBrandFlow 25s linear infinite"
                                },
                                children: Array.from({
                                    length: 14
                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-sm font-semibold sm:text-base",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "codewear"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 760,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg font-bold leading-none text-[#f55a00] sm:text-xl",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 761,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 756,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 751,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 743,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 552,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 350,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_page_tsx_0es_sk2._.js.map