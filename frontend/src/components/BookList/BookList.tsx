import BookListItem from "../BookListItem/BookListItem";
import type { GoogleBook } from "../../types";
import styles from "./BookList.module.scss";

type BookListProps = {
    title: string;
    description: string;
    books: GoogleBook[];
};

const BookList = ({ title, description, books }: BookListProps) => {
    return (
        <>
            <h1 style={{ marginTop: "12rem" }}>{title} </h1>
            <p style={{ color: "white" }}>{description}</p>
            <ul className={`${styles["book-list"]}`}>
                {books &&
                    books.map((book) => {
                        return (
                            <BookListItem
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                cover={book.volumeInfo.imageLinks?.thumbnail}
                            />
                        );
                    })}
            </ul>
        </>
    );
};

export default BookList;
