import { ChangeEvent, FormEvent } from "react";
import { defaultvalue, Todo } from "../models/Todo";


type AddTodoProps = {
    addTodo: (Todo: Todo) => void;
};