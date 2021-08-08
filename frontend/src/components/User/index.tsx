import React from 'react';

import { useGetAllUsersQuery } from 'graphql/queries/GetAllUsers.generated';

import * as S from './styles';

const User = () => {
  const { data, loading } = useGetAllUsersQuery();

  if (loading) return <S.UserWrapper>Loading...</S.UserWrapper>;

  if (data?.getAllUsers.length === 0)
    return <S.UserWrapper>There are currently no users</S.UserWrapper>;

  return (
    <S.UserWrapper>
      <h1>Current Users:</h1>
      {data?.getAllUsers.map(user => (
        <div key={user?.id}>
          {user?.name} - {user?.email}
        </div>
      ))}
    </S.UserWrapper>
  );
};

export default User;
