import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-characters',
    pathMatch: 'full'
  },
  {
    path: 'all-characters',
    loadChildren: './characters/all-characters/all-characters.module#AllCharactersPageModule'
  },
  {
    path: 'houses-characters/:houseName',
    loadChildren: './characters/houses-characters/houses-characters.module#HousesCharactersPageModule'
  },
  {
    path: 'character-details/:characterName',
    loadChildren: './characters/character-details/character-details.module#CharacterDetailsPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
