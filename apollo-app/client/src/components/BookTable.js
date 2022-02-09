export const BookTable = ({ books, onDeleteBook }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.price}</td>
          <td><button type="button" onClick={() => onDeleteBook(book.id)}>
            Delete</button></td>
        </tr>)}
      </tbody>
    </table>
  )
};