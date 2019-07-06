import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit {

  allStories = [];

  constructor(
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get("stories").then(stories => {
      this.allStories = stories;
    })
  }

}
