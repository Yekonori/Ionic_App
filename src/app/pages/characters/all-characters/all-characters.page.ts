import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';

import { charactersDetails } from 'src/environments/environment';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.page.html',
  styleUrls: ['./all-characters.page.scss'],
})
export class AllCharactersPage implements OnInit {

  @Output() cardType = new EventEmitter<string>();
  @Output() character = new EventEmitter<Object>();
  @Output() houseFileName = new EventEmitter<string>();

  /**
   * Students Characters Array
   */
  characters: Array<any> = [];
  studentsHouseName: string = "";

  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get("currentStory").then(currentStory => {
      this.characters = currentStory.storyCharacters;

      // switch (currentStory.house) {
      //   case "blackEagles":
      //     this.getBlackEaglesCharacters();
      //     break;
      //   case "blueLions":
      //     this.getBlueLionsCharacters();
      //     break;
      //   case "goldenDeer":
      //     this.getGoldenDeerCharacters();
      //     break;
      // }
    });
  }

  /**
   * Get the House's File for the Character
   */
  getHouseName(characterName: string) {
    return charactersDetails[characterName].house.replace(/ /g, '_');
  }

}
