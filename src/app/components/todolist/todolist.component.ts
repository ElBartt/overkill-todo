import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoModel } from 'src/app/models/todo';
import { AppState } from 'src/app/state/state.model';
import { TodolistActionsType } from 'src/app/state/todo.actions';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todos$: Observable<readonly TodoModel[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch({ type: TodolistActionsType.loadTodoList });
    this.todos$ = this.store.select(state => state.TODO.todoList);
  }

  ngOnInit(): void { }

}
