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
    colors() {
      return [
        { "id": 1, name: 'red', hexcode: 'ff0000' },
        { id: 2, name: 'green', hexcode: '00ff00' },
      ];
    }
  },
};
