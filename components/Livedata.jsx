import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import styling from './styling.css'

export default class Livedata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],  
            };
    }
      componentDidMount(){
        this.setState({series:[
          1,(200-15)
        ]})
      } 
  render() {
    const{series}=this.state;
    return (
    <>
      <div style={{display:'flex'}}>
            <div style={{marginTop:'30px'}}>
                {series.length !== 0 ?
              <Chart series={series}
              
                                    options={{
                                        labels: [
                                            'Occupied','Available'
                                        ],
                                        legend: {  
                                            show:true,
                                            position:'bottom',
                                            offsetX:20
                                        },
                                        dataLabels: {
                                            enabled: false
                                        },
                                        colors: [
                                            '#3EDADA', '#C3F4F4'
                                        ],
                                        plotOptions: {
                                            pie: {
                                                donut: {
                                                    labels: {
                                                      show:true,
                                                      name: {
                                                        show: false,
                                                        // offsetY: -6,
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
                                    width="420"/>:<p></p>}
                </div>
                <div style={{width:'425px'}}>
                      
                      <h4 style={{marginTop:'0px',marginLeft:'218px',color:'#6B6B6B'}}> Mac ID : 5a-c2-15-00-00-00</h4>
                      <h1 style={{marginTop:'95px',marginLeft:'89px',fontSize:'80px',color:'#60C1E4',marginBottom:'78px'}}>110</h1>

                      <div className='content'>
                              <span style={{textAlign:'center',color:'#013E61',fontWeight:500}}>Food Fact</span><br />
                              <span style={{color:'#013E61',marginTop:'3px'}}>There is enough food produced in the world to feed everyone.</span>
                      </div>
                </div>
                </div>
                </>
    )
  }
}
