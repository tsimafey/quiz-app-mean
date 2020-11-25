import { Directive, OnInit } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthService } from '@app/services';

@Directive({
  selector: '[appAuthUser]'
})
export class AuthUserDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {
    const hasAccess = this.authService.isAuthorized();
    console.log(hasAccess)

    if (hasAccess) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
