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

  getClassesAcces() {
    let allClasses = classes.initialClasses.concat(classes.beginnerClasses, classes.intermediateClasses, classes.advancedClasses);

    allClasses.forEach(classe => {
      /**
       * 
       * Check if the classe noRestricted
       * 
       * Check if the classe isLordOnly and if the character isLord
       * 
       * Check if the classe isManOnly and if the character isMan
       * 
       * Check if the classe isWomanOnly and if the character isWoman
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
      }
    })

    console.log(this.classes);
  }

}
