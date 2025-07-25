import type { BookData } from "../BookList/BookList";
import styles from "./BookListItem.module.scss";

const BookListItem = ({
    title,
    author,
    description,
    cover,
    genre,
}: BookData) => {
    return (
        <div className={`${styles["book-list-item"]}`}>
            <div className={`${styles["book-list-item__cover"]}`}>
                <img src={cover} />
            </div>
            <div className={`${styles["book-list-item__text"]}`}>
                <h2>{title}</h2>
                <p>{author}</p>
                <p>{description}</p>
                <p>{genre}</p>
            </div>
        </div>
    );
};

export default BookListItem;
