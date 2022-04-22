import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import ApexCharts from 'react-apexcharts';



import style from './style.css'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
            options1:{},
            series1:[],
      categorie: [],
          
            };

    }
    componentDidMount(){
        // this.interval = setInterval(this.getData, 5 * 1000);   
        // this.current=[];
        this.setState({series:[
          15,(200-15)
        ]})
        let val = [100, 200, 300, 230, 450, 302], cat = [1,2,3,4,5,6];
          this.setState({ series1: val, categorie: cat });
        // this.interval = setTimeout(() => {
        //   let val = [100, 200, 300, 230, 450, 302], cat = [1,2,3,4,5,6];
        //   this.setState({ series1: val, categorie: cat });
        // }, 3000);
      }
      
    
    
    componentWillUnmount(){
        // clearInterval(this.interval);
    }

        // let new_number=0;
        // var max=40;
        // var randomNumber = Math.floor((Math.random() *max));
    
        //    for(let i=0;i<randomNumber;i++){
        //     console.log(randomNumber)
        //    }
        // this.occup=randomNumber;
        // console.log(this.occup,'----occ');
        // this.tot=500;
        // this.old=this.occup+randomNumber
        // console.log(this.old,'=====');
      
     
      
    
  render() {
    const { series, categorie,series1 } = this.state;
    return (
        <>
        <div style={{width:'960px',background:'rgba(21, 137, 236, 0.13)',marginLeft:'210px'}}>
            <span className='header'>Food Wastage</span>
            <div className='line'></div>
      <div style={{marginTop:'30px',display:'flex'}}>
          <div className='cards'>
              
            <p style={{marginTop:'5px',marginLeft:'45px',color:'rgba(126, 126, 126, 1)',fontWeight:500,marginBottom:'0px'}}>5a-c2-15-01-00-01</p>
            {series.length !== 0 ?
              <Chart series={series}
              
                                    options={{
                                        labels: [
                                            'Occupied','Available'
                                        ],
                                        legend: {  
                                            show:true,
                                            position:'right',
                                            offsetY:60
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        colors: [
                                            '#3EDADA', 'rgba(169, 239, 239, 0.7)'
                                        ],
                                        plotOptions: {
                                            pie: {
                                                donut: {
                                                    labels: {
                                                      show:true,
                                                      name: {
                                                        show: false,
                                                        offsetY: -6,
                                                      },
                                                        total: {
                                                            show: true,
                                                            label: '',
                                                            formatter: () => '15',
                                                        },

                                                    }
                                                }
                                            }
                                        },
                                    }}
                                    
                                    type="donut"
                                    width="300"/>:<p></p>}
          </div>
          <div className='cards'>      
          <span className='cardheader'>Daily Wastage</span>
            <div className='line' style={{marginLeft:'25px'}}></div> 
            {
            categorie.length !== 0 ?
              (<ApexCharts
                options={{
                  chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    toolbar: {
                      show: true
                    },
                    zoom: {
                      enabled: true
                    }
                  },
                  plotOptions: {
                    bar: {
                      horizontal: false,
                      borderRadius: 10
                    },
                  },
                  xaxis: {
                    labels: {
                      show: true
                    },
                    type: 'category',
                    categories: categorie,
                  },
                  legend: {
                    position: 'top',
                    offsetY: 0
                  },
                }}

                series={[
                  {
                    name: 'Petrol',
                    data: series1,
                  }]}
                type="bar" height={180} />) : (
                <p />
              )
          }
                           
          </div>
      </div>
      <div style={{marginTop:'30px',display:'flex'}}>
          <div className='cards'>
          </div>
          <div className='cards'>

          </div>
      </div>
      </div>
      </>
    )
  }
}
