import {Component} from '@angular/core';
import {chartJs} from 'chart.js';

@Component ({
selector : 'grafico-component',
templateUrl : 'grafico.component.html'
})

export class GraficoComponent{
      /*@aViewChild('barCanvas') barCanvas;

      barChart: any;


    constructor(public navCtrl: any) { }

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
          label: 'número de votos',
          data: [12, 23, 15, 90, 5],
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
