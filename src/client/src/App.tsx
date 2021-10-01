/* eslint-disable import/first */
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Body from '../src/components/Body';

function App() {
  return (
    <Router>
      <Header />
      <Body />
      <Footer />
    </Router>
  );
}

export default App;
