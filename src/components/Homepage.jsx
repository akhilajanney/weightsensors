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
            currval: [],
            count: 0,
            pathLink: "1"
        };
    }
    componentDidMount() {
        // console.log('didmount');

        // axios({
        //     method: 'POST',
        //     url: '/api/sensor/report',
        //     data: {
        //         "key": "daily"
        //     }
        // }).then((response) => {
        //     this.interval = setInterval(() => {
        //         let data = response.data.data;
        //         const item = data[data.length - 1];
        //         this.lastseen = item.timestamp.substr(0, 10) + " " + item.timestamp.substr(11, 8)

        //         this.weight = item.weight;
        //         this.setState({currval: this.weight})
        //         this.funt()
        //     }, 5000)
        // })

    }


    render() {
        const {series, pathLink} = this.state;

        return (

            <>
                <div style={
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
                    interval={5000}
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
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
                            <Weeklywastage/>
                        </div>
                        <div className='subdiv'>
                            <MonthlyWastage/>
                        </div>

                    </Carousel>
                </div>

            </>
        )
    }
}
