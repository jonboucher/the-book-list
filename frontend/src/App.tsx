import { BookSearchProvider } from './context/BookSearchContext';
import { UserProvider } from './context/UserContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import SearchResultsPage from './pages/SearchResultsPage';
import UserHomePage from './pages/UserHomePage';
import EditListPage from './pages/EditListPage';
import ListModal from './components/ListModal/ListModal';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

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
              <Route path='/list/:id/edit' element={<EditListPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/sign-up' element={<SignUpPage />} />
            </Routes>
          </Router>
          <ListModal />
        </main>
      </BookSearchProvider>
    </UserProvider>
  );
}

export default App;
