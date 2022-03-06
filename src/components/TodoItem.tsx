import React from "react";

interface prop {
    type: string;
}
const TodoItem: React.FC<prop> = ({ type }) => {
    return <div className={`todo-item todo-item__${type}`}>TodoItem</div>;
};

export default TodoItem;
