import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllCharactersPage } from './all-characters.page';

import { CharacterCardComponent } from './../component/character-card/character-card.component';

const routes: Routes = [
  {
    path: '',
    component: AllCharactersPage,
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
    AllCharactersPage,
    CharacterCardComponent
  ]
})
export class AllCharactersPageModule { }
