import React, { useState } from "react";
import { updateTodo,deleteTodo, toggleCompleted } from "../features/todo/todoSlicer";
import { useDispatch } from "react-redux";
function TodoItem({todo}) {

    const [todoMsg,setTodoMsg]=useState(todo.todo)
    const [isTodoEditable,setIsTodoEditable]=useState(false)
    const dispatch=useDispatch()
  if(!todo.show) return ;
  return (
      <tr key={todo.id}>
        <td className="whitespace-nowrap px-4 py-4">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">John Doe</div>
              <div className="text-sm text-gray-700">john@devui.com</div>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-12 py-4">
          <input
            readOnly={!isTodoEditable}
            class="flex h-10 w-full rounded-md  bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
          />
        </td>
        <td className="whitespace-nowrap px-4 py-4">
          <button
          onClick={()=> dispatch(toggleCompleted(todo.id))}
            className={`inline-flex rounded-full ${
              todo.completed ? "bg-green-100" : "bg-red-100"
            }  px-2 text-xs font-semibold leading-5 text-green-800`}
          >
            {todo.completed ? "done" : "undone"}
          </button>
        </td>
        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className={`inline-flex rounded-full text-white bg-red-500  px-2 text-xs font-semibold leading-5`}
          >
            remove
          </button>
        </td>
        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
          <button
            onClick={() => {
                
                if(isTodoEditable){
                    dispatch(updateTodo({id:todo.id,todo:todoMsg}))
                }
                setIsTodoEditable((prev)=> !prev)
                
            }}
            className={`inline-flex rounded-full text-white ${todo.completed ? 'disabled bg-blue-300 cursor-default': 'bg-blue-500 cursor-pointer'}   px-2 text-xs font-semibold leading-5`}
          >
            Edit
          </button>
        </td>
      </tr>
  );
}

export default TodoItem;
