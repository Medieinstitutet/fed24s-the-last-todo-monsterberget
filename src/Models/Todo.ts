export class Todo {
    constructor(
        public id: number,
        public title: string,
        public completed: boolean = false,
        public createdAt: Date = new Date(),
        public updatedAt: Date = new Date()
    ) {}
};