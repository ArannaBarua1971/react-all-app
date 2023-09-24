import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlicer";

function TodoForm() {
  const dispatch = useDispatch();
  const [todoMsg, setTodoMsg] = useState("");

  const add=(e)=>{
    e.preventDefault()
    dispatch(addTodo(todoMsg))
    setTodoMsg('')
  }
  return (
    <>
      <form onSubmit={add} className="w-[50%] mx-auto  flex justify-between">
        <input
          className="flex me-2 h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="add Todo"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
        />
        <button
           
          type="submit"
          className="rounded-full bg-black px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </form>
    </>
  );
}

export default TodoForm;
