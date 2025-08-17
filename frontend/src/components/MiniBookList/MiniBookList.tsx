import type { BookListData } from '../../types';
import MiniBookListItem from './MiniBookListItem';
import styles from './MiniBookList.module.scss';

const MiniBookList = ({ title, description, books }: BookListData) => {
  return (
    <div className={`${styles['mini-book-list']}`}>
      <h2>{title}</h2>
      <div className={`${styles['mini-book-list__items']}`}>
        {books?.map((item, index) => {
          return <MiniBookListItem key={index} order={index + 1} title={item.title} />;
        })}
      </div>
    </div>
  );
};

export default MiniBookList;
