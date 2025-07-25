import { bookData } from "../../../backend/data/mockBookList";
import BookList from "../components/BookList/BookList";

const BookListPage = () => {
    return <BookList books={bookData} />;
};

export default BookListPage;
