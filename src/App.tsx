import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import { Todo } from "./models/Todo";
import InputField from "./components/InputField";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
    const [todo, setTodo] = useState<string>("");
    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo("");
        }
    };
    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result;

        console.log(result);

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        let add;
        let active = todos;
        let inProgress = inProgressTodos;
        let complete = completedTodos;
        // Source Logic
        if (source.droppableId === "todo-list") {
            add = active[source.index];
            active.splice(source.index, 1);
        } else if (source.droppableId === "inProgress-list") {
            add = inProgress[source.index];
            inProgress.splice(source.index, 1);
        } else {
            add = complete[source.index];
            complete.splice(source.index, 1);
        }

        // Destination Logic
        if (destination.droppableId === "todo-list") {
            active.splice(destination.index, 0, add);
        } else if (destination.droppableId === "inProgress-list") {
            inProgress.splice(destination.index, 0, add);
        } else {
            complete.splice(destination.index, 0, add);
        }

        setCompletedTodos(complete);
        setTodos(active);
    };

    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([]);
    const [inProgressTodos, setInProgressTodos] = useState<Array<Todo>>([]);
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="App">
                <Header></Header>
                <InputField
                    todo={todo}
                    setTodo={setTodo}
                    handleAdd={handleAdd}
                />
                <Board
                    todos={todos}
                    setTodos={setTodos}
                    inProgressTodos={inProgressTodos}
                    setInProgressTodos={setInProgressTodos}
                    completedTodos={completedTodos}
                    setCompletedTodos={setCompletedTodos}
                ></Board>
            </div>
        </DragDropContext>
    );
}

export default App;
