"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY_USER = void 0;
const client_1 = require("@apollo/client");
exports.QUERY_USER = (0, client_1.gql) `
query users{
    users {
      id
      name
      email
    }
  }`;
