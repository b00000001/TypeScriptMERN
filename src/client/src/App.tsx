/* eslint-disable import/first */
import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import Body from '../src/components/Body';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:3001/graphql'
});
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Body />
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
