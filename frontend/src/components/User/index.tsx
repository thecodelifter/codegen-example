import React from 'react';

import { useGetAllUsersQuery } from 'graphql/queries/GetAllUsers.generated';

import * as S from './styles';

const User = () => {
  const { data, loading } = useGetAllUsersQuery();

  if (loading) return <div>Loading...</div>;

  if (data?.getAllUsers.length === 0) return <div>There are currently no users</div>;

  return (
    <S.UserWrapper>
      <div>Current Users:</div>
      {data?.getAllUsers.map(user => (
        <div key={user?.id}>
          {user?.name} - {user?.email}
        </div>
      ))}
    </S.UserWrapper>
  );
};

export default User;
