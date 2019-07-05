import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HousesCharactersPage } from './houses-characters.page';

import { ComponentCharactersModule } from './../component/component-characters.module';


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
    RouterModule.forChild(routes),
    ComponentCharactersModule
  ],
  declarations: [
    HousesCharactersPage
  ]
})
export class HousesCharactersPageModule {}
