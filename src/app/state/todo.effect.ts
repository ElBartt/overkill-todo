import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TodoListService } from '../service/todo-list.service';
import { TodolistActionsType } from './todo.actions';

@Injectable()
export class TodoEffect {

  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodolistActionsType.loadTodoList),
      mergeMap(() => this.todoListService.getAllTodos()
        .pipe(
          map(todoList => ({ type: TodolistActionsType.loadTodoListSuccess, payload: todoList })),
          catchError(() => of({ type: TodolistActionsType.loadTodoListFailed }))
        ))
    );
  });

  constructor(
    private actions$: Actions,
    private todoListService: TodoListService
  ) { }
}
