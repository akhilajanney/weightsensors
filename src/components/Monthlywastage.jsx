import React, { Component } from 'react'
import ApexCharts from 'react-apexcharts';
import './style.css';
import axios from 'axios';
import $ from 'jquery'



export default class Monthlywastage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:false,
      message:'',
      series: [],
      categorie: [],
    };

  }
  componentDidMount() {

    this.interval = setInterval(() => {
      axios({method:'POST',url:'/api/sensor/report',data:{"key":"monthly"}})
      .then((response)=>{
      
        let data=response.data.data
        // console.log('=====monthlydata',response.data);
        this.wastage=[]
        this.time=[]
        this.monthlywaste=response.data.weight.toFixed(2)
        for(let i=0;i<data.length; i++){
          this.weight=data[i].wastage.toFixed(2);
          this.wastage.push(this.weight)
          this.lastseen=data[i].time
        this.time.push(this.lastseen)
        }
        this.setState({series:this.wastage , categorie:this.time})  
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
    const { series, categorie,message} = this.state;
   
    return (
      <>
      <div style={{marginBottom:'30px'}}>
      
          <span style={{fontSize:'30px',fontWeight:500,color:'#00629B'}}>Monthly Data</span> <br />
        <b><span id='totalwastage' style={{marginTop:'0px',marginLeft:'620px',color:'#6B6B6B'}}>Total Wastage :{ this.monthlywaste}kg</span></b> 
        
        </div>
        <p>{message}</p>
        <div style={{ marginTop: "10px" }}>
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
                  }, yaxis: {
                    labels: {
                      formatter: function (value) {
                        return value.toFixed(2) + "g";
                      }
                    },
                  },
                  legend: {
                    position: 'top',
                    offsetY: 0
                  },
                }}

                series={[
                  {
                    name: 'wastage',
                    data: series,
                  }]}
                type="bar" height={350} />) : (
                <p />
              )
          }
        </div>
      </>
    )
  }
}
