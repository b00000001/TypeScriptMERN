/* eslint-disable import/first */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/components/Header';
import Homepage from '../src/pages/Homepage';
import Login from '../src/pages/Login';
import Test from '../src/pages/Test';
function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
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
    </Router>
  );
}

export default App;
