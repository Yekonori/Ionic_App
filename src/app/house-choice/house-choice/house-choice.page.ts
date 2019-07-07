import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storage: Storage
  ) { }

  ngOnInit() {
    let statusParameter = this.activatedRoute.snapshot.paramMap.get("status");

    this.storage.get("currentStory").then(exist => {
      if (exist && statusParameter === "begin") {
        this.router.navigate(['/all-characters']);
      }
    });

    this.storage.get("storyId").then(exist => {
      if (!exist) {
        this.storage.set("storyId", 0);
      }
    });

    // this.storage.clear();
  }

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
    this.storage.get("storyId").then(id => {
      this.storyObject.id = id;

      this.storage.set("storyId", id + 1);
      this.storage.get("stories").then(storiesLocal => {

        storiesLocal.push(this.storyObject);

        this.storage.set("stories", storiesLocal).then(() => {
          this.setCurrentStory();
        });
      });
    });
  }

  setCurrentStory() {
    this.storage.set("currentStory", this.storyObject).then(() => {
      this.router.navigate(['/all-characters']);
    });
  }

}
