"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./App.css");
const client_1 = require("@apollo/client");
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("../src/components/Header"));
const Footer_1 = __importDefault(require("../src/components/Footer"));
const Body_1 = __importDefault(require("../src/components/Body"));
const client = new client_1.ApolloClient({
    cache: new client_1.InMemoryCache(),
    uri: 'http://localhost:3001/graphql'
});
function App() {
    return ((0, jsx_runtime_1.jsx)(client_1.ApolloProvider, Object.assign({ client: client }, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(Body_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(Footer_1.default, {}, void 0)] }, void 0) }), void 0));
}
exports.default = App;
