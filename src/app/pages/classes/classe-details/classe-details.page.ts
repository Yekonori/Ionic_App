import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { classesDetails } from 'src/environments/environment';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-classe-details',
  templateUrl: './classe-details.page.html',
  styleUrls: ['./classe-details.page.scss'],
})
export class ClasseDetailsPage implements OnInit {

  @ViewChild('radarCanvas') radarCanvas;
  /**
   * Radar Chart
   */
  radarChart: any;
  statsDatas = ["HP", "STR", "DEF", "DEX", "SPD", "MAG", "RES", "MOV"];

  /**
   * Chracter's Details Object
   */
  classeDetails = {
    name: "",
    tier: "",
    stats: {
      HP: 1,
      STR: 1,
      DEF: 1,
      DEX: 1,
      SPD: 1,
      MAG: 1,
      RES: 1,
      MOV: 1
    }
  };

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  /**
   * Call `getClasseParameter()` and `radarChartMethod()` functions
   */
  ngOnInit() {
    this.getClasseParameter();
    this.radarChartMethod();
  }

  /**
   * Get the `classeName` parameter of the route in `classParameter`
   * and attribute to `classeDetails` the value of charactersDetails[`classParameter`]
   */
  getClasseParameter() {
    let classParameter = this.activatedRoute.snapshot.paramMap.get("classeName");

    this.classeDetails = classesDetails[classParameter];
  }

  radarChartMethod() {
    this.radarChart = new Chart(this.radarCanvas.nativeElement, {
      type: 'radar',
      data: {
        labels: this.statsDatas,
        datasets: [{
          data: [
            this.classeDetails.stats.HP,
            this.classeDetails.stats.STR,
            this.classeDetails.stats.DEF,
            this.classeDetails.stats.DEX,
            this.classeDetails.stats.SPD,
            this.classeDetails.stats.MAG,
            this.classeDetails.stats.RES,
            this.classeDetails.stats.MOV,
          ],
          pointRadius: 0
        }]
      },
      options: {
        legend: {
          display: false
        },
        scale: {
          ticks: {
            display: false,
            beginAtZero: true,
            max: 5,
            stepSize: 1
          }
        }
      }
    });
  }

}
