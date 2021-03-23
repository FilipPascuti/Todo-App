import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {API_URL} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  executeAuthenticationService(username: string, password: string): Observable<any> {
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    const headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });


    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`, {headers})
      .pipe(
        map(
          data => {
            sessionStorage.setItem('authenticatedUser', username);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )
      );
  }

  getAuthenticatedUser(): string {
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken(): string {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }

  isUserLoggedIn(): boolean{
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logoutUser(): void{
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }

}

export class AuthenticationBean{
  constructor(public message: string) { }
}
