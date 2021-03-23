import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {ErrorPageComponent} from '../error-page/error-page.component';
import {RouteGuardService} from '../services/route-guard.service';
import {ListTodosComponent} from '../list-todos/list-todos.component';
import {LogoutComponent} from '../logout/logout.component';
import {TodoComponent} from '../todo/todo.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'welcome/:name',
    component: WelcomeComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'todos',
    component: ListTodosComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: 'todos/:id',
    component: TodoComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
