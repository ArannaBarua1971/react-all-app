import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showTodo } from "../features/todo/todoSlicer";

function SearchTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [searchTodo, setSearchTodo] = useState("");

  window.onload= ()=> {
    window.AbortSignal
    todos.map((todo) => {
        dispatch(showTodo({ id: todo.id, show: true }));
    });
  };

  useEffect(
    function () {
      if (searchTodo != "") {
        todos.map((todo) => {
          if (todo.todo.search(searchTodo) < 0)
            dispatch(showTodo({ id: todo.id, show: false }));
          else {
            dispatch(showTodo({ id: todo.id, show: true }));
          }
        });
      } else {
        todos.map((todo) => {
          dispatch(showTodo({ id: todo.id, show: true }));
        });
      }
    },
    [searchTodo]
  );

  return (
    <>
      <div className="md:w-[30%] mx-auto md:mt-0 mt-3 flex justify-between">
        <input
          className="flex me-2 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="search Todo"
          onChange={(e) => setSearchTodo(e.target.value)}
        />
        
      </div>
    </>
  );
}

export default SearchTodo;
