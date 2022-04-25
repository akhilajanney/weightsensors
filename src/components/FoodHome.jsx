import React, { Component } from 'react'
import ApexCharts from 'react-apexcharts';
import './style.css';

export default class FoodHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      categorie: [],
    };

  }
  componentDidMount() {
    // this.interval = setInterval(() => {
    //   let val = [], cat = [];
    //   this.setState({ series: [], categorie: [] });
    //   console.log("-------------->");
    //   for (let i = 0; i < 10; i++) {
    //     let dd = Math.floor(Math.random() * (100 - 50)) + 50
    //     val.push(dd);
    //     cat.push(i + 1);
    //   }
    //   this.setState({ series: val, categorie: cat });
    // }, 3000);

    this.interval = setTimeout(() => {
      let val = [100, 200, 300, 230, 450, 302], cat = [1,2,3,4,5,6];
      this.setState({ series: val, categorie: cat });
    }, 550);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { series, categorie } = this.state;
    console.log("series======>", series);
    console.log("categorie======>", categorie);
    return (
      <>
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
