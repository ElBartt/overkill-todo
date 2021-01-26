import { TodoModel } from '../models/todo';

export namespace TodosMock {
  export const NOMINAL: readonly TodoModel[] = [
    {title: "Learn Ngrx", isDone: true},
    {title: "Learn Unit Test", isDone: false},
    {title: "US1", isDone: true},
    {title: "US2", isDone: true},
    {title: "US3", isDone: false},
    {title: "US4", isDone: false},
    {title: "Review", isDone: false},
    {title: "Global Test", isDone: false},
    {title: "With love", isDone: true}
  ]
}
