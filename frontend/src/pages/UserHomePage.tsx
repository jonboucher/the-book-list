import { useState, useEffect } from "react";
import type { User, BookListData } from "../types";
import { bookData } from "../../../backend/data/mockBookList";
import MiniBookList from "../components/MiniBookList/MiniBookList";
import ListModal from "../components/ListModal/ListModal";

const UserHomePage = () => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const stored = localStorage.getItem("users");
        let data;

        if (stored) {
            data = JSON.parse(stored)[0] as User;
        } else {
            data = {
                id: 1,
                username: "Mozenrath",
                userLists: [bookData],
            };

            localStorage.setItem("users", JSON.stringify([data]));
        }

        setUser(data);
    }, []);

    return (
        <>
            <div>
                <h1>{user?.username}</h1>
                <hr />
                <div>
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
                <ListModal />
            </div>
        </>
    );
};

export default UserHomePage;
