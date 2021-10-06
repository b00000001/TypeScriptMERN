import { jsx as _jsx } from "react/jsx-runtime";
import env from 'react-dotenv';
var Login = function () {
    console.log(env.DB_USER);
    return (_jsx("div", { children: _jsx("h1", { children: "Login Page" }, void 0) }, void 0));
};
export default Login;
