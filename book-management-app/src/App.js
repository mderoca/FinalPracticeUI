// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link, } from 'react-router-dom';
// import BookListPage from './pages/BookListPage';
// import AddBookPage from './pages/AddBookPage';
import BookList from './components/BookList';
import AddBook from './components/AddBookForm';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Book List</Link>
          </li>
          <li>
            <Link to="/add">Add Book</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<BookList/>} />
        <Route path="/add" element={<AddBook/>} />
      </Routes>
    </Router>
  );
}

export default App;
