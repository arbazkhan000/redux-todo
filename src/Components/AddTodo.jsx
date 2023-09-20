import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../features/Todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const Dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const submitFrom = (e) => {
    e.preventDefault();
    setInput("");
  };

  const btnAddData = () => {
    Dispatch(addTodo(input));
  };

  return (
    <>
      <h1>Redux Todo</h1>

      <form onSubmit={submitFrom}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search"
        />
      </form>
      <button onClick={btnAddData} type="submit">
        AddTodo
      </button>

      {/* TodoList Render */}

      <div className="list">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}> Todo</li>
          ))}
        </ul>
        <button onClick={() => Dispatch(removeTodo(todos.id))}>Delet</button>
      </div>
    </>
  );
};

export default AddTodo;
