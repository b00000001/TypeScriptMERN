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
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Body from '../src/components/Body';
var client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:3001/graphql'
});
function App() {
  return _jsx(
    ApolloProvider,
    __assign(
      { client: client },
      {
        children: _jsxs(
          Router,
          {
            children: [
              _jsx(Header, {}, void 0),
              _jsx(Body, {}, void 0),
              _jsx(Footer, {}, void 0)
            ]
          },
          void 0
        )
      }
    ),
    void 0
  );
}
export default App;
