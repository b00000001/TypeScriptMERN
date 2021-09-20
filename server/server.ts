const express = require('express');
const app = express();
const path = require('path');
const {typeDefs} = require('./schemas');
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const port = process.env.PORT || 3001;

const db = require('./config/connection');

const server = new ApolloServer({ typeDefs });

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.sync().then(() =>{
    server.listen(port, () => {
        //eslint-disable-next-line no-console
        console.log(`App running at http://localhost:${port}`)
    });
})


export {}
 