import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, Events } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  story = {
    id: ""
  };
  currentStory = {
    id: ""
  };

  constructor(
    private popoverController: PopoverController,
    private navParams: NavParams,
    private events: Events,
    private storage: Storage,
    private router: Router
  ) { }

  /**
   * Apply the story passed in the popover to `this.story`
   */
  ngOnInit() {
    this.story = this.navParams.data.story;
    this.currentStory = this.navParams.data.currentStory;
  }

  editStory(storyId) {
    console.log(storyId);
  }

  /**
   * Delete the story
   */
  deleteStory(storyId) {
    this.storage.get("stories").then(stories => {

      // Get the index of the story
      let storyIndex = stories.findIndex(story => story.id === storyId);

      // Remove the story from the array of stories
      stories.splice(storyIndex, 1);

      // Set the new value for the local stories
      this.storage.set("stories", stories).then(() => {
        this.close();
      });
    });
  }

  /**
   * Get the new `stories` local and pass them to the Stories Page
   * 
   * Dismiss the popover
   */
  close() {
    this.storage.get("stories").then(stories => {
      this.events.publish("stories", stories);
    });

    this.popoverController.dismiss();
  }

}
