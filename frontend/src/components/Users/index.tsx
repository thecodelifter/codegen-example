import React from 'react';

import DisplayUser from './DisplayedUser'
import { useGetAllUsersQuery } from 'graphql/queries/GetAllUsers.generated';
import * as S from './styles';

const Heading = () => <h1>Current Users:</h1>;

const Users = () => {
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

export default Users;
