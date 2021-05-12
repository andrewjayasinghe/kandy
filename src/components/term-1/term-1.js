import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import * as ReactBootStrap from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import "./term-1.css"
import us from './../../assets/us.jpg'; // Tell webpack this JS file uses this image
import us2 from './../../assets/us2.jpg'; // Tell webpack this JS file uses this image
import us3 from './../../assets/us3.jpg'; 
import us4 from './../../assets/us4.jpg'; 
import us5 from './../../assets/us5.jpg'; 
import us6 from './../../assets/us6.jpg'; 
import us7 from './../../assets/us7.jpg'; 
import us8 from './../../assets/us8.jpg'; 
import us9 from './../../assets/us9.jpg'; 
import us10 from './../../assets/us10.jpg'; 
import us11 from './../../assets/us11.jpg'; 
import us12 from './../../assets/us12.jpg'; 

import wink from './../../assets/wink.png'; // Tell webpack this JS file uses this image

class Term_1 extends Component {
    state = {
        redirect: false
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/Term3' />
        }
      }

    render() {

        
        return (
            <>
                <ReactBootStrap.Container style={{ marginTop: "20px", marginBottom:"100px" }}>

                    <ReactBootStrap.Row className="size">
                    <ScrollAnimation animateIn='zoomInDown'
                            animateOut='animate__zoomOutDown' duration="2" offset={5} >

                        <div id="tit">
                                <div style={{display:"inline-block", marginRight:"12px"}}>
                                <ReactBootStrap.Spinner animation="grow" variant="danger" style={{width: "30px", height:"35px" }}/></div>
                                <div style={{ display: "inline-block" }}>
                                      <p id="anum"> WELCOME!</p>
                                </div> 
                               
                                <div style={{display:"inline-block"}}>
                                <ReactBootStrap.Spinner animation="grow" variant="warning" style={{ width: "30px", height:"35px" }}/></div>

                                <p id="desc">Welcome to our website! We made this as a one stop shop for all things about 
                                us and our wedding. Due to the pandemic and related travel restrictions, we are having our wedding online
                                so we decided to make things a little fun by creating this website.
                    
                        </p>
                            </div>
                        </ScrollAnimation>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <ScrollAnimation animateIn='animate__backInLeft'
                            animateOut='animate__backOutRight' duration="2" offset={5} >  
                        <div id="al6">
                               
                                <div id="test">
                            
<iframe src="https://player.vimeo.com/video/547309241" className="video" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>


                            </div>  </div>
                            </ScrollAnimation>
                    </ReactBootStrap.Row>
                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
                        <ScrollAnimation animateIn='animate__backInRight'
                            animateOut='animate__backOutLeft' duration="2" offset={5}>  
                        <div id="al2">
                           
                                <p id="anum" ><span id="anum1" >A few Details</span></p>
                                {/* <p id="well" className="title">Database Systems</p> */}
                                <div id="test">
                                <p id="desc"  >
            <div className="title"> </div>
                
               
                 

                  <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="2"  offset={50}>
                        <li id="item">We are using Amazon Canada to set up our wedding registry.</li> </ScrollAnimation>
                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="2" delay={1000}  offset={50}>
                        <li  id="item"> If you decide to go for a donation instead and are from the US, we have 3 options to choose from.
                        Click on the 
                        {this.renderRedirect()}
                        <button class="button" onClick={this.setRedirect}>Jar</button> Button to view these options. </li></ScrollAnimation>

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="3" delay={1000}  offset={50}>
                        <li  id="item"> If you are from outside the US and would like to make a donation, contact Andrew. 
                        </li>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                        <li  id="item"> We have also created a simple form that you can use to leave us a message, or advice or 
                        anything really that you would like us to know and the contents of the form can only be seen by us
                        so dont be afraid to be honest  <img src={wink} alt="us" className="wink"/>
                        </li></ScrollAnimation>

{/*                         
                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                        <li  id="item">
                        
                        </li></ScrollAnimation> */}

                        </ul>

</p>

                            </div>
                        </div>
                        </ScrollAnimation>
                    </ReactBootStrap.Row>


                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
                    <ScrollAnimation animateIn='animate__backInRight'
                            animateOut='animate__backOutLeft' duration="2" offset={5}>   
                        <div id="al3">
                            
                                <p id="anum" ><span id="anum1" >About Andrew</span></p>
                                {/* <p id="well" className="title">Scripting using Python</p> */}
                                <div id="test">
                                <p id="desc"  className="title">Hey everyone I am Andrew! To those that don't know me,
                                I am Karla's husband to be! Since i haven't had the opportunity to meet any of you in person, I thought 
                                I'd introduce myself. I was born in Sri Lanka which is a tiny island just off the tip of India (but im 
                                not Indian) <img src={wink} alt="us" className="wink"/><br></br>
                                Theres 4 of us in my family which includes my younger brother.  
 </p>

                            </div>
                        </div>
                        </ScrollAnimation>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
                    <ScrollAnimation animateIn='animate__backInLeft'
                            animateOut='animate__backOutRight' duration="2" offset={5}>   
                        <div id="al4">
                            
                        <p id="anum" ><span id="anum1" >About Karla</span></p>
                                {/* <p id="well" className="title">Business Communications 1</p> */}
                                <div id="test">
                                <p id="desc"  className="title">
                                I was born in Washington State in February 1999. I have two sisters (one is 4 years 
                                older and the other is 17 months younger) and my two wonderful parents. I grew up in 
                                Washington until I was about 14 years old and then we moved to Oregon. After I graduated high 
                                school I left on a mission for my church to Colorado Springs. It was one of the most wonderful 
                                experiences of my life. I got to meet amazing people and had amazing experiences. After getting
                                 home I went to beauty school. It was so fun! I've always loved doing hair so being able to learn 
                                 about it was so spectacular! And now after graduating and getting my license I'm so excited to get
                                  paid to do something I love every single day! Meeting Andrew has changed my life. He is my best friend and I'm so excited to keep him with me, by my side for eternity.
 </p> 

                            </div>
                        </div>
                        </ScrollAnimation>
                    </ReactBootStrap.Row>

                  


                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
                    <ScrollAnimation animateIn='animate__backInRight'
                            animateOut='animate__backOutLeft' duration="2" offset={5}> 
                        <div id="al5">
                        <p id="anum" ><span id="anum1" >About Us</span></p>
                                {/* <p id="well" className="title">Technical Mathematics for IT</p> */}
                                <div id="test">
                                <div className="ourcenter">

                        <ScrollAnimation animateIn='fadeIn'
                        animateOut='fadeOut' duration="4" delay={1000} offset={50}> 
                        {/* <div className="ourcenter">
                        <img src={us} alt="us" className="ourpic"/></div> */}
                        <ReactBootStrap.Carousel style={{margin:"auto"}} className="ourpic" >
                            <ReactBootStrap.Carousel.Item interval={3000}>
                                <div>
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={us}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={3000}>
                                <div>
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={us2}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={3000}>
                                <div >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={us3}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={3000}>
                                <div >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={us4}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={3000}>
                                <div >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={us5}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={3000}>
                                <div >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={us6}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={3000}>
                                <div >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={us7}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item><ReactBootStrap.Carousel.Item interval={3000}>
                                <div >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={us11}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item><ReactBootStrap.Carousel.Item interval={3000}>
                                <div >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={us12}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item><ReactBootStrap.Carousel.Item interval={3000}>
                                <div >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={us10}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item><ReactBootStrap.Carousel.Item interval={3000}>
                                <div >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={us8}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item><ReactBootStrap.Carousel.Item interval={3000}>
                                <div >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={us9}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            </ReactBootStrap.Carousel>

                        
                    
                        
                        </ScrollAnimation>                            </div>

                                   
                                <p id="desc"  className="title">
                                <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >

<ScrollAnimation animateIn='zoomInDown'
animateOut='flipOutX' duration="2"  offset={50}>
<li id="item">Our journey began on the 18th of May, 2020. It all 
                                started on Mutual (a dating app). We started by 
                                texting and soon after we stared video chatting and we've
                                 been video chatting everyday since. Since all we can do is watch shows and talk we know each other so well.
                                  The borders are closed because of covid with very little exemptions, so we kept talking online. Karla would drive 
                                  5 hours one way every weekend to a park in Washington on the border of Canada to see Andrew. We would spend all day 
                                  laying and talking wishing and thinking of what life will be like once we could finally be together. Later as fall and 
                                  winter came along more restrictions were added at the park and because Andrew is not a citizen of Canada, he wasn't allowed
                                   to cross over into the park anymore. This meant that we could only see each other across a ditch that separated the two countries, without being able to hug or kiss each other. 
 </li> </ScrollAnimation>
<ScrollAnimation animateIn='zoomInDown'
animateOut='flipOutX' duration="2" delay={1000}  offset={50}>
<li  id="item">Time passed and we hoped that the borders would open 
but the wait kept getting longer and longer. This was when we decided to see each other at the park once again so that we could at least see each other in person, even though it would be across a ditch. It was a snowy freezing valantine's day and we decided to meet early to avoid the crowds that would gather. Karla drove up very slowly because of the snow and ice on the roads turning a normal 5 hour drive into an 8 hour drive. Andrew took a bus and then had to walk 6 miles in the snow and cold to get to the park where we finally got to see each other. Flowers and the ring in hand he got down on one knee and proposed. We are
 so excited to finally start our lives together in Canada and be able to 
 spend more than just a few hours together at a time. </li></ScrollAnimation>
                                
 </ul>
 </p>

                            </div>  </div>
                            </ScrollAnimation>
                    </ReactBootStrap.Row>

                 

                </ReactBootStrap.Container> 



            </>

        )

    }
}

export default Term_1