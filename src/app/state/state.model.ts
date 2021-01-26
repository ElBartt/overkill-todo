import { ActionReducerMap } from '@ngrx/store';
import { TodoModel } from '../models/todo';
import { _todoReducer } from './todo.reducer';

export interface AppState {
  TODO: TodoListStateModel;
}

// TODO: move dans un fichier todo.model
export interface TodoListStateModel {
  todoList: readonly TodoModel[];
}

// TODO: move dans un fichier reducer.constant
export const reducers: ActionReducerMap<AppState> = {
  TODO: _todoReducer
};
