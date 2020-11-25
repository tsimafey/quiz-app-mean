import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService, AlertService } from '@app/services';

interface Tab {
  title: string;
  isActive: boolean;
}

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.scss']
})
export class SignFormComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void { }

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
