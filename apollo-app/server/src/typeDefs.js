import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    age: Int
    color(id: ID): Color
    colors: [Color]
  }

  type Color {
    id: ID
    name: String
    hexcode: String
  }
`;
