import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { charactersDetails, crests } from 'src/environments/environment';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  /**
   * Chracter's Details Object
   */
  characterDetails = {
    name: "",
    fullName: "",
    house: "",
    crest: ""
  };

  /**
   * Crest's Details Object
   */
  crest = {
    name: "",
    status: "",
    owner: "",
    effect: ""
  }

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCharacterParameter();
  }

  /**
   * Get the `characterName` parameter of the route in `characterParameter`
   * 
   * and attribute to `characterDetails` the value of charactersDetails[`characterParameter`]
   * 
   * Call `getCharacterParameter()` function to get crest details
   */
  getCharacterParameter() {
    let characterParameter = this.activatedRoute.snapshot.paramMap.get("characterName");

    this.characterDetails = charactersDetails[characterParameter];

    this.getCrestDetails();
  }

  getCrestDetails() {
    this.crest = crests.find(crest => crest.owner === this.characterDetails.name);

    console.log(this.crest);
  }

}
