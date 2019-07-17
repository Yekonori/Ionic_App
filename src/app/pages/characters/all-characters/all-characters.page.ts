import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { housesCharacters } from 'src/environments/environment';

import { Storage } from '@ionic/storage';

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
  studentsHouseCharacter: Array<any> = [];
  studentsHouseName: string = "";

  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get("currentStory").then(currentStory => {
      switch (currentStory.house) {
        case "blackEagles":
          this.getBlackEaglesCharacters();
          break;
        case "blueLions":
          this.getBlueLionsCharacters();
          break;
        case "goldenDeer":
          this.getGoldenDeerCharacters();
          break;
      }
    });
  }

  /**
   * Get the House's Characters
   */
  getBlackEaglesCharacters() {
    this.studentsHouseCharacter = housesCharacters.blackEagles;
    this.studentsHouseName = "Black_Eagles";
  }

  getBlueLionsCharacters() {
    this.studentsHouseCharacter = housesCharacters.blueLions;
    this.studentsHouseName = "Blue_Lions";
  }

  getGoldenDeerCharacters() {
    this.studentsHouseCharacter = housesCharacters.goldenDeer;
    this.studentsHouseName = "Golden_Deer";
  }

}
