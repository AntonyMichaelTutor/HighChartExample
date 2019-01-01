import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularHighchartsChartModule } from 'angular-highcharts-chart';
import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import { BasicHighChartComponent } from './basic-high-chart/basic-high-chart.component';
import { BasicLineChartComponent } from './basic-line-chart/basic-line-chart.component';
import { AreaChartsComponent } from './area-charts/area-charts.component';
import { BasicChartsComponent } from './basic-charts/basic-charts.component';
import { ColoumChartsComponent } from './coloum-charts/coloum-charts.component';
import { PieChartsComponent } from './pie-charts/pie-charts.component';
import { ScatterChartsComponent } from './scatter-charts/scatter-charts.component';
import { DynamicChartsComponent } from './dynamic-charts/dynamic-charts.component';
import { ThreeChartsComponent } from './three-charts/three-charts.component';
import { MapChartsComponent } from './map-charts/map-charts.component';

const links:Routes = [{path:"BasicCharts",component:BasicHighChartComponent},
                      {path:"LineCharts",component:BasicLineChartComponent},
                      {path:"AreaCharts",component:AreaChartsComponent},
                      {path:"BarCharts",component:BasicChartsComponent},
                      {path:"ColoumCharts",component:ColoumChartsComponent},
                      {path:"PieCharts",component:PieChartsComponent},
                      {path:"ScatterCharts",component:ScatterChartsComponent},
                      {path:"DynamicCharts",component:DynamicChartsComponent},
                      {path:"ThreeDCharts",component:ThreeChartsComponent},
                      {path:"MapCharts",component:MapChartsComponent}]
@NgModule({
  declarations: [
    AppComponent,
    BasicHighChartComponent,
    BasicHighChartComponent,
    BasicLineChartComponent,
    AreaChartsComponent,
    BasicChartsComponent,
    ColoumChartsComponent,
    PieChartsComponent,
    ScatterChartsComponent,
    DynamicChartsComponent,
    ThreeChartsComponent,
    MapChartsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(links),AngularHighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
