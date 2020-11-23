import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService, AlertService } from '../../services';

interface Tab {
  title: string;
  isActive: boolean;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  tabs: Tab[] = [
    {
      title: 'Sign up',
      isActive: true,
    },
    {
      title: 'Sign in',
      isActive: false,
    }
  ];
  selectedTab: Tab = this.tabs[0];
  submitted: boolean = false;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
        Validators.pattern(/^[0-9a-zA-Z]+$/)
      ]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

  get f() { return this.form.controls; }

  onSubmit() {
    console.log(this.form.value)
    console.log(this.form)

    this.submitted = true;
    this.alertService.clear();

    if (this.form.invalid) {
      return;
    }

    this.loading = true;

    this.authService.signup(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          
          // window.location.reload();
        },
        error: ({ error }) => {
          console.log(error)
          this.loading = false;
          this.alertService.error(error.message);
        }
      })
  }

  onSelectTab(tab: Tab) {
    this.tabs.map(t => {
      if (tab.title === t.title) {
        t.isActive = true;
      } else {
        t.isActive = false;
      }
    })
    this.selectedTab = this.tabs.filter(t => tab.title === t.title)[0];
  }

}
