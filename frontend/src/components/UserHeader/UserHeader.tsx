import ButtonAddList from '../ButtonAddList/ButtonAddList';
import { useUser } from '../../context/UserContext';
import styles from './UserHeader.module.scss';

const UserHeader = () => {
  const { user } = useUser();

  return (
    <header className={`${styles['user-header']}`}>
      <img
        className='profile-picture'
        src='https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8='
      />
      <h1>{user?.username}</h1>
      <ButtonAddList />
    </header>
  );
};
export default UserHeader;
