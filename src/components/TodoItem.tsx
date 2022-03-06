import React, { useEffect, useRef, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Todo } from "../models/Todo";
interface prop {
    index: number;
    type: string;
    todo: Todo;
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}
const TodoItem: React.FC<prop> = ({ index, type, todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, todo: editTodo } : todo
            )
        );
        setEdit(false);
    };

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided, snapshot) => (
                <form
                    onSubmit={(e) => handleEdit(e, todo.id)}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className={`todo-item todo-item__${type}`}>
                        {/* <div className="todo-item__content">
                            <div className="todo-item__content-title">{}</div>
                        </div> */}

                        {edit ? (
                            <input
                                value={editTodo}
                                onChange={(e) => setEditTodo(e.target.value)}
                                className="todo-item__content"
                                ref={inputRef}
                            />
                        ) : todo.isDone ? (
                            <s className="todo-item__content">{todo.todo}</s>
                        ) : (
                            <span className="todo-item__content">
                                {todo.todo}
                            </span>
                        )}
                        <span
                            className="todo-item__icon"
                            onClick={() => {
                                setEdit(!edit);
                            }}
                        >
                            <AiFillEdit></AiFillEdit>
                        </span>
                        <span
                            className="todo-item__icon"
                            onClick={() => handleDelete(todo.id)}
                        >
                            <AiFillDelete></AiFillDelete>
                        </span>
                    </div>
                </form>
            )}
        </Draggable>
    );
};

export default TodoItem;
