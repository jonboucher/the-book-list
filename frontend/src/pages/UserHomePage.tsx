import { useState, useEffect } from "react";
import type { User, BookListData } from "../types";
import { bookData } from "../../../backend/data/mockBookList";
import MiniBookList from "../components/MiniBookList/MiniBookList";
import ListModal from "../components/ListModal/ListModal";

const UserHomePage = () => {
    const userId = "ab6fbf9b-d204-4a7c-be97-e96cc185564c";

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const fetchUserData = async () => {
            const res = await fetch(
                `http://localhost:3000/api/users/${userId}`
            );
            const data = await res.json();
            console.log(data);

            const currentUser: User = {
                id: data.data.id,
                username: data.data.username,
                userLists: [],
            };

            setUser(currentUser);
        };

        fetchUserData();
    }, []);

    return (
        <>
            <div>
                <h1>{user?.username}</h1>
                <hr />
                {/* <div>
                    {user?.userLists.map((list, index) => {
                        return (
                            <MiniBookList
                                key={index}
                                title={list.title}
                                books={list.books}
                            />
                        );
                    })}
                </div>
                <ListModal /> */}
            </div>
        </>
    );
};

export default UserHomePage;
