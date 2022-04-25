import React, { Component } from 'react'
import styling from './styling.css'
import Livedata from './Livedata';
// import Dailywastage from './Dailywastage';
import Weeklywastage from './Weeklywastage';
import MonthlyWastage from './Monthlywastage'
import $ from 'jquery'
import FoodHome from './FoodHome';
import Dailywastage from './Dailywastage';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export function  sidelinkClicked (id) {
  $('.headers').removeAttr("style");
  $("#" + id).css({
    "color": "#00629B",
    "background": "linear-gradient(to right,  #d7e1f4 , #ebf0fa)",
    "border-left": "3px solid #00629B",
    "font-weight": "bold",
});


}
export default class Homepage extends Component {
  // List = [false, false,false,false];
  constructor(props) {
    super(props);
    this.state = {
        series: [],  
        };
}
componentDidMount(){
  // sidelinkClicked('option0')
  
  // this.List[0] = true;
  // $("#opt0").css({"background": "#00629bed", "color": "white" });
}

// optionChange = (e) => {
//   $("#opt0").css({ "background": "none", "color": "#000" });
//   $("#opt1").css({"background": "none", "color":"#000"});
//   $("#opt2").css({"background": "none", "color":"#000"});
//   $("#opt3").css({"background": "none", "color":"#000"});
//   this.setState({ flag: true })
//   this.List = [false, false,false]
//   let id = parseInt(e.target.id.substring(3))
//   $("#" + e.target.id).css({ "background": "#00629bed", "color": "white" });
//   this.List[id] = true;
// }

  render() {
    const { series } = this.state;
    return (

      <>
        <div style={{width:'1024px',height:'600px',background:'#E1F0FD',marginLeft:'160px',marginTop:'40px'}}>
          <div style={{padding:'25px'}}>
          <img src="/images/vacuslogo.png" alt="" style={{width:'130px'}}/>
          <img src="/images/astralogo.png" alt="" style={{width:'160px',float:'right',marginTop:'-19px'}}/>
          </div>

          <div  onClick={this.optionChange} style={{display:'flex',marginLeft:'120px',marginTop:'20px'}}>
            <span  id="option0" className='headers'  onClick={() => sidelinkClicked("option0")}>Live Data</span>
            <span  id="option1" className='headers' onClick={() => sidelinkClicked("option1")}>Daily Data</span>
            <span  id="option2" className='headers'  onClick={() => sidelinkClicked("option2")}>Weekly Data</span>
            <span  id="option3" className='headers'  onClick={() => sidelinkClicked("option3")}>Monthly Data</span>
          </div>


          <Carousel interval={10000} infiniteLoop useKeyboardArrows   autoPlay width ='1300px'>
          
            {/* <div className='subdiv'>
            {this.List[0] && (< Livedata/>)}
            {this.List[1] && (< Dailywastage/>)}
            {this.List[2] && (< Weeklywastage/>)}
            {this.List[3] && (< MonthlyWastage/>)}   
               </div>  */}

          <div className='subdiv'>
                 < Livedata/>
            </div> 
            <div className='subdiv'>
            < Dailywastage/>
            </div>
            <div className='subdiv' >
                 < Weeklywastage/>
            </div> 
            <div className='subdiv'>
            < MonthlyWastage/>
            </div>
           
          
              
              
            </Carousel>
   
            </div>
      </>
    )
  }
}
