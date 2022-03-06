import React from "react";
import TodoItem from "./TodoItem";

interface prop {
    type: string;
    title: string;
}

const Column: React.FC<prop> = ({ type, title }) => {
    return (
        <div className="todo-column">
            <div className={`todo-column--header ${type}`}>{title}</div>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
            <TodoItem type={type}></TodoItem>
        </div>
    );
};

export default Column;
