import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent implements OnInit {

  @Input() character: any;
  @Input() houseNameFile: string;

  constructor() { }

  ngOnInit() { 
    console.log(this.houseNameFile);
  }

}
