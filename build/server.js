"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const apollo_server_express_1 = require("apollo-server-express");
const dotenv = __importStar(require("dotenv"));
const schemas_1 = __importDefault(require("./schemas"));
const PORT = 3001; // default port to listen
const app = (0, express_1.default)();
dotenv.config({ path: '.env' });
// define a route handler for the default home page
const server = new apollo_server_express_1.ApolloServer(schemas_1.default);
// server.applyMiddleware({ app });
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../client/build')));
}
app.get("*", (_, res) => {
    // render the index template
    res.sendFile(path_1.default.join(__dirname, '../../client/build/index.html'));
});
// start the express server
app.listen(PORT, () => {
    //eslint-disable-next-line no-console
    console.log(`server started at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map