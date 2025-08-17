import styles from './MiniBookList.module.scss';

type MiniBookListItemProps = {
  title: string;
  order: number;
};

const MiniBookListItem = ({ title, order }: MiniBookListItemProps) => {
  return (
    <div className={`${styles['mini-book-list__item']}`}>
      {order} : {title}
    </div>
  );
};

export default MiniBookListItem;
