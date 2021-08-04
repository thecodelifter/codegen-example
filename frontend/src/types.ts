export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
   __typename: 'Mutation',
  register: User,
};


export type MutationregisterArgs = {
  email: Scalars['String'],
  password: Scalars['String'],
  name: Scalars['String']
};

export type Query = {
   __typename: 'Query',
  getAllUsers: Array<Maybe<User>>,
};

export type User = {
   __typename: 'User',
  id: Scalars['String'],
  name: Scalars['String'],
  email: Scalars['String'],
};
