import React, {Component} from 'react'
import styling from './styling.css'
import Livedata from './Livedata';
import Weeklywastage from './Weeklywastage';
import MonthlyWastage from './Monthlywastage'
import $ from 'jquery'
import Dailywastage from './Dailywastage';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import axios from 'axios';

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [],
           
        };
    }
    componentDidMount(){
        console.log('livedata======');
         this.interval = setInterval(() => {
         axios({method:'POST',url:'/api/sensor/report',data:{"key":"live"}})
         .then((response)=>{
 
           let data=response.data;
 
           this.total_waste=data.reading;
           console.log(this.total_waste);
 
     if(this.total_waste>180.00){
         $('#maindiv').css('background','#ff8080')
         $('#subdiv').css('background','#ff8080')
     }
 
 
         })
         .catch((error)=>{
           console.log(error);
         })
       },1000)
       
       } 
       componentWillUnmount() {
         clearInterval(this.interval);
       }


    render() {
        const {series, pathLink} = this.state;

        return (

            <>
                <div id='maindiv'style={
                    {
                        width: '1024px',
                        height: '600px',
                        background: '#E1F0FD',
                        marginLeft: '160px',
                        marginTop: '40px'
                    }
                }>
                    <div style={
                        {padding: '25px'}
                    }>
                        <img src="/images/vacuslogo.png" alt=""
                            style={
                                {width: '130px'}
                            }/>
                        <img src="/images/astralogo.png" alt=""
                            style={
                                {
                                    width: '160px',
                                    float: 'right',
                                    marginTop: '-19px'
                                }
                            }/>
                    </div>

                    <Carousel 
                    // interval={5000}
                        infiniteLoop
                        useKeyboardArrows
                        // autoPlay
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        width='1000px'>
                        <div className='subdiv'>
                            <Livedata/>
                        </div>
                        <div className='subdiv'>
                            <Dailywastage/>
                        </div>
                        <div className='subdiv'>
                            {/* <Weeklywastage/> */}
                        </div>
                        <div className='subdiv'>
                            {/* <MonthlyWastage/> */}
                        </div>

                    </Carousel>
                </div>

            </>
        )
    }
}
