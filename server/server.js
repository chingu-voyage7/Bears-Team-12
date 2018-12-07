const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// Create GraphQL Schema
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const { ApolloServer, gql } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const schema = makeExecutableSchema({ typeDefs, resolvers })
const PORT = process.env.PORT || 4000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Mongoose MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/communities');
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB')
})
/*
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/api/test', (req, res) => {

	console.log('endpoint hit')
})
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({ app }) // app is from an existing express app

app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))