import React, { Component } from 'react'
import ApexCharts from 'apexcharts';

export default class Dailywastage extends Component {
    constructor() {
        super();
        this.state = {
          message: '',
          success: false,
          error: false,
          series: [],
          name:'',
         
          optionsPetrol: {
            chart: {
              id: 'area-datetime',
              type: 'bar',
              height: 450,
              foreColor: "#004d99", // labels colors
              curve: 'smooth',
              zoom: {
                autoScaleYaxis: true
              },
              animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 1500,
                animateGradually: {
                  enabled: true,
                  delay: 1500
                },
                dynamicAnimation: {
                  enabled: true,
                  speed: 1500
                }
              }
            },
            stroke: {
              width: 2,
            },
            dataLabels: {
              enabled: false,
            },
            markers: {
              size: 0,
              colors: ['#f00892']
            },
            xaxis: {
              type: 'datetime',
              tickAmount: 1,
              labels: {
                datetimeUTC: false,
              }
            },
            yaxis: {
              labels: {
                formatter: function (value) {
                  return value.toFixed(2);
                }
              },
            },
            tooltip: {
              x: {
                format: 'yyyy-MM-dd HH:mm:ss'
              }
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.2,
                opacityTo: 0.9,
              },
            },
            colors: ['#008ffb'],
          },
       
        }
      }
      componentDidMount(){
          let value=[2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
          this.setState({series:[{ name: 'daily', data: value }]})
      }  
          
      
  render() {
      const{series}=this.state;
    return (
      <div>
         <ApexCharts options={this.state.optionsPetrol}
                          series={series} type="area" height={450} />
      </div>
    )
  }
}
