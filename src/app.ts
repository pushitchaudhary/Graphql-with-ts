import express from 'express'
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

async function Server() {
    
const app = express()
const PORT = 8000

app.use(express.json())

// CREATE APOLLO SERVER
const gqlServer = new ApolloServer({
    // Schema
    typeDefs : `        
        type Query {
            hello : String
        }
    `,
    resolvers : {}
})

await gqlServer.start()

app.get('/',(req,res)=>{
    res.send('server okk')
})

app.use('/graphql',expressMiddleware(gqlServer))


app.listen(PORT, ()=>{
    console.log(`Server Has Started at ${PORT}`)
})

}

Server()