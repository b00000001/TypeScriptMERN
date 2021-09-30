import { jsx as _jsx } from "react/jsx-runtime";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../src/pages/Header';
function App() {
    return (_jsx(Router, { children: _jsx("div", { children: _jsx(Header, {}, void 0) }, void 0) }, void 0));
}
export default App;
