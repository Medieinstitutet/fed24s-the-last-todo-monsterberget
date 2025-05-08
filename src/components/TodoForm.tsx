import { ChangeEvent, FormEvent } from "react";
import { defaultvalue, Todo } from "../models/Todo";
import { useState } from "react";


type TodoFormProps = {
    addTodo: (Todo: Todo) => void;
};

export const TodoForm = ({addTodo}: TodoFormProps) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [todo, setTodo] = useState<Todo>(defaultvalue);
    
    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTodo({ ...todo, title: inputValue });
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