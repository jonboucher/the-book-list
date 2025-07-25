import BookListItem from "../BookListItem/BookListItem";
import styles from "./BookList.module.scss";

export type BookData = {
    id: number;
    title: string;
    author: string;
    cover: string;
    description: string;
    genre: string;
};

type BookListProps = {
    books: BookData[];
};

const BookList = ({ books }: BookListProps) => {
    return (
        <ul className={`${styles["book-list"]}`}>
            {books &&
                books.map((book) => {
                    return (
                        <BookListItem
                            id={book.id}
                            key={book.id}
                            title={book.title}
                            author={book.author}
                            description={book.description}
                            cover={book.cover}
                            genre={book.genre}
                        />
                    );
                })}
        </ul>
    );
};

export default BookList;
