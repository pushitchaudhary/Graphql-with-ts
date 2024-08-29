import axios from "axios"


class DataFetch {
    async fetchTodo() :Promise<String>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
        console.log(response.data)
        return response.data
    }
}

export default new DataFetch