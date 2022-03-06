import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import { Todo } from "./models/Todo";
import { FaPlus } from "react-icons/fa";

function App() {
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([]);
    const [inProgressTodos, setInProgressTodos] = useState<Array<Todo>>([]);
    return (
        <div className="App">
            <Header></Header>
            <Board
                todos={todos}
                setTodos={setTodos}
                inProgressTodos={inProgressTodos}
                setInProgressTodos={setInProgressTodos}
                completedTodos={completedTodos}
                setCompletedTodos={setCompletedTodos}
            ></Board>
            <div className="fab-div">
                <button className="todo-fab">
                    <FaPlus></FaPlus>
                </button>
            </div>
        </div>
    );
}

export default App;
