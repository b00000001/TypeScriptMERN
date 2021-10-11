/* eslint-disable import/first */

import React from 'react';
import { useMutation } from '@apollo/client';
import env from 'react-dotenv';
import { ADD_USER } from '../utils/mutations';
import { GoogleLoginButton } from 'ts-react-google-login-component';

const Login = () => {
  const clientConfig = { client_id: env.CLIENT_ID };
  const [login, { error, data }] = useMutation(ADD_USER);

  const responseGoogle = async (googleUser: any): Promise<void> => {
    const id_token = googleUser.getAuthResponse(true).id_token;
    const googleId = googleUser.getId();

    // console.log({ googleId });
    // console.log({ accessToken: id_token });
    // Make user login in your system
    // login success tracking...
    const userData = await login({
      variables: {
        email: googleUser.dt.Ot,
        name: googleUser.dt.Se
      }
    });
    console.log('userData:', userData);
  };

  const preLogin = (): void => {
    console.log('preLogin');
  };

  const errorHandler = (err: any): void => {
    console.log('error', err);
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
