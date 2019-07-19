import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { charactersDetails, classes, classesDetails } from 'src/environments/environment';

@Component({
  selector: 'app-character-classes',
  templateUrl: './character-classes.page.html',
  styleUrls: ['./character-classes.page.scss'],
})
export class CharacterClassesPage implements OnInit {

  /**
   * Character's Details Object
   */
  characterDetails;

  /**
   * Classes' Details Array
   */
  classes = [];

  /**
   * Array of stats use for Max Stats & Growth Rates
   */
  stats = ["HP", "STR", "DEF", "DEX", "SPD", "MAG", "RES"];
  maxStats = ["HP", "STR", "DEF", "DEX", "SPD", "MAG", "RES", "MOV"];
  growthRates = ["HP", "STR", "DEF", "DEX", "SPD", "MAG", "RES"];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCharacterParameter();

    this.getClassesAcces();
  }

  /**
   * Get the `characterName` parameter of the route in `characterParameter`
   * and attribute to `characterDetails` the value of charactersDetails[`characterParameter`]s
   */
  getCharacterParameter() {
    let characterParameter = this.activatedRoute.snapshot.parent.parent.paramMap.get("characterName");

    this.characterDetails = charactersDetails[characterParameter];
  }

  /**
   * Get all Classes character have acces
   */
  getClassesAcces() {
    let initialClasse = [classesDetails[this.characterDetails.baseInformations.baseClasse]];

    let allClasses = initialClasse.concat(classes.beginnerClasses, classes.intermediateClasses, classes.advancedClasses);

    allClasses.forEach(classe => {
      /**
       * 
       * Check if the classe : 
       * - noRestricted
       * - isLordOnly and if the character isLord
       * - isManOnly and if the character isMan
       * - isWomanOnly and if the character isWoman
       */

      if (
        classesDetails[classe.name.replace(" ", "")].restrictions.noRestricted
      ) {
        this.classes.push(classesDetails[classe.name.replace(" ", "")]);
      } else if (
        classesDetails[classe.name.replace(" ", "")].restrictions.isLordOnly &&
        this.characterDetails.restrictions.isLord
      ) {
        this.classes.push(classesDetails[classe.name.replace(" ", "")]);
      } else if (
        classesDetails[classe.name.replace(" ", "")].restrictions.isManOnly &&
        this.characterDetails.restrictions.isMan
      ) {
        this.classes.push(classesDetails[classe.name.replace(" ", "")]);
      } else if (
        classesDetails[classe.name.replace(" ", "")].restrictions.isWomanOnly &&
        this.characterDetails.restrictions.isWoman
      ) {
        this.classes.push(classesDetails[classe.name.replace(" ", "")]);
      } else if (
        classesDetails[classe.name.replace(" ", "")].restrictions.isStudentOnly &&
        this.characterDetails.restrictions.isStudent
      ) {
        this.classes.push(classesDetails[classe.name.replace(" ", "")]);
      }
    });
  }

  toggleClasseInformations(i) {
    this.classes[i].open = !this.classes[i].open;
    console.log(this.classes[i].proficiencies);
  }
}
