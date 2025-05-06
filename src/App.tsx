import { useState } from 'react';
import './App.css';
import { TodoContainer } from './components/TodoContainer';
import { TodoForm } from './components/TodoForm';


function App() {
  return (
    <>
      <TodoContainer />
      <TodoForm />
    </>
  );
}

export default App;

