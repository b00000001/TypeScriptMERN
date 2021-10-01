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
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
var Test = function () {
  var queryData = useQuery(QUERY_USER);
  console.log(queryData);
  return _jsx(
    'div',
    {
      children: queryData.loading
        ? _jsx('h1', { children: 'loading...' }, void 0)
        : queryData.data.users.map(function (user) {
            return _jsxs(
              'div',
              {
                children: [
                  _jsx(
                    'h1',
                    __assign(
                      { className: 'text-base' },
                      { children: 'User Info' }
                    ),
                    void 0
                  ),
                  _jsxs(
                    'h3',
                    __assign(
                      { className: 'text-sm' },
                      { children: ['User ID: ', user.id] }
                    ),
                    void 0
                  ),
                  _jsxs(
                    'h3',
                    __assign(
                      { className: 'text-sm' },
                      { children: ['User Name: ', user.name] }
                    ),
                    void 0
                  ),
                  _jsxs(
                    'h3',
                    __assign(
                      { className: 'text-sm' },
                      { children: ['User Email: ', user.email] }
                    ),
                    void 0
                  )
                ]
              },
              void 0
            );
          })
    },
    void 0
  );
};
export default Test;
