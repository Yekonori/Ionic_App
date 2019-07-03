import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-houses-characters',
  templateUrl: './houses-characters.page.html',
  styleUrls: ['./houses-characters.page.scss'],
})
export class HousesCharactersPage implements OnInit {

  /**
   * houseName    = for getHouseStudents() of the good House
   * titleHouse   = string used in HTML <ion-title>
   * allStudents  = Students Characters of the House Array
   */
  houseName = "";
  titleHouse = "";
  allStudents = [];

  constructor(
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getHouseParameter();
  }

  /**
   * Get the `houseName` parameter of the route
   * 
   * and use the `houseName` to get the correct array of house's students
   * 
   * Call setActiveTab() function to change the color of the ion-tab-button
   */
  getHouseParameter() {
    this.houseName = this.activatedroute.snapshot.paramMap.get("houseName");

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
        this.allStudents = environment.blackEagles;
        break;
      case 'blueLions':
        this.titleHouse = "Blue Lions";
        this.allStudents = environment.blueLions;
        break;
      case 'goldenDeer':
        this.titleHouse = "Golden Deer";
        this.allStudents = environment.goldenDeer;
        break;
    }
  }

}
