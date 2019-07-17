import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CharacterDetailsPage } from './character-details.page';
import { PopoverCrestComponent } from 'src/app/components/popover/popover-crest/popover-crest.component';
import { PopoverPersonalAbilityComponent } from 'src/app/components/popover/popover-personal-ability/popover-personal-ability.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterDetailsPage,
    children: [
      {
        path: 'informations',
        loadChildren: './character-informations/character-informations.module#CharacterInformationsPageModule'
      },
      {
        path: 'classes',
        loadChildren: './character-classes/character-classes.module#CharacterClassesPageModule'
      },
      {
        path: 'personality',
        loadChildren: './character-personality/character-personality.module#CharacterPersonalityPageModule'
      },
      {
        path: 'gestion',
        loadChildren: './character-gestion/character-gestion.module#CharacterGestionPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    PopoverPersonalAbilityComponent,
    PopoverCrestComponent
  ],
  declarations: [
    CharacterDetailsPage,
    PopoverPersonalAbilityComponent,
    PopoverCrestComponent
  ]
})
export class CharacterDetailsPageModule { }
