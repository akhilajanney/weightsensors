import React, { Component } from 'react'
import styling from './styling.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Chart from 'react-apexcharts'
import { Carousel } from 'react-responsive-carousel';

export default class Homepage extends Component {
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
}
  render() {
    const { series } = this.state;
    return (

      <>
        <div style={{width:'1024px',height:'600px',background:'#E1F0FD',marginLeft:'160px',marginTop:'40px'}}>
          <div style={{padding:'25px'}}>
          <img src="/images/vacuslogo.png" alt="" style={{width:'130px'}}/>
          <img src="/images/astralogo.png" alt="" style={{width:'160px',float:'right',marginTop:'-19px'}}/>
          </div>

          <div style={{display:'flex',marginLeft:'120px',marginTop:'20px'}}>
            <span className='headers'>Live Data</span>
            <span className='headers'>Daily Data</span>
            <span className='headers'>Weekly Data</span>
            <span className='headers'>Monthly Data</span>
          </div>


          <div className='subdiv'>
          {/* <Carousel infiniteLoop  autoPlay> */}
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
                                            offsetX:30
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
                              <span style={{color:'#013E61'}}>There is enough food produced in the world to feed everyone.</span>
                      </div>
                </div>
                {/* <div>
                    image2
                </div>
                <div>
                    image3
                </div> */}
            {/* </Carousel> */}
          </div>
        </div>
      </>
    )
  }
}
