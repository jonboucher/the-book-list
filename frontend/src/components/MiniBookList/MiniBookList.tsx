import type { BookListData } from '../../types';

import MiniBookListItem from './MiniBookListItem';

const MiniBookList = ({ title, description, books }: BookListData) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {books?.map((item, index) => {
          return <MiniBookListItem key={index} order={index + 1} title={item.title} />;
        })}
      </div>
    </div>
  );
};

export default MiniBookList;
