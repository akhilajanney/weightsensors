import React, { Component } from 'react'
import ApexCharts from 'react-apexcharts';
import './style.css';
import axios from 'axios';
import $ from 'jquery'



export default class Dailywastage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:'',
      message:'',
      series: [],
      options: {
        chart: {
          id: 'area-datetime',
          type: 'area',
          height: 330,
          zoom: {
            autoScaleYaxis: true
          }
        },
        stroke: {
          width: 2,
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
        xaxis: {
          type: 'datetime',
          tickAmount: 6,
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value.toFixed(2) + "g";
            }
          },
        },
        tooltip: {
          x: {
            format: 'yyyy-mm-dd HH:mm:ss'
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
          }
        },
      },
    };

  }
  componentDidMount() {
   
    this.interval = setInterval(() => {
      // let val = [100, 200, 300, 230, 450, 302,100, 200, 300], cat = [1,2,3,4,5,6,7,8,9];
      // this.setState({ series: val, categorie: cat });
      axios({method:'POST',url:'/api/sensor/report',data:{"key":"daily"}})
      .then((response)=>{
        console.log('=====dailydata',response.data);
        let wastage=response.data.sum.toFixed(2)
       
        console.log(wastage,'daily');
        $('#wastage').text('Total Wastage : ' + wastage +'kg')
        let datas=response.data.data
        console.log('++++++',datas);
        if (datas.length !== 0) {
          let value1 = []; 
          for (let i = 0; i < datas.length; i++) {
                  let tempData = [];
                  this.time = datas[i].timestamp.substring(0, 19).replace("T", " ");
                  var date = new Date(this.time);
                  var milliseconds = date.getTime();
                  tempData.push(milliseconds);
                  tempData.push(datas[i].scaledweight)
                   value1.push(tempData);     
              
          }
          
         
          this.setState({
              series: [
                  {
                      name: 'Temp',
                      data: value1,
                  },
              ]
          })
      }
      })
      .catch((error)=>{
        console.log(error);
        if(error.status===400){
          this.setState({error:true,message:'No Data Found '})
        }
      })
      
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { series,message } = this.state;

    return (
      <>
      <div style={{marginBottom:'30px'}}>
          <span style={{fontSize:'30px',fontWeight:500,color:'#00629B'}}>Daily Data</span><br />
          <b><span id='wastage'style={{marginTop:'0px',marginLeft:'620px',color:'#6B6B6B'}}> </span></b> 
        </div>
        <p>{message}</p>
      
        <div style={{ marginTop: "10px" }}>
        {
                series.length > 0 ? (
                    <div style={
                        {marginTop: "30px"}
                    }>
                        <div>
                            <div id="chart">
                                <div id="chart-timeline">
                                    <ApexCharts options={
                                            this.state.options
                                        }
                                        series={series}
                                        type="area"
                                        height={330}/>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p/>)
            } 
        </div>
      </>
    )
  }
}
