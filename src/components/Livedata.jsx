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
          error:false,
          message:'',
            series: [],  
            series1:[]
            };
    }
      componentDidMount(){
       console.log('livedata======');
        this.interval = setInterval(() => {
        axios({method:'POST',url:'/api/sensor/report',data:{"key":"live"}})
        .then((response)=>{

          let data=response.data;
          console.log(response.data,'=======');
          this.battery=data.battery;
         console.log(this.battery,'------');
          $('#battery').text('Battery: '+this.battery)
          // let a=data.current_wastage;
          // console.log(a,'---------------');
          
          this.current_waste=data.current_wastage.toFixed(3);
           console.log( this.current_waste,'---------------');
           if(this.current_waste<1){
            this.current_waste=this.current_waste*1000+'g'
          }else{
            this.current_waste=this.current_waste+'kg'
          }

          $('#currentwaste').text(this.current_waste)

          this.total_waste=data.reading;

          this.waste=data.reading.toFixed(3);
          console.log(this.waste,'formatter')
          if(this.waste<1){
            this.waste= this.waste*1000 +'g'
          }else{
            this.waste= this.waste +'kg'
          }
          
          this.lastseen=data.timestamp.substr(0,10)+ " " +data.timestamp.substr(11,8)
          // this.lastseen=data.timestamp
          console.log(this.lastseen,'************');
          $('#lastseen').text('Last Seen : '+this.lastseen)

          this.setState({series:[
            this.total_waste,(200-this.total_waste)
             ]})

             this.setState({series1:[0,200]})

        })
        .catch((error)=>{
          console.log(error);
          if(error.status===400){
            this.setState({error:true,message:'No Data Found '})
          }
        })

      },1000)
      
      } 
      componentWillUnmount() {
        clearInterval(this.interval);
      }
  render() {
    const{series,series1,message}=this.state;
 
    return (
    <>
    <div style={{marginBottom:'30px'}}>
          <span style={{fontSize:'30px',fontWeight:500,color:'#00629B'}}>Live Data</span>
        </div>

      <div style={{display:'flex'}}>
        
            <div style={{marginTop:'25px'}}>
              {series.length >0 ? (
              <Chart series={series}
                                    options={{
                                        labels: [
                                            'wastage','Max Limit'
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
                                            '#ff8080', '#C3F4F4'
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
                                                            formatter: () =>this.waste
                                                        },
                                                        tooltip: {
                                                          enabled: false,
                                                        }

                                                    }
                                                }
                                            }
                                        },
                                    }}
                                    
                                    type="donut"
                                    width="400"/>)
                                     : 
                                     (
                                     <Chart series={[0,200]}
              
                                     options={{
                                         labels: [
                                             'wastage','Max Limit'
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
                                             '#ff8080', '#C3F4F4'
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
                                                             formatter: () => '0'
                                                         },
 
                                                     }
                                                 }
                                             }
                                         },
                                     }}
                                     
                                     type="donut"
                                     width="400"/>
                                     )
                                    
                                   } 
                                     <div style={{display:'flex',marginLeft:"160px"}}>
                                     <div style={{width:'10px',height:'10px',borderRadius:'50%',background:'#ff8080'}}></div>
                                     <p style={{marginTop:'-7px',marginLeft:'3px'}} >Wastage</p>
                                     </div>
                                 
                                   
                </div>
                <div style={{width:'425px'}}>
                  <div style={{display:'flex',marginLeft:'100px'}}>
                      <i className="fal fa-watch" style={{fontSize:'20px',color:'#6B6B6B',marginTop:'2px',marginRight:'8px'}}></i>
                      <h4 id='lastseen'style={{marginTop:'0px',color:'#6B6B6B',marginBottom:'3px'}}>
                      Last Seen :
                      </h4>
                      </div>
                    
                    <div style={{display:'flex',marginLeft:'100px',color:'#6B6B6B',marginTop:'5px'}}>
                    <i className="fal fa-battery-half"  style={{marginTop:'4px',marginRight:'8px'}}></i>
                    <h4 id='battery'style={{marginTop:'0px',color:'#6B6B6B'}}>Battery :</h4>
                    </div>
                      

                       <b> <p style={{fontSize:'18px',color:' #ff8080',marginBottom:'0px',marginTop:"53px",marginTop:'18px'}}>Current Wastage</p></b>
                      <h1 className="zoom-in-zoom-out" id='currentwaste'
                      style={{marginTop:'0px',marginLeft:'-15px',fontSize:'70px',color:'#ff8080',marginBottom:'58px'}}>
                        {/* {this.current_waste} */}
                        0g
                     </h1>
                      

                      <div className='content'>
                              <span style={{textAlign:'center',color:'#013E61',fontWeight:500}}>FACTS</span><br />
                              <Carousel  useKeyboardArrows
                                          autoPlay
                                          interval={6000}
                                          infiniteLoop
                                          showIndicators={false}
                                          showArrows={false}
                                          showStatus={false}
                                          showThumbs={false}>
                              <div>
                              <span style={{color:'#013E61',marginTop:'5px',fontWeight:500}}>Today's WASTAGE Is Tomorrow's SHORTAGE</span>
                              </div>
                              <div>
                              <span style={{color:'#013E61',marginTop:'3px',fontWeight:500}}>
                              A Nation Could Eat Off The Food We Waste.</span>
                              </div>
                              <div>
                              <span style={{color:'#013E61',marginTop:'3px',fontWeight:500}}>
                              Get Only The Amount You Need.</span>
                              </div>
                              <div>
                              <span style={{color:'#013E61',marginTop:'3px',fontWeight:500}}>Respect for food is a respect for life, 
                              for who we are and what we do
                              </span>
                              </div>
                              <div>
                              <span style={{color:'#013E61',marginTop:'3px',fontWeight:500}}>
                              You paid good money for that… why throw it away?
                             </span>
                              </div>
                              <div>
                              <span style={{color:'#013E61',marginTop:'3px',fontWeight:500}}>
                              Get only the amount you need.
                             </span>
                              </div>
                              
                              </Carousel>
                             
                      </div>
                </div>
                </div>
                </>
    )
  }
}
