import { jsx as _jsx } from "react/jsx-runtime";
import env from 'react-dotenv';
import { GoogleLoginButton } from 'ts-react-google-login-component';
var Login = function () {
    var clientConfig = { client_id: env.CLIENT_ID };
    var responseGoogle = function (response) {
        console.log(response);
    };
    var preLogin = function () {
        console.log('preLogin');
    };
    var errorHandler = function (err) {
        console.log(err);
    };
    return (_jsx("div", { children: _jsx(GoogleLoginButton, { responseHandler: responseGoogle, clientConfig: clientConfig, preLogin: preLogin, failureHandler: errorHandler }, void 0) }, void 0));
};
export default Login;
