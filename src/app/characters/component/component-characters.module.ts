import { NgModule } from "@angular/core";

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ],
    declarations: [
        CharacterCardComponent
    ],
    exports: [
        CharacterCardComponent,
    ]
})
export class ComponentCharactersModule { }