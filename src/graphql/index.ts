// import { ApolloServer } from "@apollo/server"
// import axios from "axios"
// import { User } from "./user"


// async function createGraphqlServer() {
//     const gqlServer = new ApolloServer({
//         typeDefs: `
//             ${User.typeDefs}
//             type Query {
//                 hello : String
//                 ${User.queries}
//             }
//         `,
//         resolvers : {
//             Query : {
//                 ...User.resolvers.queries
//             },
            
//         }
//     })

//     await gqlServer.start()
//     return gqlServer

// }

// export default createGraphqlServer




import { ApolloServer } from "@apollo/server";
import { User } from "./user";


async function createGraphqlServer() {
    const gqlServer = new ApolloServer({
        typeDefs: `
            ${User.typeDefs}
            type Query {
                ${User.queries}
            }
        `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,  // Spread the resolvers for queries
            },
            Todo: User.resolvers.User.userValue,

            // Albums: User.resolvers.User.userValue,  // Include the nested field resolvers for Todo

            Comment: User.resolvers.User.postValue,  // Include the nested field resolvers for Todo
           
        },
    });

    await gqlServer.start();
    return gqlServer;
}

export default createGraphqlServer;
