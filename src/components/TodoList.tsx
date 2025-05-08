import { Todo } from "../models/Todo";


type TodoListProps = {
    todos: Todo[];
    removeTodo: (id: number) => void;
    addTodo: (todo: Todo) => void;
};

export const TodoList = ({ todos, removeTodo}: TodoListProps) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Todo List</h1>
            <ul className="list-disc list-inside">
                {todos.map((todo) => (
                    <li key={todo.id} className="mb-2">
                        {todo.title}
                        <button
                            onClick={() => removeTodo(todo.id)}
                            className="ml-2 text-red-500 hover:text-red-700"
                        >
                            Ta bort
                        </button>
                    </li>
                ))}S
            </ul>
        </div>
    );
}

