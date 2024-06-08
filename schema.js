// Line 8: schema for book (! means that the field is important)
// Line 14: schema for reviews 
// Line 20: schema for author
// Line 26: entrypoint for our queries
// Line 28: entrypoint for single data query
// Line 14, 20, 21, 29: entrypoint for related data
// Line 42: mutation type for adding and deleting data from the database
// Line 48: input type for defining input schema to add new data

export const typeDefs = `#graphql

    type Book{
        id: ID!
        title: String!
        platforms: [String]!
        reviews: [Review!]
    }

    type Review{
        id: ID!
        rating: Int! 
        content: String!
        book: Book!
        author: Author!
    }

    type Author{
        id: ID!
        name: String!,
        verified: Boolean!
        reviews: [Review!]
    }

    type Query {
        reviews: [Review]
        review(id: ID!): Review
        books: [Book]
        book(id: ID!): Book    
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        addBook(book: AddBookInput) : Book
        updateBook(id: ID!, edits: EditBookInput) : Book
        deleteBook(id: ID!) : [Book]
    }

    input AddBookInput {
        title: String!
        platforms: [String!]
    }
    input EditBookInput {
        title: String
        platforms: [String!]
    }
`