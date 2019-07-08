import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllClassesPage } from './all-classes.page';
import { ComponentsModule } from './../../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AllClassesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [AllClassesPage]
})
export class AllClassesPageModule { }
