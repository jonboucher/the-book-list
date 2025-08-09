import type { BookListData } from "../../types";

import MiniBookListItem from "./MiniBookListItem";

const MiniBookList = ({ title, books }: BookListData) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                {books.items.map((item, index) => {
                    return (
                        <MiniBookListItem
                            key={item.id}
                            order={index + 1}
                            title={item.volumeInfo.title}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MiniBookList;
