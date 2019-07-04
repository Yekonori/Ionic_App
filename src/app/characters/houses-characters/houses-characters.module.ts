import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HousesCharactersPage } from './houses-characters.page';

import { CharacterCardComponent } from './../component/character-card/character-card.component';

const routes: Routes = [
  {
    path: '',
    component: HousesCharactersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HousesCharactersPage,
    CharacterCardComponent
  ]
})
export class HousesCharactersPageModule {}
