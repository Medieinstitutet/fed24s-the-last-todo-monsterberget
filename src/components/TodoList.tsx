import React, { useEffect, useState } from 'react'
import { Todo } from '../types/todo';
import { TodoForm } from './TodoForm';

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoList = ({todos, setTodos}: TodoListProps) => {
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  

  return (
    <ul className='space-y-4'>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className='flex items-center p-3 rounded-lg bg-slate-200 border border-gray-200'
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() =>
              setTodos(
                todos.map((t) =>
                  t.id === todo.id ? { ...t, completed: !t.completed } : t
                )
              )
            }
            className='mr-3 h-5 w-5 rounded-full border-gray-300 text-blue-600 focus:ring-blue-500'
          />
          <span
          className={`flex-grow ${todo.completed ? "line-through" : "text-gray-500"}`}>{todo.text}</span>
          <button
            onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
            className="ml-3 border-none bg-red-500 text-white rounded-full px-3 py-1"
          >Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
