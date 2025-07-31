import styles from "./SearchResultItem.module.scss";

type SearchResultItemProps = {
    title: string;
    authors?: string[];
    publishedDate?: string;
    description?: string;
    pageCount?: string;
    categories?: string[];
    cover?: string;
};

const SearchResultsItem = ({
    title,
    authors,
    publishedDate,
    description,
    pageCount,
    categories,
    cover,
}: SearchResultItemProps) => {
    return (
        <div className={`${styles["search-results-item"]}`}>
            <div className={`${styles["search-results-item__cover"]}`}>
                <img src={cover} />
            </div>
            <div className={`${styles["search-results-item__info"]}`}>
                <h2 className={`${styles["search-results-item__info--title"]}`}>
                    {title}
                </h2>
                <p>{authors && authors[0]}</p>
                <p
                    className={`${styles["search-results-item__info--description"]}`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
};

export default SearchResultsItem;
