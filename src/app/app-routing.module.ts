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
    loadChildren: './pages/house-choice/house-choice/house-choice.module#HouseChoicePageModule'
  },
  {
    path: 'stories',
    loadChildren: './pages/house-choice/stories/stories.module#StoriesPageModule'
  },
  {
    path: 'all-characters',
    loadChildren: './pages/characters/all-characters/all-characters.module#AllCharactersPageModule'
  },
  {
    path: 'character-details/:characterName',
    loadChildren: './pages/characters/character-details/character-details.module#CharacterDetailsPageModule'
  },
  {
    path: 'all-classes',
    loadChildren: './pages/classes/all-classes/all-classes.module#AllClassesPageModule'
  },
  {
    path: 'classe-details/:classeName',
    loadChildren: './pages/classes/classe-details/classe-details.module#ClasseDetailsPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
