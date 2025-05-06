import { useState } from "react";

export const TodoForm = () => {
    const [inputValue, setInputValue] = useState("");
    const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(inputValue);
    }
    return (
        <form className='todo-form' onSubmit={handlesubmit}>
            <input 
                type="text" 
                placeholder="New Todo" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button type="submit" className='todo-btn'>Add todo</button>
            </form>
    );
}
export default TodoForm;
