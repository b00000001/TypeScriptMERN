import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation createUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
        id
        name
        email
    }
}
`;
