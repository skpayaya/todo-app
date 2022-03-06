import React from "react";
import Column from "./Column";
import { Todo } from "../models/Todo";

interface props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    inProgressTodos: Array<Todo>;
    setInProgressTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    completedTodos: Array<Todo>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}
const Board: React.FC<props> = ({
    todos,
    setTodos,
    inProgressTodos,
    setInProgressTodos,
    completedTodos,
    setCompletedTodos,
}) => {
    return (
        <div className="todo-board">
            <Column title="To Do" type="todo"></Column>
            <Column title="In Progress" type="inProgress"></Column>
            <Column title="Completed" type="completed"></Column>
        </div>
    );
};

export default Board;
