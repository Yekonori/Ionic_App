import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StoriesPage } from './stories.page';

import { PopoverStoriesComponent } from 'src/app/components/popover/popover-stories/popover-stories.component';

const routes: Routes = [
  {
    path: '',
    component: StoriesPage
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
    PopoverStoriesComponent
  ],
  declarations: [
    StoriesPage,
    PopoverStoriesComponent
  ]
})
export class StoriesPageModule {}
