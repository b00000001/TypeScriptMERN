import React from 'react';
import { Link } from 'react-router-dom';

const index = () => {
  return (
    <>
      <nav>
        <Link to="/">Home1</Link>
        <Link to="/login">Login/Register</Link>
        <Link to="/test">Test</Link>
      </nav>
    </>
  );
};

export default index;
