import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './graphql/index.js'

import { staticProvider } from './expressServer.js'

staticProvider()

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => console.log(`🚀 Data server ready at ${url}`))