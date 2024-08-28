import { ApolloServer } from '@apollo/server';
import { Users } from './user';



async function createGraphqlServer() {
    const gqlServer = new ApolloServer({
        typeDefs : `
            type Query {
                hello : String
                ${Users.queries}
            }
        `,
        resolvers : {
            Query : {
                ...Users.resolvers.queries
            },
        }
    })    

    await gqlServer.start()
    return gqlServer
}

export default createGraphqlServer