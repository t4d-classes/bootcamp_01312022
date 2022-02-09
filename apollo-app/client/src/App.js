import { useQuery, gql, useMutation } from "@apollo/client";

import { BookTable } from './components/BookTable';
import { BookForm } from './components/BookForm';

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

const APPEND_BOOK_MUTATION = gql`
  mutation AppendBook($book: NewBook) {
    appendBook(book: $book) {
      id
      title
    }
  }
`;

const REMOVE_BOOK_MUTATION = gql`
  mutation RemoveBook($bookId: ID) {
    removeBook(bookId: $bookId) {
      id
      title
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(APP_QUERY);

  const [ mutateAppendBook ] = useMutation(APPEND_BOOK_MUTATION);
  const [ mutateRemoveBook ] = useMutation(REMOVE_BOOK_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const addBook = newBook => {

    return mutateAppendBook({
      variables: {
        book: newBook,
      },
      refetchQueries: [ { query: APP_QUERY } ]
    });
  };

  const deleteBook = bookId => {
    return mutateRemoveBook({
      variables: {
        bookId: bookId,
      },
      refetchQueries: [ { query: APP_QUERY } ]
    });  
  };

  return (
    <>
      <ul>
        {data.allColors.map(color => <li key={color.id}>
          {color.name} {color.hexcode}
        </li>)}
      </ul>
      <BookTable books={data.books} onDeleteBook={deleteBook} />
      <BookForm buttonText="Add Book" onSubmitBook={addBook} />
    </>
  );
}

export default App;
