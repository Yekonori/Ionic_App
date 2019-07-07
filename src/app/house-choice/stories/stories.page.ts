import { PopoverComponent } from './../component/popover/popover.component';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PopoverController, Events } from '@ionic/angular';

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
    private events: Events
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

  newCurrentStory(story) {
    console.log(story);
    this.storage.set("currentStory", story).then(current => {
      this.currentStory = current;
    })
  }

  async presentPopover(ev: any, story: Object) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        story: story,
        currentStory: this.currentStory
      },
      event: ev
    });

    this.events.subscribe("stories", removeStory => {
      console.log(removeStory);
      this.allStories = removeStory;
    })

    return await popover.present();
  }

}
