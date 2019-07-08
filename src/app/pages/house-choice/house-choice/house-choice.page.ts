import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Events, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-house-choice',
  templateUrl: './house-choice.page.html',
  styleUrls: ['./house-choice.page.scss'],
})
export class HouseChoicePage implements OnInit {

  /**
   * StoryObject Model :
   * - Name
   * - House
   */
  storyObject = {
    id: "",
    name: "",
    house: ""
  }

  confirmStoryName = false;
  confirmHouse = false;

  statusParameter = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storage: Storage,
    private events: Events,
    private menuController: MenuController
  ) { }

  /**
   * Stock the value of `status` parameter in `statusParameter`
   * 
   * If `statusParameter` is edit, apply to `storyObject` the correct values
   * 
   * If a `currentStory` local exist, navigate to All Characters Page
   * 
   * If the `storyId` local doesn't exist, create one and initialize him to 0
   */
  ngOnInit() {
    this.statusParameter = this.activatedRoute.snapshot.paramMap.get("status");

    if (this.statusParameter === "begin") {
      this.storage.get("currentStory").then(exist => {
        if (exist) {
          this.router.navigate(['/all-characters']);
        }
      });

      this.storage.get("storyId").then(exist => {
        if (!exist) {
          this.storage.set("storyId", 0);
        }
      });

      this.menuController.enable(false);
    } else if (this.statusParameter === "edit") {
      this.editStory();
    }

    // this.storage.clear();
  }

  /*************************************************************************************************/
  /************************************** Story Creation Part **************************************/
  /*************************************************************************************************/

  /**
   * Set the `storyObject.name` and make sure no one has the same name
   */
  setStoryName() {
    /**
     * Check if the storyObject.name isn't empty
     */
    if (this.storyObject.name != "") {
      /**
       * Check if a story already exist with this name
       */
      this.storage.get("stories").then(storiesLocal => {
        let existingName = storiesLocal.findIndex(story => story.name === this.storyObject.name);

        if (existingName >= 0) {
          this.confirmStoryName = false;
        } else {
          this.confirmStoryName = true;
        }
      })
    }
  }

  /**
   * Set the `storyObject.house`
   */
  setStoryHouse(houseName: string) {
    this.storyObject.house = houseName;
    this.confirmHouse = true;
  }

  /**
   * Set the `storyObject.id`
   * and update the value of `storyId` local
   */
  setStoryId() {
    this.storage.get("storyId").then(id => {
      this.storyObject.id = id;

      this.storage.set("storyId", id + 1).then(() => {
        this.createStory();
      });
    });
  }

  /**
   * If the two confirm boolean are true : 
   * - Create the Story in the Local
   * - Call the `setCurrentStory()` to make him the actual one
   */
  createStory() {
    this.storage.get("stories").then(storiesLocal => {

      storiesLocal.push(this.storyObject);

      this.storage.set("stories", storiesLocal).then(() => {
        this.setCurrentStory();
      });
    });
  }

  /**
   * Set the created Story at the `currentStory` local
   * 
   * And navigate to the All Characters Page
   */
  setCurrentStory() {
    this.storage.set("currentStory", this.storyObject).then(() => {
      this.router.navigate(['/all-characters']);
    });
  }

  /*************************************************************************************************/
  /************************************** Story Edition Part ***************************************/
  /*************************************************************************************************/

  /**
   * Set the `storyObject` with the values of the `editStory` local
   */
  editStory() {
    this.storage.get("editStory").then(story => {
      this.storyObject = {
        id: story.id,
        name: story.name,
        house: story.house
      }
    });
  }

  /**
   * Edit the `stories` with the new values of `editStory`
   */
  applyEdit() {
    this.storage.get("stories").then(stories => {
      // Get the index of the story
      let storyIndex = stories.findIndex(story => story.id === this.storyObject.id);

      // Replace the story with here new values
      stories.splice(storyIndex, 1, this.storyObject);

      // Set the new value for the local stories
      this.storage.set("stories", stories).then(actualizeStories => {
        this.events.publish("stories", actualizeStories);

        this.storage.remove("editStory").then(() => {
          this.setCurrentStory();
        });
      });
    });
  }

}
