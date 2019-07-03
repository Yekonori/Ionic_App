import { Component, OnInit } from '@angular/core';
import { housesCharacters } from 'src/environments/environment';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.page.html',
  styleUrls: ['./all-characters.page.scss'],
})
export class AllCharactersPage implements OnInit {

  // Students Characters Array
  blackEaglesCharacters: Array<any> = [];
  blueLionsCharacters: Array<any> = [];
  goldenDeerCharacters: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.getHousesStudents();
  }

  /**
   * Call each get{HouseName}Characters
   */
  getHousesStudents() {
    this.getBlackEaglesCharacters();
    this.getBlueLionsCharacters();
    this.getGoldenDeerCharacters();
  }

  getBlackEaglesCharacters() {
    this.blackEaglesCharacters = housesCharacters.blackEagles;
  }

  getBlueLionsCharacters() {
    this.blueLionsCharacters = housesCharacters.blueLions;
  }

  getGoldenDeerCharacters() {
    this.goldenDeerCharacters = housesCharacters.goldenDeer;
  }

}
