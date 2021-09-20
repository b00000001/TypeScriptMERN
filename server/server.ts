const express = require('express');
const app = express();
const {typeDefs} = require('./schemas');
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const port = process.env.PORT || 3001;


const server = new ApolloServer({ typeDefs });
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    //eslint-disable-next-line no-console
    console.log(`App running at http://localhost:${port}`)
});

export {}
 