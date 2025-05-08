export class Todo {
  constructor(
    public id: number,
    public title: string,
    public completed: boolean = false
  ) {}
}

export const defaultvalue: Todo = {
  id: 0,
  title: "",
  completed: false,
};