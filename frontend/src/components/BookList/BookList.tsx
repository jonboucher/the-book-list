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
        <>
            <h1 style={{ marginTop: "12rem" }}>Malazan: Book of the Fallen</h1>
            <p style={{ color: "white" }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit,
            </p>
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
        </>
    );
};

export default BookList;
