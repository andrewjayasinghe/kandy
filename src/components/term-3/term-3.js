import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import "./term-3.css"
import file from "./../../assets/COVID.pdf" 

class Term_3 extends Component {

    render() {

        return (
         
            <>
          
          <ReactBootStrap.Container style={{ marginTop: "20px" }}>

<ReactBootStrap.Row className="size">
<ScrollAnimation animateIn='animate__lightSpeedInLeft'
        animateOut='animate__lightSpeedOutRight' duration="2" offset={5} >

    <div id="tit13">
            
                  <p id="anum"> Thank you for your generosity</p>
            <p id="desc">This page includes all of the information needed for a donation to our 
            Jar. There are 3 options to decide from for you're convenience!!
    </p>
        </div>
    </ScrollAnimation>
</ReactBootStrap.Row>


<ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
    <ScrollAnimation animateIn='bounceIn'
        animateOut='bounceOut' duration="4" offset={5}>  
    <div id="at31">
       
            <p id="anum" ><a href="https://www.paypal.com/us/home" target="_blank" id="anum1" >1. PayPal</a></p>
            <p id="well" className="title">Here are the details</p>
            <div id="test">
            
            <p id="desc"  >
            <div className="title"> 
            If you have a PayPal account, you can easily send us a donation.</div>
                
            <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="2"  offset={50}>
                        <li id="item">Sign in to your PayPal Account</li> </ScrollAnimation>
                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="2" delay={1000}  offset={50}>
                        <li  id="item"> Click on the Send icon
                        </li></ScrollAnimation>

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="3" delay={1000}  offset={50}>
                        <li  id="item">Type in the email address <span id="a2">heshronferdi@gmail.com</span> in the search box and click next.</li>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                        <li  id="item">Enter a desired amount and click send</li></ScrollAnimation>
                        
                        </ul>

</p>

        </div>
    </div>
    </ScrollAnimation>
</ReactBootStrap.Row>


<ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
    <ScrollAnimation animateIn='bounceIn'
        animateOut='bounceOut' duration="4" offset={5}>  
    <div id="at32">
       
            <p id="anum" ><a href="" target="_blank" id="anum1" >2. Bank Transfer</a></p>
            <p id="well" className="title">Here are the details</p>
            <div id="test">
            
            <p id="desc"  >
            <div className="title"> </div>
                
               
                 

                  <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="2"  offset={50}>
                        <li id="item">We are using TransferWise to receive US dollar payments. You can send money to these details from any bank in the US.</li> </ScrollAnimation>
                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="2" delay={1000}  offset={50}>
                        <li  id="item"> Account holder: <span id="a2">Andrew Jayasinghe</span>   </li></ScrollAnimation>

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="3" delay={1000}  offset={50}>
                        <li  id="item">
                        Routing Number: <span id="a2">084-00-9519</span>
                        </li>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                        <li  id="item">
                        Account Number: <span id="a2">96-000-000-00-535705</span></li></ScrollAnimation>
                        
                        </ul>

</p>

        </div>
    </div>
    </ScrollAnimation>
</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>

<ScrollAnimation animateIn='bounceIn'
animateOut='bounceOut' duration="2" offset={5}>   
<div id="alterm31">

<p id="anum" ><a href="https://www.bcit.ca/outlines/20203034750/" target="blank" id="anum1" >3. Mailing Address</a></p>
<p id="well" className="title">Here are the details</p>
<div id="test">
<p id="desc" className="title">In this course I learned how to install, create databases and 
perform basic administration. I learned how to configure
 the database to support different applications, perform tasks such as create 
 users and schema objects, apply constraints, setup access control, assign memory,
  define storage structures and manipulate data. Since database administration does
   not end after the database is created, I also learned the importance of 
   backup and recovery strategy. A good understanding of the DBMS architecture, 
   performance monitoring and concurrency control are essential to ensure the
    database operates smoothly to support transaction processing.
</p>

</div>
</div>

</ScrollAnimation>
</ReactBootStrap.Row>



</ReactBootStrap.Container> 


        </>

  

        )

    }
}

export default Term_3