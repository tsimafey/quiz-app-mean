import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/services';

@Component({
  selector: 'app-signout-button',
  templateUrl: './signout-button.component.html',
  styleUrls: ['./signout-button.component.scss']
})
export class SignoutButtonComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  signout() {
    console.log('signout')
    this.authService.signout();
  }

}
