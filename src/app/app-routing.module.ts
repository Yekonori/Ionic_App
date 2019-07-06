import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'house-choice/begin',
    pathMatch: 'full'
  },
  {
    path: 'house-choice/:status',
    loadChildren: './house-choice/house-choice/house-choice.module#HouseChoicePageModule'
  },
  {
    path: 'stories',
    loadChildren: './house-choice/stories/stories.module#StoriesPageModule'
  },
  {
    path: 'all-characters',
    loadChildren: './characters/all-characters/all-characters.module#AllCharactersPageModule'
  },
  {
    path: 'character-details/:characterName',
    loadChildren: './characters/character-details/character-details.module#CharacterDetailsPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
