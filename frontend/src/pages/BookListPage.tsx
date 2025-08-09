import { useState } from "react";
import { bookData } from "../../../backend/data/mockBookList";
import BookList from "../components/BookList/BookList";
import type { BookListData } from "../types";

const BookListPage = () => {
    const [bookList, setBookList] = useState<BookListData>(bookData);

    return (
        <BookList
            title={bookList.title}
            description={bookList.description}
            books={bookList.books.items}
        />
    );
};

export default BookListPage;
