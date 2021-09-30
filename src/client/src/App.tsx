/* eslint-disable import/first */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../src/components/Header';
// import Homepage from '../src/pages/Homepage';
// import Login from '../src/pages/Login';
// import Test from '../src/pages/Test';
import Body from '../src/components/Body';
function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Body />
    </Router>
  );
}

export default App;
