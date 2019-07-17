import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';

import { charactersDetails, crests, personalAbilities } from 'src/environments/environment';
import { PopoverCrestComponent } from 'src/app/components/popover/popover-crest/popover-crest.component';
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
  crest = [];

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
    this.characterDetails.crest.forEach(characterCrest => {
      this.crest.push(crests.find(crest => crest.id === characterCrest));
    });
  }

  getPersonalAbilityDetails() {
    this.personalAbility = personalAbilities[this.characterDetails.personalAbility.replace(/\ |\'/g, '')];
  }

  async presentPopoverCrest(ev: any, index: number) {
    const popover = await this.popoverController.create({
      component: PopoverCrestComponent,
      componentProps: {
        crest: this.crest[index]
      },
      event: ev
    });

    return await popover.present();
  }

  async presentPopoverPersonalAbility(ev: any) {
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
