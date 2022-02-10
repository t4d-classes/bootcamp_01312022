import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message() {
      return 'Welcome to React and Apollo!';
    },
    age() {
      return 23;
    },
    async color(_, args) {
      const res = await fetch('http://localhost:5050/colors/' + args.id);
      const color = await res.json();
      return color;
    },
    async colors() {
      const res = await fetch('http://localhost:5050/colors');
      return await res.json();
    },
    async book(_, args) {
      const res = await fetch('http://localhost:5050/books/' + args.id);
      const book = await res.json();
      return book;
    },
    async books() {
      const res = await fetch('http://localhost:5050/books');
      return await res.json();
    },
    async authors() {
      const res = await fetch('http://localhost:5050/authors');
      return await res.json();
    },
  },
  Mutation: {
    async addColor(_, { color }, { restUrl }) {

      const res = await fetch(
        `${restUrl}/colors`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(color),
        }
      );

      return await res.json();
    },
    async appendBook(_, { book }, { restUrl }) {

      const res = await fetch(
        `${restUrl}/books`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(book),
        }
      );

      return await res.json();
    },
    async removeBook(_, { bookId }, { restUrl }) {

      const res = await fetch(`${restUrl}/books/${encodeURIComponent(bookId)}`);
      const book = await res.json();

      await fetch(
        `${restUrl}/books/${encodeURIComponent(bookId)}`,
        {
          method: 'DELETE',
        }
      );

      return book;
    }
  },
  Color: {
    // default resolver
    // id(color) {
    //   return color.id;
    // },
    upperCaseName(color) {
      return color.name.toUpperCase();
    },
  },
  Author: {
    books: (author) => {
      const authorId = encodeURIComponent(author.id);
      return fetch(`http://localhost:5050/books?authorId=${authorId}`)
        .then(res => res.json());
    },
  },
  Book: {
    // default or implied resolver
    // title: (book) => {
    //   return book.title;
    // },
    author: (book) => {
      const authorId = encodeURIComponent(book.authorId);
      return fetch(`http://localhost:5050/authors/${authorId}`)
        .then(res => res.json());
    },
  },  
};
