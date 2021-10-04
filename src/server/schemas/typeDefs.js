"use strict";
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
type User {
    id: ID
    name: String
    email: String
}
type Query {
    users: [User]
    user(email: String!): User
}
type Mutation {
    createUser(name: String!, email: String!): User
}`;
module.exports = typeDefs;
