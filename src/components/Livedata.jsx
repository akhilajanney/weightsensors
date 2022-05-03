import React, { Component } from 'react'
import Chart from 'react-apexcharts'
import styling from './styling.css'
import axios from 'axios';
import $ from 'jquery'
import { Carousel } from 'react-responsive-carousel';
export default class Livedata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],  
            };
    }
      componentDidMount(){
       console.log('livedata======');
        // this.interval = setInterval(() => {
        axios({method:'POST',url:'/api/sensor/report',data:{"key":"live"}})
        .then((response)=>{
          // console.log('=====livedata',response.data);
          // let data=response.data.data;
         
          // this.value=response.data.sum;
          // this.wastage=(this.value).toFixed(2)
          // const item = data[data.length - 1];
          // this.lastseen=item.timestamp.substr(0,10)+ " " +item.timestamp.substr(11,8)

          // if(item.weightdifference<=1){
          //     this.currentval = item.weightdifference*1000 +'g'
          //     console.log('g')
          // }
          // else{
          //   this.currentval = item.weightdifference.toString()+'kg'
          //   console.log('kg',this.currentval)
          // }
          // this.weight=item.scaledweight;
          // $('#lastseen').text('Last Seen : '+this.lastseen)

          // this.setState({series:[
          //   this.weight,(200-this.weight)
          // ]})

          let data=response.data;
          this.battery=data.battery;
          console.log(this.battery);
          $('#battery').text('Battery: '+this.battery)
     
          this.current_waste=data.current_wastage;
          // console.log(this.current_waste);

          this.total_waste=data.totalweight;
          // console.log(this.total_waste);

          this.waste=data.totalweight.toFixed(2);
          if(this.waste<1){
            this.waste=data.totalweight*1000 +'g'
          }else{
            this.waste=data.totalweight +'kg'
          }

          this.lastseen=data.timestamp.substr(0,10)+ " " +data.timestamp.substr(11,8)
          // console.log(this.lastseen);
          $('#lastseen').text('Last Seen : '+this.lastseen)

          this.setState({series:[
            this.total_waste,(200-this.total_waste)
             ]})

        })
        .catch((error)=>{
          console.log(error);
        })

      // },1000)
      
      } 
  render() {
    const{series}=this.state;
 
    return (
    <>
    <div style={{marginBottom:'30px'}}>
          <span style={{fontSize:'30px',fontWeight:500,color:'#00629B'}}>Live Data</span>
        </div>
      <div style={{display:'flex'}}>
        
            <div style={{marginTop:'25px'}}>
              {series.length>0?
                
              <Chart series={series}
              
                                    options={{
                                        labels: [
                                            'wastage','Available'
                                        ],
                                        legend: {  
                                            show:false,
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
                                                        show: true,
                                                        offsetY: -6,
                                                      },
                                                        total: {
                                                            show: true,
                                                            label: '',
                                                            formatter: () => this.waste
                                                        },

                                                    }
                                                }
                                            }
                                        },
                                    }}
                                    
                                    type="donut"
                                    width="400"/>
                                     :<p></p>} 
                                     <span >Wastage</span>
                                   
                </div>
                <div style={{width:'425px'}}>
                      
                      <h4 id='lastseen'style={{marginTop:'0px',marginLeft:'100px',color:'#6B6B6B',marginBottom:'3px'}}> Last Seen :</h4>
                      <h4 id='battery'style={{marginTop:'0px',marginLeft:'91px',color:'#6B6B6B'}}> </h4>

                      <h1 style={{marginTop:'56px',marginLeft:'-15px',fontSize:'70px',color:'#60C1E4',marginBottom:'58px'}}>
                        {this.current_waste}
                     </h1>
                      

                      <div className='content'>
                              <span style={{textAlign:'center',color:'#013E61',fontWeight:500}}>Food Fact</span><br />
                              <Carousel  useKeyboardArrows
                                          autoPlay
                                          interval={6000}
                                          infiniteLoop
                                          showIndicators={false}
                                          showArrows={false}
                                          showStatus={false}
                                          showThumbs={false}>
                              <div>
                              <span style={{color:'#013E61',marginTop:'5px'}}>There is enough food produced in the world to feed everyone.</span>
                              </div>
                              <div>
                              <span style={{color:'#013E61',marginTop:'3px'}}>
                              If one quarter of the food currently lost or wasted could be saved, 
                              it would be enough to feed 870 million hungry people.</span>
                              </div>
                              <div>
                              <span style={{color:'#013E61',marginTop:'3px'}}>
                              Wasting food is worse than total emissions from flying (1.9%), plastic production (3.8%)
                               and oil extraction (3.8%).</span>
                              </div>
                              <div>
                              <span style={{color:'#013E61',marginTop:'3px'}}>One in nine people do not have enough food to eat,
                               that’s 793 million people who are undernourished.</span>
                              </div>
                              </Carousel>
                             
                      </div>
                </div>
                </div>
                </>
    )
  }
}
