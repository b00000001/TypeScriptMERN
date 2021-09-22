const {gql} = require('apollo-server-express');

export default gql`
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

