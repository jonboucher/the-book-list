import SearchResultsPage from './SearchResultsPage';
import MiniBookList from '../components/MiniBookList/MiniBookList';
import { useUser } from '../context/UserContext';

const EditListPage = () => {
  const { user } = useUser();

  return (
    <div>
      <MiniBookList title={user?.userLists?.[1].title} books={user?.userLists?.[1].books} />
      <SearchResultsPage />
    </div>
  );
};
export default EditListPage;
