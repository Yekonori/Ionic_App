import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { classes } from 'src/environments/environment';

@Component({
  selector: 'app-all-classes',
  templateUrl: './all-classes.page.html',
  styleUrls: ['./all-classes.page.scss'],
})
export class AllClassesPage implements OnInit {

  @Output() classe = new EventEmitter<Object>();
  @Output() classeTier = new EventEmitter<string>();

  initialClasses = [];
  beginnerClasses = [];
  intermediateClasses = [];
  advancedClasses = [];

  constructor() { }

  ngOnInit() {
    this.getAllClasses();
  }

  /**
   * Get all Classes by Tier
   */
  getAllClasses() {
    this.initialClasses = classes.initialClasses;
    this.beginnerClasses = classes.beginnerClasses;
    this.intermediateClasses = classes.intermediateClasses;
    this.advancedClasses = classes.advancedClasses;
  }

}
