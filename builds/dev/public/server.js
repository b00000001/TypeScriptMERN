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
const apollo_server_express_1 = require("apollo-server-express");
const dotenv = __importStar(require("dotenv"));
const path = __importStar(require("path"));
const db = require('./config/connection');
const { typeDefs } = require('./schemas');
dotenv.config();
const app = (0, express_1.default)();
const server = new apollo_server_express_1.ApolloServer({
    typeDefs
});
server.applyMiddleware({ app });
const PORT = process.env.PORT || 3001;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path.join(__dirname, '../client/build')));
}
app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
db.sync().then(() => {
    app.listen(PORT, () => {
        // eslint-disable-next-line no-console
        console.log(`API server running on port ${PORT}!`);
        // eslint-disable-next-line no-console
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
