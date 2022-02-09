import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    age: Int
    color(id: ID): Color
    colors: [Color]
    book(id: ID): Book
    books: [Book]
  }

  type Mutation {
    addColor(color: NewColor): Color
    appendBook(book: NewBook): Book
    removeBook(bookId: ID): Book
  }

  type Color {
    id: ID
    name: String
    hexcode: String
    upperCaseName: String
  }

  input NewColor {
    name: String
    hexcode: String
  }

  type Book {
    id: ID
    isbn: String
    title: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
  } 

  input NewBook {
    isbn: String
    title: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
  }    
`;
