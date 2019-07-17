import { crests } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover-crest',
  templateUrl: './popover-crest.component.html',
  styleUrls: ['./popover-crest.component.scss'],
})
export class PopoverCrestComponent implements OnInit {

  crest;

  constructor(
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.crest = this.navParams.data.crest;
  }

}
