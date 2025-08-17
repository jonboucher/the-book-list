import MiniBookList from './MiniBookList';
import type { BookListData } from '../../types';
import styles from './MiniBookList.module.scss';

type MiniBookListContainerProps = {
  lists: BookListData[];
};

const MiniBookListContainer = ({ lists }: MiniBookListContainerProps) => {
  return (
    <div className={`${styles['mini-book-list-container']}`}>
      {lists.map((list, index) => {
        return <MiniBookList key={index} title={list.title} books={list.books} />;
      })}
    </div>
  );
};
export default MiniBookListContainer;
