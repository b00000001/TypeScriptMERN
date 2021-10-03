import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
query users{
    users {
      id
      name
      email
    }
  }`

  export const QUERY_USER = gql`
  query user($id: ID!){
    user(id: $id) {
      id
      name
      email
    }
  }`
 