import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() cardType: any;

  @Input() character: any;
  @Input() houseNameFile: string;

  @Input() classe: any;
  @Input() classeTier: string;

  constructor() { }

  ngOnInit() {}

}
