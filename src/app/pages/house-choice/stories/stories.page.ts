import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PopoverController, Events } from '@ionic/angular';
import { Router } from '@angular/router';

import { PopoverStoriesComponent } from 'src/app/components/popover/popover-stories/popover-stories.component';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit {

  allStories = [];
  currentStory = {
    id: ""
  };

  constructor(
    private storage: Storage,
    private popoverController: PopoverController,
    private events: Events,
    private router: Router
  ) { }

  /**
   * Get the `stories` and `currentStory` local
   */
  ngOnInit() {
    this.storage.ready().then(() => {
      this.storage.get("stories").then(stories => {
        this.allStories = stories;
      });

      this.storage.get("currentStory").then(current => {
        this.currentStory = current;
      });
    });
  }

  /**
   * Change the `currentStory` local by story
   */
  newCurrentStory(story) {
    this.storage.set("currentStory", story).then(current => {
      this.currentStory = current;

      this.router.navigate(['/all-characters']);
    })
  }

  async presentPopover(ev: any, story: Object) {
    const popover = await this.popoverController.create({
      component: PopoverStoriesComponent,
      componentProps: {
        story: story,
        currentStory: this.currentStory
      },
      event: ev
    });

    this.events.subscribe("stories", newStories => {
      this.allStories = newStories;
      console.log(newStories);
    })

    return await popover.present();
  }

}
