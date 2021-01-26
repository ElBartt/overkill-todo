import { Action, createReducer, on } from '@ngrx/store';
import { TodoListStateModel } from './state.model';
import { loadSuccess, toggleChecked } from './todo.actions';

export const initialTodo: TodoListStateModel = {
  todoList: []
};

export const _todoReducer = createReducer(
  initialTodo,
  on(toggleChecked, (state, { payload }) => {
    return {
      ...state,
      todoList: state.todoList.map(todo => ({...todo}))
                              .map(todo => {
                                if (todo.title === payload.title) {
                                  todo.isDone = !todo.isDone;
                                }
                                return todo;
                              })
    };
  }),
  on(loadSuccess, (_, { payload }) => ({ todoList: payload }))
);

export function todoReducer(state: TodoListStateModel | undefined, action: Action) {
  return _todoReducer(state, action);
}
