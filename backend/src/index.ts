import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { v4 as uuidv4 } from 'uuid';

import schema from '../schema';
import db from '../db.json';
import * as types from '../graphql-types';

const typeDefs = schema;

const resolvers = {
  Query: {
    getAllUsers: () => {
      return db.users;
    },
  },
  Mutation: {
    createUser: (_, { email, name }: types.MutationCreateUserArgs) => {
      const newUser = {
        id: uuidv4(),
        email,
        name,
      };

      const userExists = db.users.find((user) => user.email === newUser.email);

      if (userExists) {
        throw new Error('User already exists, Please login');
      }

      db.users.push(newUser);

      return {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      };
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server running on http://localhost:4000${server.graphqlPath}`),
);
