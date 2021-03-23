import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../services/hardcoded-authentication.service';
import {BasicAuthenticationService} from '../services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'piliF';
  password = 'iLikeTurtles';
  errorMessage = 'Invalid login details';
  invalidLogin = false;

  constructor(
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService,
    // private hardcodedAuthenticationService: HardcodedAuthenticationService
  ) { }

  ngOnInit(): void {
  }

  // handleLogin(): void {
  //   if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
  //     this.invalidLogin = false;
  //     this.router.navigate(['welcome', this.username]);
  //   } else {
  //     this.username = '';
  //     this.password = '';
  //     this.invalidLogin = true;
  //   }
  // }

  handleBasicAuthLogin(): void {
    console.log(this.username, this.password);
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data);
            this.invalidLogin = false;
            this.router.navigate(['welcome', this.username]);
          },
          error => {
            this.username = '';
            this.password = '';
            this.invalidLogin = true;
          }
        );
  }



}
