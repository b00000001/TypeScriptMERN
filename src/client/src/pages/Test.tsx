/* eslint-disable import/first */
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
const Test = () => {
  const [users, changeUsers] = useState({
    users: [],
    showUsers: false
  });
  const queryData = useQuery(QUERY_USER);
  const handleClick = () => {
    if (users.showUsers) {
      changeUsers({
        users: [],
        showUsers: false
      });
    } else {
      changeUsers({
        users: queryData.data.users,
        showUsers: true
      });
    }
  };
  return (
    <div>
      <button className="btn btn-black" onClick={handleClick}>
        Show Users
      </button>
      {users.showUsers
        ? users.users.map(
            (user: { name: String; id: Number; email: String }) => (
              <div className="mt-2 border-2">
                <p>User Name:{user.name}</p>
                <p>User Id:{user.id}</p>
                <p>User Email:{user.email}</p>
              </div>
            )
          )
        : null}
    </div>
  );
};

export default Test;
