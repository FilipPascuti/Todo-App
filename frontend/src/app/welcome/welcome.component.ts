import { Component, OnInit } from '@angular/core';
import {WelcomeDataService} from '../services/data/welcome-data.service';
import {BasicAuthenticationService} from '../services/basic-authentication.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  username: string;
  welcomeMessageFromService: string;

  constructor(
    private service: WelcomeDataService,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit(): void {
    this.username = this.basicAuthenticationService.getAuthenticatedUser();
  }

  getWelcomeMessage(): void{
    this.service.executeHelloWordlBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  getWelcomeMessageWithParameter(): void{
    this.service.executeHelloWordlServicePathVariable(this.username).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response): void{
    this.welcomeMessageFromService = response.message;
  }
}
