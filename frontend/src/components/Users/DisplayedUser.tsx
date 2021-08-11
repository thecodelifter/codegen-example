import React from 'react'

import * as types from '../../types';

const DisplayUser = ({ user }: { user: types.User | null }) => {
  if (!user) return null;

  return (
    <div>
      {user.name} - {user.email}
    </div>
  );
};

export default DisplayUser
