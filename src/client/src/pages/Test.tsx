import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
const Test = () => {
  const queryData = useQuery(QUERY_USER);
  console.log(queryData);
  return (
    <div>
      {queryData.loading ? (
        <h1>loading...</h1>
      ) : (
        queryData.data.users.map(
          (user: { name: String; email: String; id: number }) => (
            <div>
              <h1 className="text-base">User Info</h1>
              <h3 className="text-sm">User ID: {user.id}</h3>
              <h3 className="text-sm">User Name: {user.name}</h3>
              <h3 className="text-sm">User Email: {user.email}</h3>
            </div>
          )
        )
      )}
    </div>
  );
};

export default Test;
