import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import * as dotenv from 'dotenv'
import * as path from 'path'
const db = require('./config/connection')
const { typeDefs } = require('./schemas')
dotenv.config()

const app = express()

const server = new ApolloServer({
  typeDefs
})

server.applyMiddleware({ app })

const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

db.sync().then(() => {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`API server running on port ${PORT}!`);
    // eslint-disable-next-line no-console
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  })
})
