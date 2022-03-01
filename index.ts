import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import * as Express from 'express'
import { buildSchema } from 'type-graphql'

import { MotoResolver } from './resolvers/motoResolver'

/*
On crée un serveur local
*/

async function main() {

  // Avec ces lignes, on a construit un nouveau schema GraphQL basé sur le MotoResolver
  const schema = await buildSchema({
    resolvers: [MotoResolver],
    emitSchemaFile: true, //permet de generer un fichier schema.gql
  })

  const app = Express()

  //on crée le serveur
  const server = new ApolloServer({
    schema,
  })

  server.applyMiddleware({ app })

  app.listen(3000, () =>
    console.log('Server is running on http://localhost:3000/graphql')
  )
}

main()