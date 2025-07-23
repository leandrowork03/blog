//src/lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: '/api/graphql', // endpoint da GraphQL
  cache: new InMemoryCache(),
})

export default client

