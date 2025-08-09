type MiniBookListItemProps = {
    title: string;
    order: number;
};

const MiniBookListItem = ({ title, order }: MiniBookListItemProps) => {
    return (
        <div>
            {order} : {title}
        </div>
    );
};

export default MiniBookListItem;
