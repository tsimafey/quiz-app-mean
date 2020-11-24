import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService, AlertService } from '@app/services';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      usernameEmail: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.authService.signin(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          console.log('signin')
          // window.location.reload();
        },
        error: ({ error }) => {
          console.log(error)
          this.loading = false;
          this.alertService.error(error.message, { autoClose: true });
        }
      })
  }

}
