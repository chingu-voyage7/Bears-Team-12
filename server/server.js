const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 4000
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const passport = require('passport')
// Create GraphQL Schema
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')
const { ApolloServer } = require('apollo-server-express')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(session({ secret: 'asdf' }))
// Initialize Passport
require('./authentication/passport')
app.use(passport.initialize())
app.use(passport.session())
const authRouter = require('./authentication/authRouter')
app.use('/', authRouter)

// Apollo GraphQL Server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.applyMiddleware({ app }) // app is from an existing express app

app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))