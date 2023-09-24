import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showTodo } from "../features/todo/todoSlicer";

function DoneOrUndone() {
  const [completed, setCompleted] = useState("all");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  window.onload = () => {
    todos.map((todo) => {
      dispatch(showTodo({ id: todo.id, show: true }));
    });
  };

  useEffect(
    function () {
      if (completed=='true') {
        todos.map((todo) => {
          if (todo.completed ) dispatch(showTodo({ id: todo.id, show: true }));
          else dispatch(showTodo({ id: todo.id, show: false }));
        });
      } else if (completed == "all") {
        todos.map((todo) => {
          dispatch(showTodo({ id: todo.id, show: true }));
        });
      } else {
        todos.map((todo) => {
          if (todo.completed) dispatch(showTodo({ id: todo.id, show: false }));
          else dispatch(showTodo({ id: todo.id, show: true }));
        });
      }
    },
    [completed]
  );

  return (
    <div>
      <select name="" id="" onChange={(e) => setCompleted(e.target.value)}>
        <option value="all">All</option>
        <option value="true">Done</option>
        <option value="false">unDone</option>
      </select>
    </div>
  );
}

export default DoneOrUndone;
