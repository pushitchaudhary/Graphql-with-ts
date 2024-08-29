import { ApolloServer } from "@apollo/server"
import { User } from "./user"


async function createGraphqlServer() {
    const gqlServer = new ApolloServer({
        typeDefs: `
        ${User.typeDefs}
            type Query {
                hello : String
                ${User.queries}
            }
        `,
        resolvers : {
            Query : {
                ...User.resolvers.queries
            }
        }
    })

    await gqlServer.start()
    return gqlServer

}

export default createGraphqlServer