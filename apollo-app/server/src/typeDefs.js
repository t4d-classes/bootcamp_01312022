import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    age: Int
    color(id: ID): Color
    colors: [Color]
    books: [Book]
  }

  type Color {
    id: ID
    name: String
    hexcode: String
    upperCaseName: String
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
`;
