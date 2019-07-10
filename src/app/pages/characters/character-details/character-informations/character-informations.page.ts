import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';

import { charactersDetails, crests, personalAbilities } from 'src/environments/environment';
import { PopoverPersonalAbilityComponent } from 'src/app/components/popover/popover-personal-ability/popover-personal-ability.component';

@Component({
  selector: 'app-character-informations',
  templateUrl: './character-informations.page.html',
  styleUrls: ['./character-informations.page.scss'],
})
export class CharacterInformationsPage implements OnInit {

  /**
   * Character's Details Object
   */
  characterDetails;

  /**
   * Crest's Details Object
   */
  crest;

  /**
   * Personal Ability's Details Object
   */
  personalAbility;

  constructor(
    private activatedRoute: ActivatedRoute,
    private popoverController: PopoverController
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
    let characterParameter = this.activatedRoute.snapshot.parent.parent.paramMap.get("characterName");

    this.characterDetails = charactersDetails[characterParameter];

    this.getCrest();

    this.getPersonalAbilityDetails();
  }

  getCrest() {
    this.crest = crests.find(crest => crest.owner === this.characterDetails.name);
  }

  getPersonalAbilityDetails() {
    this.personalAbility = personalAbilities[this.characterDetails.personalAbility.replace(/\ |\'/g, '')];
    console.log(this.personalAbility);
  }

  async presentPopover(ev: any, story: Object) {
    const popover = await this.popoverController.create({
      component: PopoverPersonalAbilityComponent,
      componentProps: {
        personalAbility: this.personalAbility
      },
      event: ev
    });

    return await popover.present();
  }

}
