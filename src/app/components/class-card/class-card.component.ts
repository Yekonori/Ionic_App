import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.scss'],
})
export class ClassCardComponent implements OnInit {

  @Input() classe: any;
  @Input() classeTier: string;

  constructor() { }

  ngOnInit() {}

}
