import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';

import { charactersDetails } from 'src/environments/environment';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  characterDetails;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCharacterParameter();
  }

  /**
   * Get the `characterName` parameter of the route in `characterParameter`
   * and attribute to `characterDetails` the value of charactersDetails[`characterParameter`]
   * 
   * Call `getCrestDetails()` function to get crest details
   * Call `getPersonalAbilityDetails()` function to get crest details
   */
  getCharacterParameter() {
    let characterParameter = this.activatedRoute.snapshot.paramMap.get("characterName");

    this.characterDetails = charactersDetails[characterParameter];
  }

}
