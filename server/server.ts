import express, { Application, Request, Response, NextFunction} from "express";
import path from "path";
import { ApolloServer } from 'apollo-server-express';
import * as dotenv from 'dotenv';
import typeDefs from './schemas'
const db = require('./config/connection');
const PORT = 3001; // default port to listen
const app: Application = express();
dotenv.config({ path: '.env' });
// define a route handler for the default home page
const server = new ApolloServer({typeDefs});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

app.get("*", ( _, res: Response ) => {
    // render the index template
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

// start the express server
db.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
  