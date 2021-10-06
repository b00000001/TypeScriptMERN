/* eslint-disable import/first */

import React from 'react';
import env from 'react-dotenv';
import { GoogleLoginButton } from 'ts-react-google-login-component';

const Login = () => {
  const clientConfig = { client_id: env.CLIENT_ID };
  const responseGoogle = (response: any): void => {
    console.log(response);
  };
  const preLogin = (): void => {
    console.log('preLogin');
  };

  const errorHandler = (err: any): void => {
    console.log(err);
  };

  return (
    <div>
      <GoogleLoginButton
        responseHandler={responseGoogle}
        clientConfig={clientConfig}
        preLogin={preLogin}
        failureHandler={errorHandler}
      />
    </div>
  );
};

export default Login;
