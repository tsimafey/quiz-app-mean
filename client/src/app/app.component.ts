import { Component } from '@angular/core';

import { AuthService } from '@app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private authService: AuthService,
  ) { }

  isAuthorized: boolean = this.authService.isAuthorized();
}
