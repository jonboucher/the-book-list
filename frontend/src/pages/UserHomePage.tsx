import { useUser } from '../context/UserContext';
import UserHeader from '../components/UserHeader/UserHeader';
import MiniBookListContainer from '../components/MiniBookList/MiniBookListContainer';

const UserHomePage = () => {
  const { user } = useUser();

  return (
    <>
      <div className='user-home-page'>
        <UserHeader />
        <MiniBookListContainer lists={user?.userLists || []} />
      </div>
    </>
  );
};

export default UserHomePage;
