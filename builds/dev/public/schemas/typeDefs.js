"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ntype User {\n    id: ID\n    username: String\n    email: String\n}\ntype Query {\n    users: [User]\n    user(id: ID!): User\n}"], ["\ntype User {\n    id: ID\n    username: String\n    email: String\n}\ntype Query {\n    users: [User]\n    user(id: ID!): User\n}"])));
var templateObject_1;
module.exports = typeDefs;
