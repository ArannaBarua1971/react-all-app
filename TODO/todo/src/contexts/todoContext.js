import { createContext, useContext } from "react";

const todoContext = createContext({
    todos:{},
    addTodo:(todo)=>{},
    updateTodo:(id)=>{},
    toggleComplete:(id)=>{},
    deleteTodo:(id)=>{}
})

export const TodoProvider=todoContext.Provider

export function useTodo(){
    return useContext(todoContext)
}