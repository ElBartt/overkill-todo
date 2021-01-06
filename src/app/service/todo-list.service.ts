import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodosMock } from '../mocks/todolist.mock';
import { TodoModel } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  getAllTodos(): Observable<readonly TodoModel[]> {
    return of(TodosMock.NOMINAL);
  }
}
