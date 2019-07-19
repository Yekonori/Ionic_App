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
   * Character's Growth Rates
   */
  characterGrowthRates = [];

  /**
   * Character's Growth Rates
   */
  characterStatsModifier = [];

  /**
   * Array of stats use for Growth Rates & Stats Modifier
   */
  stats = ["HP", "STR", "DEF", "DEX", "SPD", "MAG", "RES"];

  /**
   * Array of masteries for Proficiencies
   */
  masteries = ["Sword", "Lance", "Axe", "Bow", "Brawling", "Reason", "Faith", "Authority", "Heavy Armor", "Riding", "Flying"];

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

    this.getCharacterStats();

    this.getCrest();

    this.getPersonalAbilityDetails();
  }

  /**
   * Get the differents value of : 
   * 
   * - Growth Rates
   * - Stats Modifiers
   */
  getCharacterStats() {
    Object.values(this.characterDetails.baseInformations.growthRates).forEach(growthRate => {
      this.characterGrowthRates.push(growthRate);
    });

    Object.values(this.characterDetails.baseInformations.statsModifier).forEach(statModifier => {
      this.characterStatsModifier.push(statModifier);
    });
  }

  getCrest() {
    this.characterDetails.crest.forEach(characterCrest => {
      this.crest.push(crests.find(crest => crest.id === characterCrest));
    });
  }

  getPersonalAbilityDetails() {
    this.personalAbility = personalAbilities.find(personalAbility => personalAbility.id === this.characterDetails.personalAbility);
  }

  getStrongMastery(mastery: string) {
    if (this.characterDetails.masteryLearning.strong.indexOf(mastery) >= 0) {
      return true;
    }
  }

  getWeakMastery(mastery: string) {
    if (this.characterDetails.masteryLearning.weak.indexOf(mastery) >= 0) {
      return true;
    }
  }

  getBuddingMastery(mastery: string) {
    if (this.characterDetails.masteryLearning.budding.indexOf(mastery) >= 0) {
      return true;
    }
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
