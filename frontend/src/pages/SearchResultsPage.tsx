import SearchBox from "../components/SearchBox/SearchBox";
import SearchResults from "../components/SearchResults/SearchResults";

type BookInfo = {
    volumeInfo: {
        title: string;
        subtitle?: string;
        authors: string[];
        publisher?: string;
        publishedDate?: string;
        description?: string;
        pageCount?: number;
        categories?: string[];
        averageRating?: number;
        ratingsCount?: number;
        language?: string;
        maturityRating?: string;
        imageLinks?: {
            smallThumbnail?: string;
            thumbnail: string;
        };
        infoLink?: string;
    };
};

export type BookSearchResults = BookInfo[];

const SearchResultsPage = () => {
    return (
        <>
            <SearchBox />
            <SearchResults />
        </>
    );
};

export default SearchResultsPage;
