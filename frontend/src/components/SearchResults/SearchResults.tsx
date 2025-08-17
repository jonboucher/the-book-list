import { useContext } from 'react';
import BookSearchContext from '../../context/BookSearchContext';
import SearchResultsItem from '../SearchResultsItem/SearchResultsItem';

const SearchResults = () => {
  const { searchResults } = useContext(BookSearchContext);

  return (
    <ul style={{ padding: 0 }}>
      {searchResults.map((book, index) => (
        <SearchResultsItem
          key={index}
          isbn_13={book.volumeInfo.industryIdentifiers?.find((id) => id.type === 'ISBN_13')?.identifier || null}
          isbn_10={book.volumeInfo.industryIdentifiers?.find((id) => id.type === 'ISBN_10')?.identifier || null}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          publishedDate={book.volumeInfo.publishedDate}
          description={book.volumeInfo.description}
          pageCount={book.volumeInfo.pageCount}
          categories={book.volumeInfo.categories}
          cover={book.volumeInfo.imageLinks?.thumbnail}
        />
      ))}
    </ul>
  );
};

export default SearchResults;
