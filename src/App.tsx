import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { Todo } from "./components/models/Todo";

function App() {
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([]);
    const [inProgressTodos, setInProgressTodos] = useState<Array<Todo>>([]);
    return (
        <div className="App">
            <Board
                todos={todos}
                setTodos={setTodos}
                inProgressTodos={inProgressTodos}
                setInProgressTodos={setInProgressTodos}
                completedTodos={completedTodos}
                setCompletedTodos={setCompletedTodos}
            ></Board>
        </div>
    );
}

export default App;
