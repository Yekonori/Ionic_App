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

  collapseCharacters(elementID: string) {
    let element = document.getElementById(elementID);
    let elementDrop = document.getElementById(elementID + "Drop");
    
    if(element.classList.contains("hiddenElements")) {
      /**
       * Show the students list
       * And animate the arrowDrop
       */
      element.classList.remove("hiddenElements");
      element.style.height = "auto";
      element.style.opacity = "1";
      element.style.transition = "all 0.3s";
      elementDrop.style.transform = "rotate(180deg)";
      elementDrop.style.transition = "all 0.3s";
    } else {
      /**
       * Hide the students list
       * And animate the arrowDrop
       */
      element.classList.add("hiddenElements");
      element.style.height = "0";
      element.style.opacity = "0";
      element.style.transition = "all 0.3s";
      elementDrop.style.transform = "rotate(0deg)";
      elementDrop.style.transition = "all 0.3s";
    }
  }

  getHousesStudents() {
    this.getBlackEaglesCharacters();
    this.getBlueLionsCharacters();
    this.getGoldenDeerCharacters();
  }

  getBlackEaglesCharacters() {
    this.blackEaglesCharacters = environment.blackEagles;
    console.log(this.blackEaglesCharacters);
  }

  getBlueLionsCharacters() {
    this.blueLionsCharacters = environment.blueLions;
    console.log(this.blueLionsCharacters);
  }

  getGoldenDeerCharacters() {
    this.goldenDeerCharacters = environment.goldenDeer;
    console.log(this.goldenDeerCharacters);
  }

}
