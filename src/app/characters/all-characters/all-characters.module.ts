import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllCharactersPage } from './all-characters.page';

const routes: Routes = [
  {
    path: '',
    component: AllCharactersPage,
    children: [
      {
        path: 'blackEagles',
        // loadChildren: './characters/houses-characters/houses-characters.module#HousesCharactersPageModule'
        loadChildren: './characters/all-characters/all-characters.module#AllCharactersPageModule'

      },
      {
        path: 'blueLions',
        // loadChildren: './characters/houses-characters/houses-characters.module#HousesCharactersPageModule'
        loadChildren: './characters/all-characters/all-characters.module#AllCharactersPageModule'

      },
      {
        path: 'goldenDeer',
        // loadChildren: './characters/houses-characters/houses-characters.module#HousesCharactersPageModule'
        loadChildren: './characters/all-characters/all-characters.module#AllCharactersPageModule'

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
  declarations: [AllCharactersPage]
})
export class AllCharactersPageModule { }
