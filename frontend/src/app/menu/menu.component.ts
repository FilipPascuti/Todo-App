import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService} from '../services/hardcoded-authentication.service';
import {BasicAuthenticationService} from '../services/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {

  }

}
