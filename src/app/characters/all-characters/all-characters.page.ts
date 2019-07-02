import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

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
   * Make a collapse system for
   * each characters part
   * 
   * @param elementID = id of an HTMLElement
   */
  collapseCharacters(elementID: string) {
    let elementDrop = document.getElementById(elementID + "Drop");
    let element = document.getElementById(elementID);

    if(element.classList.contains("hiddenElements")) {
      /**
       * Show the students list
       * And animate the arrowDrop
       * elementDrop = dropDown / dropUp
       * element = row with all houses' students
       */
      elementDrop.style.transform = "rotate(180deg)";
      elementDrop.style.transition = "all .5s";
      element.classList.remove("hiddenElements");
      element.style.maxHeight = "1800px";
      element.style.overflow = "visible";
      element.style.opacity = "1";
      element.style.transition = "all .5s";
    } else {
      /**
       * Hide the students list
       * And animate the arrowDrop
       * elementDrop = dropDown / dropUp
       * element = row with all houses' students
       */
      elementDrop.style.transform = "rotate(0deg)";
      elementDrop.style.transition = "all .5s";
      element.classList.add("hiddenElements");
      element.style.maxHeight = "0";
      element.style.overflow = "hidden";
      element.style.opacity = "0";
      element.style.transition = "all .5s";
    }
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
    this.blackEaglesCharacters = environment.blackEagles;
  }

  getBlueLionsCharacters() {
    this.blueLionsCharacters = environment.blueLions;
  }

  getGoldenDeerCharacters() {
    this.goldenDeerCharacters = environment.goldenDeer;
  }

}
