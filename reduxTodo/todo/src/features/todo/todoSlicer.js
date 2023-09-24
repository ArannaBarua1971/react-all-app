import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlicer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    storeTodo:(state,action)=>{
        state.todos.push(action.payload)
    },
    showTodo:(state,action)=>{
      state.todos=state.todos.map((todo)=> todo.id===action.payload.id ? {...todo,show:action.payload.show} : todo)
    },
    addTodo: (state, action) => {
      let todo = {
        id: nanoid(),
        todo: action.payload,
        completed: false,
        show:true
      };

      state.todos.push(todo);
    },
    updateTodo: (state, action) => {
      state.todos=state.todos.map((todo) =>
        todo.id == action.payload.id
          ? { ...todo, todo: action.payload.todo }
          : todo
      );
    },
    deleteTodo: (state, action) => {
      state.todos=state.todos.filter((todo) => todo.id != action.payload);
    },
    toggleCompleted: (state, action) => {
      state.todos=state.todos.map((todo) =>
        todo.id == action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

export const {storeTodo,showTodo, addTodo, updateTodo, deleteTodo, toggleCompleted } =  todoSlicer.actions;
export default todoSlicer.reducer









