import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Events, MenuController, IonSlides } from '@ionic/angular';

import { housesCharacters, charactersDetails } from 'src/environments/environment';


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
    },
    storyCharacters: [],
    storyCharactersDetail: []
  };

  /**
   * Possibles choices for : 
   * 
   * - Byleth Sex
   * - House
   */
  bylethSexChoice = ["Male", "Female"];
  houseChoice = ["Black_Eagles", "Blue_Lions", "Golden_Deer"];

  /**
   * All of the charcters you can have in your party
   */
  storyCharacters = [];

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

      this.addStoryCharacters(false);

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
    /**
     * Check if the storyObject.name isn't empty
     */
    if (this.storyObject.name != "") {

      let storyIndex;

      /**
       * Get the index of the story
       */
      this.storage.get("stories").then(stories => {
        storyIndex = stories.findIndex(story => story.id === this.storyObject.id);

        this.addStoryCharacters(true);

        // Replace the story with here new values
        stories.splice(storyIndex, 1, this.storyObject);

        // Set the new value for the local stories
        this.storage.set("stories", stories).then(actualizeStories => {
          this.storage.set("stories", actualizeStories).then(editedStories => {
            this.events.publish("stories", editedStories);

            this.storage.remove("editStory").then(() => {
              this.setCurrentStory();
            });
          });
        });
      });
    }
  }

  /*************************************************************************************************/
  /************************************* Characters Local Part *************************************/
  /*************************************************************************************************/

  addStoryCharacters(isEdit: boolean) {
    this.storyCharacters = housesCharacters[this.storyObject.house];

    if (isEdit) {
      /**
       * Get the `editStory` ionic storage
       * 
       * Stock in `storyCharacters` the `housesCharacters[houseName]` array
       */
      this.storage.get("editStory").then(editStory => {
        /**
         * Check if need to change the `storyCharacters` array values
         */
        if (editStory.storyCharacters) {
          if (editStory.house != this.storyObject.house) {
            this.storyObject.storyCharacters = this.storyCharacters;
            this.addStoryCharactersDetails();
          }
        } else {
          this.storyObject.storyCharacters = this.storyCharacters;
          this.addStoryCharactersDetails();
        }
      });
    } else {
      this.storyObject.storyCharacters = this.storyCharacters;
      this.addStoryCharactersDetails();
    }
  }

  addStoryCharactersDetails() {
    this.storyObject.storyCharactersDetail = [];

    this.storyObject.storyCharacters.forEach(character => {

      let characterDetails = charactersDetails[character.name];

      let storyCharacterDetailsObject = {
        informations: {
          name: characterDetails.name,
          house: characterDetails.house,
          crest: characterDetails.crest,
          personalAbility: characterDetails.personalAbility
        },
        stats: {
          level: characterDetails.baseInformations.baseLevel,
          classe: characterDetails.baseInformations.baseClasse,
          classeLevel: characterDetails.baseInformations.baseClasseLevel,
          masteries: {
            sword: characterDetails.baseInformations.baseMastery.sword,
            lance: characterDetails.baseInformations.baseMastery.lance,
            axe: characterDetails.baseInformations.baseMastery.axe,
            brawling: characterDetails.baseInformations.baseMastery.brawling,
            reason: characterDetails.baseInformations.baseMastery.reason,
            faith: characterDetails.baseInformations.baseMastery.faith,
            authority: characterDetails.baseInformations.baseMastery.authority,
            heavyArmor: characterDetails.baseInformations.baseMastery.heavyArmor,
            riding: characterDetails.baseInformations.baseMastery.riding,
            flying: characterDetails.baseInformations.baseMastery.flying
          }
        }
      }

      this.storyObject.storyCharactersDetail.push(storyCharacterDetailsObject);
    });
  }
}