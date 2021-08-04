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
    register(email: String!, password: String!, name: String!): User!
  }
`;
