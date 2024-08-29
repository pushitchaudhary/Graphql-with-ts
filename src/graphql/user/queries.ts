export const queries = `#graphql
    TodoData: [Todo]
    TodoById(id: ID) : Todo
    AlbumsData: [Albums]
    UserData: [User]
    CommentData(id:ID): Comment
`