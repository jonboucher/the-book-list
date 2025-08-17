import styles from './ButtonAddList.module.scss';

const ButtonAddList = () => {
  const handleClick = () => {
    const modal: Element | null = document.querySelector('.list-modal');
    modal?.classList.remove('hidden');
  };

  return (
    <button className={`${styles['button__add-list']}`} onClick={handleClick}>
      +
    </button>
  );
};
export default ButtonAddList;
