import { BrowserRouter as Router, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import BookListPage from "./pages/BookListPage";

function App() {
    return (
        <main>
            <Router>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="/list/:id" element={<BookListPage />} />
                </Routes>
            </Router>
        </main>
    );
}

export default App;
