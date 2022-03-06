import React from "react";
import Column from "./Column";
import { Todo } from "./models/model";

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
        <div>
            <Column></Column>
            <Column></Column>
            <Column></Column>
        </div>
    );
};

export default Board;
