const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/api/test', (req, res) => {

	console.log('endpoint hit')
})
 
// The GraphQL schema
const typeDefs = gql`
  type Query {
    firstName: String
	}
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    firstName: () => 'Jordan'
  }
};

const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)