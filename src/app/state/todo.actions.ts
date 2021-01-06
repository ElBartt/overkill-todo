import { createAction, props } from '@ngrx/store';
import { TodoModel } from '../models/todo';

export enum TodolistActionsType {
  loadTodoList = '[Todo List API] Todo List Load',
  loadTodoListSuccess = '[Todo List API] Todo List Load Success',
  loadTodoListFailed = '[Todo List API] Todo List Load Success',
  toggleChecked = '[Todo Component] Toggle todo check'
}

export const toggleChecked = createAction(TodolistActionsType.toggleChecked);
export const loadSuccess = createAction(TodolistActionsType.loadTodoListSuccess, props<{payload: readonly TodoModel[]}>());
