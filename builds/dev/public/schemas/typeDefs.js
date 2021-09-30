"use strict";
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
type User {
    id: ID
    username: String
    email: String
}
type Query {
    users: [User]
    user(id: ID!): User
}`;
module.exports = typeDefs;
