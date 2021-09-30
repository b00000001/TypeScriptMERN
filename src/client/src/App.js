/* eslint-disable import/first */

var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/components/Header';
import Homepage from '../src/pages/Homepage';
function App() {
  return _jsxs(
    Router,
    {
      children: [
        _jsx('div', { children: _jsx(Header, {}, void 0) }, void 0),
        _jsx(
          Switch,
          {
            children: _jsx(
              Route,
              __assign(
                { exact: true, path: '/' },
                { children: _jsx(Homepage, {}, void 0) }
              ),
              void 0
            )
          },
          void 0
        )
      ]
    },
    void 0
  );
}
export default App;
