import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StoriesPage } from './stories.page';

import { PopoverComponent } from '../../../components/popover/popover.component';

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
    PopoverComponent
  ],
  declarations: [
    StoriesPage,
    PopoverComponent
  ]
})
export class StoriesPageModule {}
