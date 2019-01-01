import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);
@Component({
  selector: 'app-three-charts',
  templateUrl: './three-charts.component.html',
  styleUrls: ['./three-charts.component.css']
})
export class ThreeChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  highcharts = Highcharts;
   chartOptions = {      
      chart: {
         renderTo: 'container',
         type: 'column',
         margin: 75,
         options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
         }
      },         
      title : {
         text: 'Chart rotation demo'   
      },
      plotOptions : {
         column: {
            depth: 25
         }
      },
      series : [{
         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
                 194.1, 95.6, 54.4]
      }]
   };

}
