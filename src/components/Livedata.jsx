import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import styling from './styling.css'
import axios from 'axios';

export default class Livedata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],  
            };
    }
      componentDidMount(){
      
        this.setState({series:[
          15,(200-15)
        ]})
        axios({method:'POST',url:'/api/sensor/report',data:{'key':'daily'}})
        .then((reponse)=>{
          console.log(reponse.data);
        })
        .catch((error)=>{
          console.log(error);
        })
      
      } 
  render() {
    const{series}=this.state;
    return (
    <>
    <div style={{marginBottom:'30px'}}>
          <span style={{fontSize:'30px',fontWeight:500,color:'#00629B'}}>Live Data</span>
        </div>
      <div style={{display:'flex'}}>
        
            <div style={{marginTop:'30px'}}>
              
                {series.length !== 0 ?
              <Chart series={series}
              
                                    options={{
                                        labels: [
                                            'wastage','Available'
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
                      
                      <h4 style={{marginTop:'0px',marginLeft:'100px',color:'#6B6B6B'}}> Mac ID : 5a-c2-15-00-00-00</h4>
                      <h1 style={{marginTop:'95px',marginLeft:'-15px',fontSize:'80px',color:'#60C1E4',marginBottom:'58px'}}>110
                     </h1>
                      

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
