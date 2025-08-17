import { useUser } from '../context/UserContext';

import { bookData } from '../../../backend/data/mockBookList';
import MiniBookList from '../components/MiniBookList/MiniBookList';
import ListModal from '../components/ListModal/ListModal';

const UserHomePage = () => {
  const { user } = useUser();

  console.log(user);
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
