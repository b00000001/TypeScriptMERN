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
              <p>{user.name}</p>
            )
          )
        : null}
    </div>
  );
};

export default Test;
