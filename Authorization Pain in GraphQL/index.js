const { ApolloServer } = require('apollo-server');

// GraphQL schema
const schema = require('./schema');
// GraphQL resolvers
const resolvers = require('./resolvers');

// Buckle up the apollo server is starting
const server = new ApolloServer({ typeDefs: schema, resolvers });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  console.log(`GraphQL playground available at ${url}playground`);
});