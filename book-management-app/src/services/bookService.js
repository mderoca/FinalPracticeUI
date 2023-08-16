import axios from 'axios';
import authHeader from './auth-header';

// const API_URL = "http://localhost:5000/";
const API_URL = "https://practicebackend-4ohm.onrender.com/";

const getBooks = () => {
    return axios.get(API_URL, {headers:authHeader()});
}
  const addBook = (bookObj) => {
    return axios.post(API_URL, bookObj, {headers:authHeader()})
  }

  const deleteBook =(id)=>{
    return axios.delete(API_URL +id ,{headers:authHeader()})
 }

  const bookService = {
    getBooks,
    addBook,
    deleteBook
  };
  
  export default bookService;