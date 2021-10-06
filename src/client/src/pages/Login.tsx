/* eslint-disable import/first */

import React from 'react';
import { GoogleLogin } from 'react-google-login';
import env from 'react-dotenv';

const Login = () => {
  // const [login, { error }] = useMutation(ADD_GOOGLE_USER);
  const onSuccess = async (res: any) => {
    // try {
    //   const mutationResponse = await login({
    //     variables: {
    //       username: res.profileObj.givenName,
    //       email: res.profileObj.email
    //     }
    //   });
    // } catch (e) {
    //   console.log(e);
    // }
    // window.location.assign("/home");
    console.log(res);
  };

  const onFailure = () => {
    console.log('[Login Failure]');
  };
  return (
    <div>
      <GoogleLogin
        clientId={env.CLIENT_ID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
