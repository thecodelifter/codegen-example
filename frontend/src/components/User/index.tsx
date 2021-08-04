import React from 'react';

import { useGetAllUsersQuery } from 'graphql/queries/GetAllUsers.generated';

const User = () => {
  const { data, loading } = useGetAllUsersQuery();

  console.log({ data, loading });

  return <div>Display User Data here</div>;
};

export default User;
