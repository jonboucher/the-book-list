import axios from 'axios';
import type { ReactNode } from 'react';
import type { User, BookListData } from '../types';
import { createContext, useState, useEffect, useContext } from 'react';

interface UserContextType {
  user: User | undefined;
}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const userId = 'ab6fbf9b-d204-4a7c-be97-e96cc185564c';

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await axios.get(`http://localhost:3000/api/users/${userId}`);
      const listsRes = await axios.get(`http://localhost:3000/api/lists/user/${userId}`);
      const lists = await listsRes.data;
        console.log(lists);
      const currentUser: User = {
        id: data.data.id,
        username: data.data.username,
        userLists: lists.data as BookListData[],
      };

      setUser(currentUser);
    };

    fetchUserData();
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
