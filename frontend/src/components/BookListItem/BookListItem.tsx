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
        <li className={`${styles["book-list-item"]}`}>
            <div className={`${styles["book-list-item__cover"]}`}>
                <img src={cover} />
            </div>
            <div className={`${styles["book-list-item__text"]}`}>
                <h2 className={`${styles["book-list-item__text--title"]}`}>
                    {title}
                </h2>
                <p className={`${styles["book-list-item__text--author"]}`}>
                    {author}
                </p>
                <p className={`${styles["book-list-item__text--note"]}`}>
                    {description}
                </p>
                <p className={`${styles["book-list-item__text--genre"]}`}>
                    Genre: {genre}
                </p>
            </div>
        </li>
    );
};

export default BookListItem;
