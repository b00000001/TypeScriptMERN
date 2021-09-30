"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const index = () => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("nav", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/" }, { children: "Home1" }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/login" }, { children: "Login/Register" }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: "/test" }, { children: "Test" }), void 0)] }, void 0) }, void 0));
};
exports.default = index;
