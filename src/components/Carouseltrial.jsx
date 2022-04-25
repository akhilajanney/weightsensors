import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import style from './style.css'
import Home from './Home';

export default class Carouseltrial extends Component {
  render() {
    return (
      <div>
              <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay width ='1300px'>
                <div>
                   <Home/>
                </div>
                <div>
                    image2
                </div>
                <div>
                    image3
                </div>
            </Carousel>
        </div>
      </div>
    )
  }
}
