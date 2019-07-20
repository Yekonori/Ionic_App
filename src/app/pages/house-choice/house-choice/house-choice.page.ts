import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Events, MenuController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-house-choice',
  templateUrl: './house-choice.page.html',
  styleUrls: ['./house-choice.page.scss'],
})
export class HouseChoicePage implements OnInit {
  @ViewChild('houseSlides') slides: IonSlides;

  /**
   * Slider Options
   */
  slideOpts = {
    centeredSlides: true,
    centerInsufficientSlides: true,
    slideActiveClass: "selectedSlide"
  }

  /**
   * The keyboard is open ?
   */
  keyboardOpen = false;

  /**
   * StoryObject :
   */
  storyObject = {
    id: "",
    name: "",
    house: "blackEagles",
    byleth: {
      sex: "",
      name: ""
    }
  };

  /**
   * Possibles choices for : 
   * 
   * - Byleth Sex
   * - House
   */

   bylethSexChoice = ["Male", "Female"];
   houseChoice = ["Black_Eagles", "Blue_Lions", "Golden_Deer"];

  confirmStoryName = false;

  statusParameter = "";
  headerContent = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storage: Storage,
    private events: Events,
    private menuCtrl: MenuController
  ) {
    window.addEventListener('keyboardWillShow', () => {
      this.keyboardOpen = true;
    });

    window.addEventListener('keyboardWillHide', () => {
      this.keyboardOpen = false;
    });
  }

  ngOnInit() {
    this.getStatusParam();

    // this.storage.clear();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }

  /**
   * Stock the value of `status` parameter in `statusParameter`
   * 
   * If `statusParameter` is edit, apply to `storyObject` the correct values
   * 
   * If a `currentStory` local exist, navigate to All Characters Page
   * 
   * If the `storyId` local doesn't exist, create one and initialize him to 0
   */
  getStatusParam() {
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

      this.storage.get("stories").then(exist => {
        if (!exist) {
          this.storage.set("stories", []);
        }
      });
    } else if (this.statusParameter === "edit") {
      this.editStory();
    }

    if (this.statusParameter === "begin" || this.statusParameter === "newStory") {
      this.headerContent = "New Story/Configuration";
    }
  }

  /*************************************************************************************************/
  /****************************************** Byleth Part ******************************************/
  /*************************************************************************************************/

  setBylethSex(sex: string) {
    this.storyObject.byleth.sex = sex;
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
        if (storiesLocal) {
          let existingName = storiesLocal.findIndex(story => story.name === this.storyObject.name);

          if (existingName >= 0) {
            this.confirmStoryName = false;
          } else {
            this.confirmStoryName = true;
          }
        } else {
          this.confirmStoryName = true;
        }
      });
    } else {
      this.confirmStoryName = false;
    }
  }

  /**
   * Set the `storyObject.house`
   */
  setStoryHouse() {
    this.slides.getActiveIndex().then(index => {
      switch (index) {
        case 0:
          this.storyObject.house = 'blackEagles';
          break;
        case 1:
          this.storyObject.house = 'blueLions';
          break;
        case 2:
          this.storyObject.house = 'goldenDeer';
          break;
      }
    });
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

      this.storage.set("stories", storiesLocal).then(actualizeStories => {
        this.events.publish("stories", actualizeStories);
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
      this.storyObject = story;

      this.headerContent = this.storyObject.name;

      this.houseStorySlide();
    });
  }

  houseStorySlide() {
    switch (this.storyObject.house) {
      case 'blackEagles':
        this.slides.slideTo(0, 0);
        break;
      case 'blueLions':
        this.slides.slideTo(1, 0);
        break;
      case 'goldenDeer':
        this.slides.slideTo(2, 0);
        break;
    }
  }

  /**
   * Edit the `stories` with the new values of `editStory`
   */
  applyEdit() {
    if (this.storyObject.name != "") {
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
}