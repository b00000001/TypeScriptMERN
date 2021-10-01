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
/* eslint-disable import/first */
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
var Test = function () {
  var _a = useState({
      users: [],
      showUsers: false
    }),
    users = _a[0],
    changeUsers = _a[1];
  var queryData = useQuery(QUERY_USER);
  var handleClick = function () {
    if (users.showUsers) {
      changeUsers({
        users: [],
        showUsers: false
      });
    } else {
      changeUsers({
        users: queryData.data.users,
        showUsers: true
      });
    }
  };
  return _jsxs(
    'div',
    {
      children: [
        _jsx(
          'button',
          __assign(
            { className: 'btn btn-black', onClick: handleClick },
            { children: 'Show Users' }
          ),
          void 0
        ),
        users.showUsers
          ? users.users.map(function (user) {
              return _jsxs(
                'div',
                __assign(
                  { className: 'mt-2 border-2' },
                  {
                    children: [
                      _jsxs(
                        'p',
                        { children: ['User Name:', user.name] },
                        void 0
                      ),
                      _jsxs('p', { children: ['User Id:', user.id] }, void 0),
                      _jsxs(
                        'p',
                        { children: ['User Email:', user.email] },
                        void 0
                      )
                    ]
                  }
                ),
                void 0
              );
            })
          : null
      ]
    },
    void 0
  );
};
export default Test;
