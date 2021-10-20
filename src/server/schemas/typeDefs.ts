import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID
    name: String
    email: String
  }
  type Query {
    users: [User]
    user(email: String!): User
    me: User
  }
  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

export = typeDefs;
