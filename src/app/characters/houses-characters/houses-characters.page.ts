import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { housesCharacters } from 'src/environments/environment';

@Component({
  selector: 'app-houses-characters',
  templateUrl: './houses-characters.page.html',
  styleUrls: ['./houses-characters.page.scss'],
})
export class HousesCharactersPage implements OnInit {

  @Output() character = new EventEmitter<Object>();
  @Output() houseFileName = new EventEmitter<string>();

  /**
   * houseName    = for getHouseStudents() of the good House
   * titleHouse   = string used in HTML <ion-title>
   * allStudents  = Students Characters of the House Array
   */
  houseName = "";
  titleHouse = "";
  allStudents = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getHouseParameter();
  }

  /**
   * Get the `houseName` parameter of the route in `this.houseName`
   * 
   * and use the `houseName` to get the correct array of house's students
   */
  getHouseParameter() {
    this.houseName = this.activatedRoute.snapshot.paramMap.get("houseName");

    this.getHouseStudents(this.houseName);
  }

  /**
   * Get students from a specific House
   * 
   * @param houseName = parameter of the route
   */
  getHouseStudents(houseName: string) {

    switch (houseName) {
      case 'blackEagles':
        this.titleHouse = "Black Eagles";
        this.allStudents = housesCharacters.blackEagles;
        break;
      case 'blueLions':
        this.titleHouse = "Blue Lions";
        this.allStudents = housesCharacters.blueLions;
        break;
      case 'goldenDeer':
        this.titleHouse = "Golden Deer";
        this.allStudents = housesCharacters.goldenDeer;
        break;
    }
  }

}
