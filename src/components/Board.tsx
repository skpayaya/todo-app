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
    const arr = [
        { title: "To Do", type: "todo", todos: todos, setTodos: setTodos },
        {
            title: "In Progress",
            type: "inProgress",
            todos: inProgressTodos,
            setTodos: setInProgressTodos,
        },
        {
            title: "Completed",
            type: "completed",
            todos: completedTodos,
            setTodos: setCompletedTodos,
        },
    ];
    return (
        <div className="todo-board">
            {arr.map((element) => {
                return (
                    <Column
                        title={element.title}
                        type={element.type}
                        todos={element.todos}
                        setTodos={element.setTodos}
                    ></Column>
                );
            })}
        </div>
    );
};

export default Board;
