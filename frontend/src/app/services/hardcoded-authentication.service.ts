import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string): boolean{
    if (username === 'piliF' && password === 'iLikeTurtles'){
      sessionStorage.setItem('authenticatedUser', 'username');
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean{
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logoutUser(): void{
    sessionStorage.removeItem('authenticatedUser');
  }
}
