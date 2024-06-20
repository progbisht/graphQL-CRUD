# GraphQL Sever and CRUD Operations

## Objective
In this minor project, I have implemented the GraphQL server with the help of Node.js to work with the Queries and Mutations in GraphQL. As we all know GraphQL(runtime for APIs) resolves one of the generic problems of overfetching and underfetching (usually encountered while using REST API) as it provides only the requested amount of data. It fetches exactly the amount of data requested and is suitable for handling complex queries (aggregate data from multiple sources). 

## Dependencies
- [Node] (Run the GraphQL server)
- Apollo Server
- GraphQL

## Installation & Usage
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

- After that Apollo Sandbox will appear where we can perform the CRUD operations.

### Entry points and Resolvers
    ```
    books
    book
    reviews
    review
    author
    authors
    addBook
    updateBook
    deleteBook
    ```


### Description and Examples
#### Query server for fetching all or single Book/Reviews/Author (Review Author) or combined along with their properties

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

#### Query server for adding a new record

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
