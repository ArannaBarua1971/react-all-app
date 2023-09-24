import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import TodoList from "./components/TodoList.jsx";
import TodoForm from "./components/TodoForm";
import SearchTodo from "./components/SearchTodo";
import DoneOrUndone from "./components/DoneOrUndone";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <div className=" container mx-auto flex flex-wrap justify-between mt-40 md:flex-row flex-col">
      <TodoForm />
      <SearchTodo />
      <DoneOrUndone/>
    </div>
    <TodoList />
  </Provider>
);
