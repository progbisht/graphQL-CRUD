import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db import 
import db from "./db.js";


// resolvers - handles the entrypoints for the graphql server
// the requried fields in the query are handled (filtered) by the sandbox itself
const resolvers = {
    Query: {
        // resolver for query requesting all data
        books() {
            return db.books
        },

        // resolver for query requsting single data
        book(_, args){
            return db.books.find((book) => book.id === args.id)
        },

        authors() {
            return db.authors
        },

        author(_, args){
            return db.authors.find((author) => author.id === args.id)
        },

        reviews() {
            return db.reviews
        },

        review(_, args){
            return db.reviews.find((review) => review.id === args.id)
        }
    },

    // resolver for nested queries 
    // List all book reviews
    Book: {
        reviews(parent){
            return db.reviews.filter((review) => review.book_id === parent.id)
        }
    },

    // List all reviews published by an author
    Author: {
        reviews(parent){
            return db.reviews.filter((review) => review.author_id === parent.id)
        }
    },

    // List each review published by an author and book on which the review is published
    Review: {
        book(parent){
            return db.books.find((book) => book.id === parent.book_id)
        },

        author(parent){
            return db.authors.find((auth) => auth.id === parent.author_id)
        }
    },

    // resolver for mutatiions like adding or deleting data
    Mutation: {
        // add a new book
        addBook(_, args){
            let book = {
                ...args.book,
                id: db.books.length ? (parseInt(db.books.sort((a,b) => a.id - b.id)[db.books.length - 1].id) + 1).toString() : (1).toString()
            }

            db.books.push(book)
            return book
        },

        // update an existing book
        updateBook(_, args){
            let book = db.books.find((book) => book.id === args.id)

            book = { 
                ...book,
                ...args.edits
            }

            db.books = [...db.books, book]

            return book
        }, 

        // delete an existing book
        deleteBook(_,args){
            db.books = db.books.filter((book) => book.id !== args.id )
            return db.books
        }
    }
}

// types - defines schema for the graph data
import { typeDefs } from "./schema.js";

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log(url);