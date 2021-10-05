/* eslint-disable import/first */
import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_USERS } from '../utils/queries';
import { ADD_USER } from '../utils/mutations';
const Test = () => {
  const [mutateFunction, { data, loading, error }] = useMutation(ADD_USER);
  interface alertType {
    show: Boolean;
    message: JSX.Element;
  }
  const [alert, changeAlert] = useState<alertType>({
    show: false,
    message: <></>
  });
  const [users, changeUsers] = useState({
    users: [],
    showUsers: false
  });
  const [formInfo, changeFormInfo] = useState({
    name: '',
    email: ''
  });
  const queryData = useQuery(QUERY_USERS);

  /* ========================== Handle Change */

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    switch (e.currentTarget.id) {
      case 'firstName':
        changeFormInfo({ ...formInfo, name: e.currentTarget.value });
        break;
      case 'email':
        changeFormInfo({ ...formInfo, email: e.currentTarget.value });
        break;
    }
  };

  /* ========================== Handle Click */
  const handleClick = () => {
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    mutateFunction({
      variables: { name: formInfo.name, email: formInfo.email }
    });
    if (!data) {
      changeAlert({
        show: true,
        message: <p className="mr-2">A user with this email already exists</p>
      });
    } else {
      changeAlert({
        show: true,
        message: <p className="mr-2">'User created successfully'</p>
      });
    }
  };

  return (
    <div>
      {/* ========================== Add Users Form */}
      <form
        className="bg-white border-2 border-gray-400 text-black"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="firstName"
              type="text"
              onChange={handleChange}
              placeholder="Jane"
              required
            />
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              onChange={handleChange}
              placeholder="jdoe@gmail.com"
              required
            />
            <button
              type="submit"
              className="border-2 border-black btn bg-white text-black"
            >
              Submit
            </button>
            {loading ? <p>Adding User</p> : null}
            {alert.show ? alert.message : null}
          </div>
        </div>
      </form>
      {/* ========================== Show Users Button */}
      <button
        className="bg-white border-2 border-gray-400 text-black"
        onClick={handleClick}
      >
        Show Users
      </button>
      {users.showUsers
        ? users.users.map(
            (user: { name: String; id: Number; email: String }) => (
              <div className="mt-2 border-2">
                <p>User Name: {user.name}</p>
                <p>User Id: {user.id}</p>
                <p>User Email: {user.email}</p>
              </div>
            )
          )
        : null}
    </div>
  );
};

export default Test;
