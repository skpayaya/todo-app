import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";

interface prop {
    type: string;
    title: string;
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const Column: React.FC<prop> = ({ type, title, todos, setTodos }) => {
    return (
        <Droppable droppableId={`${type}-list`}>
            {(provided, snapshot) => (
                <div
                    className="todo-column"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <div className={`todo-column--header ${type}`}>{title}</div>

                    {todos?.map((todo, index) => (
                        <TodoItem
                            index={index}
                            todos={todos}
                            todo={todo}
                            key={todo.id}
                            setTodos={setTodos}
                            type={type}
                        />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default Column;
