import {Component} from '@angular/core';
//import {chartJs} from 'chart.js';
import { MenuController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { SalvarTelaComponent } from '../../tela/salvar-tela/salvar-tela.component';
import { NavController } from '@ionic/angular';
//import chartJs from 'chart.js';

@Component ({
selector : 'grafico-component',
templateUrl : 'grafico.component.html'
})

export class GraficoComponent{
  constructor(private menu: MenuController,public popoverController: PopoverController, public navCtrl: NavController) { }
  async tela(ev: any) {
    const popover = await this.popoverController.create({
      component: SalvarTelaComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  /*barChartOptions: any = [{
   scales: {
      yAxes: [
       {
           display: true,
           ticks: {
             fontSize: 10,
             colors: '#fff'
           }
       }
     ]
   }
 }];
 barChartLabels = [];
 barChartType:string = 'bar';
 barChartLegend:boolean = true;
 barChartData:any;
 barChartColors:Array<any> = [
   {
     backgroundColor: '#3F51B5',
     borderColor: '#3F51B5',
     pointBackgroundColor: '#3F51B5',
     pointBorderColor: '#3F51B5',
     pointHoverBackgroundColor: '#3F51B5',
     pointHoverBorderColor: '#3F51B5',
     labels: '#3F51B5'
   }]

 doughnutChartLabels:string[];
 doughnutChartData:number[];
 doughnutChartType:string = 'doughnut';


 calc(tipo){
   if (tipo === 'bar') {
       this.calcBar();
   } else {
       this.calcDoughnut();
   }
 }

 calcBar(){
   this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
   this.barChartData = [
     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
       {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
   ];
 }

 calcDoughnut(){
   this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
   this.doughnutChartData = [350, 450, 100];
 };*/

  /*    @aViewChild('barCanvas') barCanvas;

      barChart: any;


    constructor(public navCtrl: any, private rota : Router) { }

    ngAfterViewInit(){
      setTimeout(() => {
        this.barChart = this.getBarChart();
      }, 150)
    }

    getChart(context, chartType, data, options?) {
      return new chartJs(context, {
        data,
        options,
        type: chartType
      })
    }


    getBarChart(){
      const data = {
        labels: ['Vermelho', 'Azul', 'Amarelo', 'Verde', 'Roxo'],
        datasets: [{
          label: 'Indice de massa gorda',
          data: ["janeiro", "fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],
          backgroundColor: [
            'rgb(255, 0, 0)',
            'rgb(20, 0, 255)',
            'rgb(255, 230, 0)',
            'rgb(0, 255, 10)',
            'rgb(60, 0, 70)'
          ],
          borderWidth: 1
        }]
      };

      const options = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

      return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
    }*/
  }
