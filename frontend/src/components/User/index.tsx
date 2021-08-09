import React from 'react';

import { useGetAllUsersQuery } from 'graphql/queries/GetAllUsers.generated';

import * as S from './styles';

const Heading = () => <h1>Current Users:</h1>;

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
        <div key={user?.id}>
          {user?.name} - {user?.email}
        </div>
      ))}
      {data?.getAllUsers.length === 0 && (
        <S.UserWrapper>There are currently no users</S.UserWrapper>
      )}
    </S.UserWrapper>
  );
};

export default User;
