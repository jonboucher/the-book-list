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
                style={{
                    width: "80%",
                    margin: "4rem auto",
                    display: "block",
                    fontSize: "2rem",
                    background: "rgba(255,255,255,0.05)",
                    border: "rgba(255, 255, 255, 0.06)",
                    borderRadius: "1rem",
                    color: "white",
                    padding: "1.5rem",
                }}
            ></input>
        </form>
    );
};

export default SearchBox;
