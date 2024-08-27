import express from 'express'

import { expressMiddleware } from '@apollo/server/express4';
import createApolloServer from './graphql';


async function Server() {
    
const app = express()
const PORT = 8000

app.use(express.json())



app.get('/',(req,res)=>{
    res.send('server okk')
})

const gqlServer = await createApolloServer()
app.use('/graphql',expressMiddleware(gqlServer))


app.listen(PORT, ()=>{
    console.log(`Server Has Started at ${PORT}`)
})

}

Server()