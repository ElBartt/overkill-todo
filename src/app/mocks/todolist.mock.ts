import { TodoModel } from '../models/todo';

export namespace TodosMock {
  export const NOMINAL: readonly TodoModel[] = [
    {title: "todo 1", isDone: false},
    {title: "todo 2", isDone: false},
    {title: "todo 3", isDone: true},
    {title: "todo 4", isDone: false}
  ]
}
