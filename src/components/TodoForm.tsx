import { useState } from "react";
import { Todo } from "../types/todo";
import React from "react";

type TodoFormProps = {
    addTodo: (inputValue: string) => void;
};

export const TodoForm = ({addTodo}: TodoFormProps) => {
    const [inputValue, setInputValue] = useState<string>("");
    
    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo(inputValue);
        setInputValue("");
    };
    return (
        <form className='todo-form' onSubmit={handlesubmit}>
            <input
             value={inputValue}
             className="flex-grow px-3 py-3 h-14 border pr-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
             type="text" 
             placeholder="New Todo"
             onChange={(e) => setInputValue(e.target.value)} 
                
            />
            <button
             className='bg-amber-500 border-none rounded-full bg-range-600 w-32 h-14 text-white text-lg font-medium cursor-pointer' type="submit"
             >
            Add Todo
            </button>
            </form>
    );
}
export default TodoForm;
