import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllCharactersPage } from './all-characters.page';

import { ComponentCharactersModule } from './../component/component-characters.module';

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
    RouterModule.forChild(routes),
    ComponentCharactersModule
  ],
  declarations: [
    AllCharactersPage
  ]
})
export class AllCharactersPageModule { }
