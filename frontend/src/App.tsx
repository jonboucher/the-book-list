import { BookSearchProvider } from './context/BookSearchContext';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import SearchResultsPage from './pages/SearchResultsPage';
import UserHomePage from './pages/UserHomePage';

function App() {
  return (
    <UserProvider>
      <BookSearchProvider>
        <main>
          <Router>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path='/search' element={<SearchResultsPage />} />
              <Route path='/user/:id' element={<UserHomePage />} />
              <Route path='/list/:id' element={<BookListPage />} />
            </Routes>
          </Router>
        </main>
      </BookSearchProvider>
    </UserProvider>
  );
}

export default App;
