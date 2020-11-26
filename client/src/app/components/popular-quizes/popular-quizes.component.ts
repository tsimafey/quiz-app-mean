import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popular-quizes',
  templateUrl: './popular-quizes.component.html',
  styleUrls: ['./popular-quizes.component.scss']
})
export class PopularQuizesComponent implements OnInit {
  @Input() popularQuizes;

  constructor() { }

  ngOnInit(): void {
  }

}
