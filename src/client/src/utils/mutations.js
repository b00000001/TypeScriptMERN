"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADD_USER = void 0;
const client_1 = require("@apollo/client");
exports.ADD_USER = (0, client_1.gql) `
mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
        id
        name
        email
    }
}
`;
