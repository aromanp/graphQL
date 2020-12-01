import { ApolloServer } from 'apollo-server';
import { schema } from './schema'
import { dataSources } from './dataSource';

const server = new ApolloServer({ schema: schema, dataSources  })

server.listen().then(({ url }) => {
  console.log(`Corriendo en: ${url}`)
})