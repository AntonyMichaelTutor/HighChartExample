import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-area-charts',
  templateUrl: './area-charts.component.html',
  styleUrls: ['./area-charts.component.css']
})
export class AreaChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  highcharts = Highcharts;
   chartOptions = {   
      chart: {
        type: 'areaspline'
      },
      title: {
        text: 'Average fruit consumption during one week'
      },
      subtitle : {
         style: {
            position: 'absolute',
            right: '0px',
            bottom: '10px'
         }
      },
      legend : {
         layout: 'vertical',
         align: 'left',
         verticalAlign: 'top',
         x: -150,
         y: 100,
         floating: true,
         borderWidth: 1,
        
         //backgroundColor: (
           // Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 
             // '#FFFFFF'
      },
      xAxis:{
         categories: ['Monday','Tuesday','Wednesday','Thursday',
            'Friday','Saturday','Sunday'] 
      },
      yAxis : {
         title: {
            text: 'Number of units'
         }
      },
      tooltip : {
         shared: true, valueSuffix: ' units'
      },
      plotOptions : {
         area: {
            fillOpacity: 0.5 
         }
      },
      credits:{
        enabled: false
      },
      series: [
         {
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
         }, 
         {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4]
         }
      ]
   };

}
