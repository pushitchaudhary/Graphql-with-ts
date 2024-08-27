import { ApolloServer } from '@apollo/server';

async function createApolloServer(){
    // CREATE APOLLO SERVER
    const gqlServer = new ApolloServer({
        // Schema
        typeDefs : `
            type Query {

            }
            type Mutation {

            }
        `,
        resolvers : {
        
        }
    })

    await gqlServer.start()

    return gqlServer
}

export default createApolloServer;
