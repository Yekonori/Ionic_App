import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover-personal-ability',
  templateUrl: './popover-personal-ability.component.html',
  styleUrls: ['./popover-personal-ability.component.scss'],
})
export class PopoverPersonalAbilityComponent implements OnInit {

  personalAbility;

  constructor(
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.personalAbility = this.navParams.data.personalAbility;
  }

}
