import { useUser } from '../context/UserContext';

import MiniBookList from '../components/MiniBookList/MiniBookList';
import ListModal from '../components/ListModal/ListModal';

const UserHomePage = () => {
  const { user } = useUser();

  return (
    <>
      <div>
        <h1>{user?.username}</h1>
        <hr />
        <div>
          {user?.userLists?.map((list, index) => {
            return <MiniBookList key={index} title={list.title} books={list.books} />;
          })}
        </div>
        <ListModal />
      </div>
    </>
  );
};

export default UserHomePage;
