import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-scatter-charts',
  templateUrl: './scatter-charts.component.html',
  styleUrls: ['./scatter-charts.component.css']
})
export class ScatterChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  highcharts = Highcharts;
   chartOptions = {         
      title : {
         text: 'Scatter plot'   
      },      
      series : [{
         type: 'scatter',
         zoomType:'xy',
         name: 'Browser share',
         data: [ 1, 1.5, 2.8, 3.5, 3.9, 4.2 ]
      }]
   };

}
