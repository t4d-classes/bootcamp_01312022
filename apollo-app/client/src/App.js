import { useQuery, gql } from "@apollo/client";

const APP_QUERY = gql`
  query App {
    colors {
      id
      upperCaseName
      hexcode
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
        {data.colors.map(color => <li key={color.id}>
          {color.upperCaseName} {color.hexcode}
        </li>)}
      </ul>
    </>
  );
}

export default App;
