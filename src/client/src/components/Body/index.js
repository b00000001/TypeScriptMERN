"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Homepage_1 = __importDefault(require("../../pages/Homepage"));
const Login_1 = __importDefault(require("../../pages/Login"));
const Test_1 = __importDefault(require("../../pages/Test"));
const index = () => {
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "bg-gray-800 text-white h-screen" }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Switch, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ exact: true, path: "/" }, { children: (0, jsx_runtime_1.jsx)(Homepage_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ exact: true, path: "/login" }, { children: (0, jsx_runtime_1.jsx)(Login_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ exact: true, path: "/test" }, { children: (0, jsx_runtime_1.jsx)(Test_1.default, {}, void 0) }), void 0)] }, void 0) }), void 0));
};
exports.default = index;
