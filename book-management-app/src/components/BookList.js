import React, { useState, useEffect } from 'react';
import BookService from '../services/bookService';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await BookService.getBooks();
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleDelete = async (bookId) => {
    try {
      await BookService.deleteBook(bookId);
      // After successful deletion, fetch and update the book list
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Author</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.description}</td>
              <td>
                <button onClick={() => handleDelete(book._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
