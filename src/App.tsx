
import './App.css';
import { useState } from 'react';
import { Todo } from './types/todo';
import  {TodoForm}  from './components/TodoForm';
import  TodoList  from './components/TodoList';


const App = () => {
const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [
      { id: 1, text: 'köpa mjölk', completed: false },
      { id: 2, text: 'gymma', completed: false },
      { id: 3, text: 'äta', completed: false },
      { id: 4, text: 'sova', completed: false },
      { id: 5, text: 'koka kaffe', completed: false },
    ];
  });

  const addTodo = (inputValue: string) => {
    if (inputValue.trim()) {
        const newTodo: Todo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    }
  };


  return (
    <>
    <div className='min-h-screen flex items-center justify-center bg bg-gradient-to-tr from-orange-400 to bg-purple-500'>
      <div className='bg-white shadow-lg rounded-3xl p-16'>
        <h1 className='text-3xl font-bold text-center text-black mb-6'>Stuff todo!</h1>
        <TodoForm todos={addTodo} setTodos={setTodos} />
        <TodoList todos={addTodo} setTodos={setTodos}/>
      </div>
    </div>
   </>
  )
}

export default App;

