import axios from "axios"
import DataFetch from "../../controller/DataFetch"

const queries = {
    TodoData : async (_:any, args: {userId: String,id: String, title: String, completed: String  })=>{
        const response =  await DataFetch.fetchTodo()
        return response
    },

    TodoById: async (_:any, id:{id: String})=>{
        const ids = id.id
        const response = await DataFetch.fetchTodoById(ids)
        return response
    },

    UserData : async (_:any, {}:{})=>{
        const response = await DataFetch.UserData()
        return response
    },

    AlbumsData : async(_:any, {}:{})=>{
        const response = await DataFetch.fetchAlbums()
        return response
    },

    CommentData : async(_:any,id:{id:String})=>{
        const response = await DataFetch.fetchComment(id.id)
        return response
    }
}

const User = {
    // userValue: async (todo: any) => {
    //     console.log('data is :', todo.userId)
    //     const response = await DataFetch.UserDataById(todo.userId)
    //     return response;
    // },

    userValue : {
        userValue: async (todo: any) => {
            console.log('data is :', todo.userId)
            const response = await DataFetch.UserDataById(todo.userId)
            return response;
        },
    },

    postValue : {
        postValue: async (post: any) => {
            const user = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.postId}`);
            return user.data;
        },
    }
    
    

    

};


const mutations = {}


export const resolvers = {queries, User, mutations}