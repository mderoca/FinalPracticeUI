import React, { useState } from 'react';
import BookService from '../services/bookService';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const savedBook = await BookService.addBook({
        title,
        author,
        description,
      });
      console.log('Book added:', savedBook);
      // Clear form fields
      setTitle('');
      setAuthor('');
      setDescription('');
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
