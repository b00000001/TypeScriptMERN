import express from "express";
import path from "path";
import {ApolloServer } from 'apollo-server-express';
import * as dotenv from 'dotenv';
const PORT = 3001; // default port to listen
const app = express();
const {typeDefs}  = require('./schemas')
dotenv.config({ path: '.env' });
// define a route handler for the default home page
const server = new ApolloServer({
    typeDefs
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

app.get("*", ( _, res ) => {
    // render the index template
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

// start the express server
app.listen( PORT, () => {
        //eslint-disable-next-line no-console
        console.log( `server started at http://localhost:${ PORT }` );
} );

