"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("@apollo/client");
const react_dotenv_1 = __importDefault(require("react-dotenv"));
const mutations_1 = require("../utils/mutations");
const ts_react_google_login_component_1 = require("ts-react-google-login-component");
const Login = () => {
    const clientConfig = { client_id: react_dotenv_1.default.CLIENT_ID };
    const [login, { error, data }] = (0, client_1.useMutation)(mutations_1.ADD_USER);
    const responseGoogle = async (googleUser) => {
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
    const preLogin = () => {
        console.log('preLogin');
    };
    const errorHandler = (err) => {
        console.log('error', err);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(ts_react_google_login_component_1.GoogleLoginButton, { responseHandler: responseGoogle, clientConfig: clientConfig, preLogin: preLogin, failureHandler: errorHandler }, void 0) }, void 0));
};
exports.default = Login;
