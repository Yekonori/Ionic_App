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

  /**
   * Store in `editStory` local the story
   * 
   * Navigate to House Choice Page with `edit` in params
   */
  editStory(story) {
    this.storage.set("editStory", story);
    this.router.navigate(["/house-choice", "edit"]);
    this.close();
  }

  /**
   * Delete the story
   * 
   * Publish an events to actualize the Stories
   */
  deleteStory(storyId) {
    this.storage.get("stories").then(stories => {

      // Get the index of the story
      let storyIndex = stories.findIndex(story => story.id === storyId);

      // Remove the story from the array of stories
      stories.splice(storyIndex, 1);

      // Set the new value for the local stories
      this.storage.set("stories", stories).then(actualizeStories => {
        this.events.publish("stories", actualizeStories);
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
    this.popoverController.dismiss();
  }

}
