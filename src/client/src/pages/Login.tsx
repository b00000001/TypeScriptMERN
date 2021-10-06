import React from 'react';
import { GoogleLogin } from 'react-google-login';
import env from 'react-dotenv';

const Login = () => {
  console.log(env.DB_USER);
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export default Login;
