import { useContext } from "react";
import BookSearchContext from "../../context/BookSearchContext";

const SearchResults = () => {
    const { searchResults } = useContext(BookSearchContext);

    return (
        <ul>
            {searchResults.map((book, index) => (
                <li key={index}>
                    <h2>{book.volumeInfo.title}</h2>
                </li>
            ))}
        </ul>
    );
};

export default SearchResults;
