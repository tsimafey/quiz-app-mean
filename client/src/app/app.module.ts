import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { SignFormComponent } from './components/sign-form/sign-form.component';
import { AlertComponent } from './components/alert/alert.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';
import { AuthUserDirective } from './directives/auth-user.directive';
import { SignoutButtonComponent } from './components/signout-button/signout-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SignFormComponent,
    AlertComponent,
    SignupFormComponent,
    SigninFormComponent,
    AuthUserDirective,
    SignoutButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
