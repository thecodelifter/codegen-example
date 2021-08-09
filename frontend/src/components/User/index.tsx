import React from 'react';

import { useGetAllUsersQuery, GetAllUsersQuery } from 'graphql/queries/GetAllUsers.generated';

import * as S from './styles';

type UserType = GetAllUsersQuery['getAllUsers'][0];

const Heading = () => <h1>Current Users:</h1>;

const DisplayUser = ({ user }: { user: UserType }): JSX.Element => (
  <div>
    {user?.name} - {user?.email}
  </div>
);

const User = () => {
  const { data, loading } = useGetAllUsersQuery();

  if (loading)
    return (
      <S.UserWrapper>
        <Heading />
        Loading...
      </S.UserWrapper>
    );

  return (
    <S.UserWrapper>
      <Heading />
      {data?.getAllUsers.map(user => (
        <DisplayUser key={user?.id} user={user} />
      ))}
      {data?.getAllUsers.length === 0 && (
        <S.UserWrapper>There are currently no users</S.UserWrapper>
      )}
    </S.UserWrapper>
  );
};

export default User;
