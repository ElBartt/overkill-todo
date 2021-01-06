import { ActionReducerMap } from '@ngrx/store';
import { TodoModel } from '../models/todo';
import { _todoReducer } from './todo.reducer';

export interface AppState {
  TODO: TodoListStateModel;
}

export interface TodoListStateModel {
  todoList: readonly TodoModel[];
}

export const reducers: ActionReducerMap<AppState> = {
  TODO: _todoReducer
};
