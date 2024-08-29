export const typeDefs = `#graphql
    type Todo {
        id: Int
        title: String
        completed: Boolean
        userValue: User
    }

    type Albums {
        id: ID
        title: String
        userValue: User
    }

    type User {
        id: ID!
        name: String
        username: String
        email: String
        website: String
    }

    type Comment {
        id: ID
        name: String
        email: String
        body: String
        postValue: Post
    }

    type Post {
        id: ID
        title: String
        body: String
    }

`;