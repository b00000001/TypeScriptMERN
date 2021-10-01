import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Body from '../src/components/Body';
function App() {
    return (_jsxs(Router, { children: [_jsx("div", { children: _jsx(Header, {}, void 0) }, void 0), _jsx(Body, {}, void 0), _jsx(Footer, {}, void 0)] }, void 0));
}
export default App;
