import React, { Component } from 'react'
import ApexCharts from 'react-apexcharts';
import './style.css';
import axios from 'axios';
import $ from 'jquery'

export default class Weeklywastage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      categorie: [],
    };

  }
  componentDidMount() {

    // this.interval = setTimeout(() => {
    //   let val = [100, 200, 300, 230, 450, 302,500,620,50,58,65,250], cat = [1,2,3,4,5,6,7,8,9,10,11,12];
    //   this.setState({ series: val, categorie: cat });
    // }, 550);
    // console.log('weekly data');
    axios({method:'POST',url:'/api/sensor/report',data:{"key":"weekly"}})
      .then((response)=>{
      
        let data=response.data.data
        // console.log('=====weeklydata');
        console.log('=====weeklydata',response.data);
        let waste=response.data.weight.toFixed(2)
        $('#waste').text('Total Wastage : ' + waste +'kg')
        this.wastage=[]
        this.time=[]
        for(let i=0;i<data.length; i++){
          this.weight=data[i].wastage.toFixed(2);
          this.wastage.push(this.weight)
          this.lastseen=data[i].time
        this.time.push(this.lastseen)
        }
        this.setState({series:this.wastage , categorie:this.time})
       
      })
  }

  componentWillUnmount() {
    
    clearInterval(this.interval);
  }
  render() {
    const { series, categorie } = this.state;
    return (
      <>
      <div style={{marginBottom:'30px'}}>
          <span style={{fontSize:'30px',fontWeight:500,color:'#00629B'}}>Weekly Data</span><br />
          <b><span id='waste'style={{marginTop:'0px',marginLeft:'610px',color:'#6B6B6B'}}> </span></b> 
        </div>
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
                  },
                  yaxis: {
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
