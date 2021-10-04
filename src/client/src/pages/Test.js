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
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
import { ADD_USER } from '../utils/mutations';
var Test = function () {
  var _a = useMutation(ADD_USER),
    mutateFunction = _a[0],
    _b = _a[1],
    data = _b.data,
    loading = _b.loading,
    error = _b.error;
  var _c = useState({
      users: [],
      showUsers: false
    }),
    users = _c[0],
    changeUsers = _c[1];
  var _d = useState({
      name: '',
      email: ''
    }),
    formInfo = _d[0],
    changeFormInfo = _d[1];
  var queryData = useQuery(QUERY_USERS);
  /* ========================== Handle Change */
  var handleChange = function (e) {
    switch (e.currentTarget.id) {
      case 'firstName':
        changeFormInfo(
          __assign(__assign({}, formInfo), { name: e.currentTarget.value })
        );
        break;
      case 'email':
        console.log('Email: ', e.currentTarget.value);
        changeFormInfo(
          __assign(__assign({}, formInfo), { email: e.currentTarget.value })
        );
        break;
    }
  };
  /* ========================== Handle Click */
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
  /* ========================== Handle Submit */
  var handleSubmit = function (e) {
    e.preventDefault();
    console.log(formInfo);
    mutateFunction({
      variables: { name: formInfo.name, email: formInfo.email }
    });
  };
  return _jsxs(
    'div',
    {
      children: [
        _jsx(
          'form',
          __assign(
            {
              className: 'bg-white border-2 border-gray-400 text-black',
              onSubmit: handleSubmit
            },
            {
              children: _jsx(
                'div',
                __assign(
                  { className: 'flex flex-wrap' },
                  {
                    children: _jsxs(
                      'div',
                      __assign(
                        { className: 'w-full md:w-1/2 px-3 mb-6 md:mb-0' },
                        {
                          children: [
                            _jsx(
                              'label',
                              __assign(
                                {
                                  className:
                                    'block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2',
                                  htmlFor: 'grid-first-name'
                                },
                                { children: 'Name' }
                              ),
                              void 0
                            ),
                            _jsx(
                              'input',
                              {
                                className:
                                  'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                                id: 'firstName',
                                type: 'text',
                                onChange: handleChange,
                                placeholder: 'Jane',
                                required: true
                              },
                              void 0
                            ),
                            _jsx(
                              'input',
                              {
                                className:
                                  'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500',
                                id: 'email',
                                type: 'email',
                                onChange: handleChange,
                                placeholder: 'jdoe@gmail.com',
                                required: true
                              },
                              void 0
                            ),
                            _jsx(
                              'button',
                              __assign(
                                {
                                  type: 'submit',
                                  className:
                                    'border-2 border-black btn bg-white text-black'
                                },
                                { children: 'Submit' }
                              ),
                              void 0
                            ),
                            loading
                              ? _jsx('p', { children: 'Adding User' }, void 0)
                              : null
                          ]
                        }
                      ),
                      void 0
                    )
                  }
                ),
                void 0
              )
            }
          ),
          void 0
        ),
        _jsx(
          'button',
          __assign(
            {
              className: 'bg-white border-2 border-gray-400 text-black',
              onClick: handleClick
            },
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
                        { children: ['User Name: ', user.name] },
                        void 0
                      ),
                      _jsxs('p', { children: ['User Id: ', user.id] }, void 0),
                      _jsxs(
                        'p',
                        { children: ['User Email: ', user.email] },
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
