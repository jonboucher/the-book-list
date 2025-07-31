import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { BookSearchResults } from "../types";

type BookSearchContextType = {
    searchResults: BookSearchResults[];
    searchBooks: (query: string) => Promise<void>;
};

const defaultContext: BookSearchContextType = {
    searchResults: [],
    searchBooks: async () => {}, // no-op function
};

const BookSearchContext = createContext<BookSearchContextType>(defaultContext);

type BookSearchProviderProps = {
    children: ReactNode;
};

export const BookSearchProvider = ({ children }: BookSearchProviderProps) => {
    const [searchResults, setSearchResults] = useState<BookSearchResults[]>([]);

    const searchBooks = async (query: string): Promise<void> => {
        const res = await fetch(
            `http://localhost:3000/search-books?search=${query}`
        );
        const data = await res.json();
        setSearchResults(data.items);
    };

    return (
        <BookSearchContext.Provider value={{ searchResults, searchBooks }}>
            {children}
        </BookSearchContext.Provider>
    );
};

export default BookSearchContext;
