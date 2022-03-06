import React from "react";
import { FcTodoList } from "react-icons/fc";
const Header = () => {
    return (
        <div className="todo-header">
            <FcTodoList className="todo-header__icon"></FcTodoList>
            <h2>Todo App</h2>
        </div>
    );
};

export default Header;
