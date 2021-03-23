import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import construct = Reflect.construct;
import {API_URL} from '../../app.constants';

export class HelloWorldBean{
  constructor(
    public message: string
  ){ }

}



@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }


  executeHelloWordlBeanService(): Observable<HelloWorldBean> {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWordlServicePathVariable(name): Observable<HelloWorldBean> {
    // const basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    //
    // const headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // });

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean/${name}`);
  }

  // createBasicAuthenticationHttpHeader(): string{
  //   const username = 'piliF';
  //   const password = 'iLikeTurtles';
  //   const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }


}

