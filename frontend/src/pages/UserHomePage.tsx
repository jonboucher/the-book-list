import { useState, useEffect } from "react";
import type { User, BookListData } from "../types";
import { bookData } from "../../../backend/data/mockBookList";

const UserHomePage = () => {
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const stored = localStorage.getItem("users");
        let data;

        if (stored) {
            data = JSON.parse(stored)[0] as User;
        } else {
            console.log("best");
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
                <div></div>
            </div>
        </>
    );
};

export default UserHomePage;
