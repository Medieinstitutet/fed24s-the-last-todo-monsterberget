import { useEffect } from "react";
import React from "react";
import { Todo } from "../types/Todo";


type TodoListProps = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoList = ({ todos, setTodos }: TodoListProps) => {

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);



    return (
        <ul className='space-y-4'>
          {todos.map(({ id, completed, text }) => (
            <li
              key={id}
              className='flex items-center mt-3 p-4 rounded-3xl bg-slate-200 border border-gray-200'
            >
              <input
                type="checkbox"
                checked={completed}
                onChange={() =>
                  setTodos(todos.map((t) => t.id === id ? { ...t, completed: !completed } : t))
                }
                className='mr-3 h-5 w-5 rounded-full border-gray-300 text-blue-600 focus:ring-blue-500'
              />
              <span className={`flex-grow ${completed ? "line-through" : "text-gray-500"}`}>
                {text}
              </span>
              <button
                onClick={() => setTodos(todos.filter((t) => t.id !== id))}
                className="ml-3 border-none bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
    );
};
    
export default TodoList;

    


