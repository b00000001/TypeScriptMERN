import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../../pages/Homepage';
import Login from '../../pages/Login';
import Test from '../../pages/Test';

const index = () => {
  return (
    <div className="bg-gray-800 text-white h-screen">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
      </Switch>
    </div>
  );
};

export default index;
