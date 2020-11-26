import { Component, OnInit } from '@angular/core';

import { AuthService } from '@app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthorized: boolean = this.authService.isAuthorized();
  popularQuizes = this.isAuthorized
  ? [
    {
      title: 'USA',
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mixtape-album-cover-art-design-template-68450756e786f85861314fa7d49d8366.jpg?ts=1586223871',
    },
    {
      title: 'Very looooooooong title',
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mixtape-album-cover-art-design-template-68450756e786f85861314fa7d49d8366.jpg?ts=1586223871',
    },
    {
      title: 'USA',
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mixtape-album-cover-art-design-template-68450756e786f85861314fa7d49d8366.jpg?ts=1586223871',
    },
    {
      title: 'USA',
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mixtape-album-cover-art-design-template-68450756e786f85861314fa7d49d8366.jpg?ts=1586223871',
    },
    {
      title: 'USA',
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mixtape-album-cover-art-design-template-68450756e786f85861314fa7d49d8366.jpg?ts=1586223871',
    }
  ] : [
    {
      title: 'USA',
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mixtape-album-cover-art-design-template-68450756e786f85861314fa7d49d8366.jpg?ts=1586223871',
    },
    {
      title: 'Very looooooooong title',
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mixtape-album-cover-art-design-template-68450756e786f85861314fa7d49d8366.jpg?ts=1586223871',
    },
    {
      title: 'USA',
      image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/mixtape-album-cover-art-design-template-68450756e786f85861314fa7d49d8366.jpg?ts=1586223871',
    },
  ]

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

}
