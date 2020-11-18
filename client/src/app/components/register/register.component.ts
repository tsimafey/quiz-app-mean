import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: '',
      email: '',
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log('submit')
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
