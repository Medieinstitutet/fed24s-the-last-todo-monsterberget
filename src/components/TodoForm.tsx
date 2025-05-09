import React from "react";
import { useState } from "react";

type TodoFormProps = {
    addTodo: (inputValue: string) => void;
    sortTodos: () => void;
};

export const TodoForm = ({addTodo, sortTodos}: TodoFormProps) => {
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
             className='flex-grow px-3 py-3 h-14 border pr-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
             type="text" 
             placeholder="New Todo"
             onChange={(e) => setInputValue(e.target.value)} 
                
            />
            <button
             className='bg-amber-500 border-none ml-2 rounded-full bg-range-600 w-32 h-14 text-white text-lg font-medium cursor-pointer' type="submit"
             >
            Add Todo
            </button>
            <button className='bg-amber-500 ml-2 border-none rounded-full bg-range-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
             onClick={() => sortTodos()}>
                SORT
            </button>
            </form>
    );
}
export default TodoForm;