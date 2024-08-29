import DataFetch from "../../controller/DataFetch"

const queries = {
    helloUser : async (_:any, args: {userId: String,id: String, title: String, completed: String  })=>{
       const response =  await DataFetch.fetchTodo()
       return response
    }
}
const mutations = {}

export const resolvers = {queries, mutations}