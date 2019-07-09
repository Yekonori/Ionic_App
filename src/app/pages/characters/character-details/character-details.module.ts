import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CharacterDetailsPage } from './character-details.page';
import { PopoverPersonalAbilityComponent } from 'src/app/components/popover/popover-personal-ability/popover-personal-ability.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterDetailsPage,
    children: [
      {
        path: 'informations',
        loadChildren: './pages/characters/character-details/informations/informations.module#InformationsPageModule'
      },
      {
        path: 'classes',
        loadChildren: './pages/characters/character-details/classes/classes.module#ClassesPageModule'
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
    PopoverPersonalAbilityComponent
  ],
  declarations: [
    CharacterDetailsPage,
    PopoverPersonalAbilityComponent
  ]
})
export class CharacterDetailsPageModule { }