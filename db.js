let books = [
    {id: '1', title: 'Alice in Wonderland', platforms: ['Kindle', 'Google Books', 'Amazon Store']},
    {id: '2', title: 'Time Machine', platforms: ['Google Books', 'Amazon Store']},
    {id: '3', title: 'Arthashastra', platforms: ['Kindle', 'Amazon Store']},
    {id: '4', title: 'Gulliver’s Travels', platforms: ['Google Books', 'Amazon Store']},
    {id: '5', title: 'Geetanjali', platforms: ['Kindle', 'Google Books']},
    {id: '6', title: 'The Merchant of Venice', platforms: ['Google Books']},
    {id: '7', title: 'Chitra', platforms: ['Amazon Store']},
]

let authors = [
    {id: '1', name: 'Mac', verified: true},
    {id: '2', name: 'Harry', verified: false},
    {id: '3', name: 'Kautilya', verified: true},
    {id: '4', name: 'Jonathan', verified: false},
    {id: '5', name: 'Ravindra', verified: true},
    {id: '6', name: 'Shakz', verified: true},
    

]

let reviews = [
    {id: '1', rating: 4, content: 'Amazing storyline', author_id: '2', book_id: '2',},
    {id: '2', rating: 5, content: 'Wonderful plot', author_id: '5', book_id: '5',},
    {id: '3', rating: 3, content: 'Vast but amazing context', author_id: '6', book_id: '6',},
    {id: '4', rating: 5, content: 'Best litrature', author_id: '5', book_id: '7',},
    {id: '5', rating: 4, content: 'Mesmerizing context', author_id: '2', book_id: '2',},
    {id: '6', rating: 5, content: 'Lovely twist', author_id: '1', book_id: '1',},
    {id: '7', rating: 4, content: 'Knowledgible script', author_id: '3', book_id: '3',},
    {id: '8', rating: 5, content: 'Wonderful plot', author_id: '4', book_id: '4',},
    {id: '9', rating: 3, content: 'Nice genre', author_id: '3', book_id: '3',},


]

export default {
    books,
    authors,
    reviews
}