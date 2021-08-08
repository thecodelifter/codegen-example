import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: String!
    name: String!
    email: String!
  }

  type Query {
    getAllUsers: [User]!
  }

  type Mutation {
    createUser(email: String!, name: String!): User!
  }
`;
