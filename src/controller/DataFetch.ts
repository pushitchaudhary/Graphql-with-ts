import axios from "axios"


class DataFetch {
    async fetchTodo() :Promise<String>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
        return response.data
    }

    async fetchTodoById(id :String) : Promise<String>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        return response.data
    }

    async UserData() : Promise<String>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        return response.data
    }

    async UserDataById(id: String) : Promise<String>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.data
    }

    async fetchAlbums() : Promise<String>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
        return response.data
    }

    async fetchComment(id:String) : Promise<String>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
        return response.data 
    }
}

export default new DataFetch