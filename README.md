# GraphQL Sever and CRUD Operations

In this section I have implemeted the GraphQL server with the help of Node.js in order to work with the Queries and Mutations in GraphQL. As we all know that the GraphQL resolves one of the generic problem of overfetching and underfetching (usually encoundered while using REST API) as it provides only requested amount of data. It is also suitable for handling complex queries when the data are related to each other. 

## Dependencies
- [Node] (Run the GraphQL server)
- Apollo Server
- GraphQL

## Usage
- Clone the repo
```
git clone [repo name]
```
- Install the dependencies
```
npm install
```
- Run the GraphQL server
```
npm run dev
```

- After that Apollo Sandbox will apper where we can perform the CRUD operations.

### Entrypoints and Resolvers
    ```
    books
    book
    reviews
    review
    author
    authors
    addBook,
    updateBook,
    deleteBook
    ```


### Operations
- Query server for fetching all or single Book/Reviews/Author (Review Author) or combined along with their properties

Syntax
```
query QueryName{
    // matching with resolver function
    entrypoint: {
        properties
    }
}
```

Example: Fetch all books with id and title
```
query BookQuery{
    books{
        id,
        title
    }
}
```

Example: Fetch single book with id and title
```
query BookQuery($id: ID!){
    book(id: $id){
        id,
        title
    }
}

Variables:
{
    "id": "3"
}
```

Example: Fetch all books with reviews content aand ratings along with their author name
```
query BookQuery{
    books{
        id,
        title, 
        reviews: {
            content,
            ratings,
            author: {
                name
            }
        }
    }
}
```

- Query server for adding a new record

Syntax
```
mutation MutationName(args){
    entryPoint      // matching with resolver function 
}
```

Example:
```
mutation AddMutation($book: AddBookInput){
    addBook(book: $book){
        id,
        title,
        platforms
    }
}

Variables
{
    "book": {
        "title": "Arthashastra",
        "platforms": ["Kindle", "Amazon Store"]
    }
}
```