import Todolist from "./TodoList.tsx";
import TodoForm from "./TodoForm.tsx";
import { useState } from "react";
import { Todo } from "../types/Todo.ts";



export function TodoView() {
    const [todos, setTodos] = useState<Todo[]>(() => {
       const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        }
        return [
            {id: 1, text: "Gymma", completed: false },
            {id: 2, text: "köpa mjölk", completed: false },
            {id: 3, text: "köpa smör", completed: false },
            {id: 4, text: "köpa ost", completed: false },
            {id: 5, text: "köpa ägg", completed: false },
        ];
    });


    const addTodo = (inputvalue: string) => {
        if (inputvalue.trim()) {
            const newTodo: Todo = {
                id: Date.now (),
                text: inputvalue,
                completed: false,
            };
            setTodos([...todos, newTodo]);

        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
            <div className="bg-white shadow-lg rounded-3xl p-16">
                <h1 className='text-3xl font-bold text-center text-black mb-6'>Got To Do-Do</h1>
                <TodoForm addTodo={addTodo} />
                <Todolist todos={todos} setTodos={setTodos} />
            </div>
        </div>
    );
};


