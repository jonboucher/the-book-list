import { useContext, useState } from "react";
import BookSearchContext from "../../context/BookSearchContext";

const SearchBox = () => {
    const [searchValue, setSearchValue] = useState("");
    const { searchBooks } = useContext(BookSearchContext);

    const handleSearch = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();
        searchBooks(searchValue);
    };

    return (
        <form onSubmit={(e) => handleSearch(e)}>
            <input
                value={searchValue}
                type="text"
                placeholder="Search books"
                onChange={(e) => setSearchValue(e.target.value)}
            ></input>
        </form>
    );
};

export default SearchBox;
