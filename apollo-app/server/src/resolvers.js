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
};
