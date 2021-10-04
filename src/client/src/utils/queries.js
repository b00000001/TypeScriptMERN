"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY_USER = exports.QUERY_USERS = void 0;
const client_1 = require("@apollo/client");
exports.QUERY_USERS = (0, client_1.gql) `
query users{
    users {
      id
      name
      email
    }
  }`;
exports.QUERY_USER = (0, client_1.gql) `
  query user($id: ID!){
    user(id: $id) {
      id
      name
      email
    }
  }`;
