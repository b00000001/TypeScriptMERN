"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gql } = require('apollo-server-express');
exports.default = gql `
type User {
    id: ID!
    name: String
    email: String
}

type Query { 
    user(name: String!): User   
    users: [User]
}

type Mutation {
    addUser(email: String!, name: String!): User  
}
`;
//# sourceMappingURL=typeDefs.js.map