import React from 'react';
import { useQuery } from '#apollo/client';
import { QUERY_USER } from '../utils/query';
const Test = () => {
  const queryData = useQuery(QUERY_USER);
  return (
    <div>
      <h1>Test Page</h1>
      {queryData.loading ? <h1>loading...</h1> : <h1>No query data to show</h1>}
    </div>
  );
};

export default Test;
