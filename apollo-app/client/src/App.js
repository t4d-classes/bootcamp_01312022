import { useQuery, gql } from "@apollo/client";

import { BookTable } from './components/BookTable';

const APP_QUERY = gql`
  query App {
    allColors: colors {
      id
      name: upperCaseName
      hexcode
    }
    books {
      id
      title
      price
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(APP_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <ul>
        {data.allColors.map(color => <li key={color.id}>
          {color.name} {color.hexcode}
        </li>)}
      </ul>
      <BookTable books={data.books} />
    </>
  );
}

export default App;
