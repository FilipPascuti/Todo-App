import {Component, OnInit} from '@angular/core';
import {TodoDataService} from '../services/data/todo-data.service';
import {resolveFileWithPostfixes} from '@angular/compiler-cli/ngcc/src/utils';
import {Router} from '@angular/router';
import {BasicAuthenticationService} from '../services/basic-authentication.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  message: string;
  username: string;
  // todos = [
  //   new Todo(1, 'Learn to dance.', false, new Date()),
  //   new Todo(2, 'Learn Angular very well.', false, new Date()),
  //   new Todo(3, 'Learn Spring Boot even better.', false, new Date()),
  //   ];

  constructor(
    private todoService: TodoDataService,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
    this.username = this.basicAuthenticationService.getAuthenticatedUser();
  }

  refreshTodos(): void{

    this.todoService.retrieveAllTodos(this.username).subscribe(
      response => { this.todos = response; }
    );
  }

  deleteTodo(id): void {
    this.todoService.deleteTodo(this.username, id).subscribe(
      response => {
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id: number): void {
    this.router.navigate(['todos', id]);
  }

  addTodo(): void {
    this.router.navigate(['todos', -1]);
  }
}



