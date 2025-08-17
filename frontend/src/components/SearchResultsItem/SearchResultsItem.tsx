import axios from 'axios';
import styles from './SearchResultItem.module.scss';

type SearchResultItemProps = {
  isbn_13: string;
  isbn_10: string;
  title: string;
  authors?: string[];
  publishedDate?: string;
  description?: string;
  pageCount?: string;
  categories?: string[];
  cover?: string;
};

const SearchResultsItem = ({
  isbn_13,
  isbn_10,
  title,
  authors,
  publishedDate,
  description,
  pageCount,
  categories,
  cover,
}: SearchResultItemProps) => {
  const addBookToList = async () => {
    const bookData = {
      title,
      isbn_13: isbn_13 || null,
      isbn_10: isbn_10 || null,
      authors: authors || [],
      thumbnail_url: cover || null,
      published_date: publishedDate || null,
      description: description || null,
      page_count: pageCount ? parseInt(pageCount, 10) : null,
      categories: categories || [],
    };

    try {
      const newBook = await axios.post('http://localhost:3000/api/books', bookData);
      const bookId = await newBook.data.data.id;

      const bookListData = {
        bookId: bookId,
        listId: '1dbf9579-7c34-4a29-a597-268c9bba98a5',
      };

      const response = await axios.post('http://localhost:3000/api/lists/addBook/0', bookListData);
      console.log('Book added to list:', response.data);
    } catch (error) {
      console.error('Error adding book to list:', error);
    }
  };

  return (
    <div className={`${styles['search-results-item']}`}>
      <div className={`${styles['search-results-item__cover']}`}>
        <img src={cover} />
      </div>
      <div className={`${styles['search-results-item__info']}`}>
        <h2 className={`${styles['search-results-item__info--title']}`}>{title}</h2>
        <p>{authors && authors[0]}</p>
        <p className={`${styles['search-results-item__info--description']}`}>{description}</p>
      </div>
      <button onClick={addBookToList}>Add to List</button>
    </div>
  );
};

export default SearchResultsItem;
