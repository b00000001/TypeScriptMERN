const {gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
    id: ID!
    name: String!
    email: String!
}

type Query {
    user(name: String!): User
}
`;

module.exports = typeDefs;