import { useEffect, useState } from "react";
import { TodoForm, TodoItem } from "./components";
import { TodoProvider } from "./contexts/todoContext";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todoMsg) => {
    setTodos((prevTodos) => [
      { id: Date.now(), todo: todoMsg, completed: false },
      ...prevTodos,
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
      prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } :  prevTodo 
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  useEffect(function () {
    const todos = JSON.parse(localStorage.getItem("Todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(
    function () {
      localStorage.setItem("Todos", JSON.stringify(todos));
    },
    [todos]
  );

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo,toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
