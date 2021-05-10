import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import * as ReactBootStrap from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import "./term-1.css"
import us from './../../assets/us.jpg'; // Tell webpack this JS file uses this image
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
                <ReactBootStrap.Container style={{ marginTop: "20px" }}>

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
                                us and our wedding. Due to the pandemic and related travel restrictions, We are having our wedding online
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
                                <p id="desc"  className="title">Hey everyone I am Andrew!. To those that don't know me,
                                I am Karla's husband to be! Since i haven't had the opportunity to meet any of you in person, I thought 
                                i would introduce myself.
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
                                <p id="desc"  className="title">This course has taught me how to be a professional and
                                efficient communicator at work. outcomes were how to communicate quickly, clearly, and effectively.
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
                                    
                        <ScrollAnimation animateIn='fadeIn'
                        animateOut='fadeOut' duration="4" delay={2000} offset={50}> <div className="ourcenter">
                        <img src={us} alt="us" className="ourpic"/></div></ScrollAnimation>
                                   
                                <p id="desc"  className="title">
                                Our journey begins on the 18th of May, 2020. It all started on Mututal(a dating app),
                                 The borders were closed because of covid with very little exemptions so we kept talking online. I would drive 5 hours one way every weekend over the summer up to a 
                                 park in Washington on the border of Canada to see him. We would spend all day laying and talking 
                                 wishing and thinking of what life will be like once we could finally be together. Later as fall and 
                                 winter came along, more restriction were added at the park and because he was not a citizen of canada,
                                  he wasn't allowed to cross over into the park. This meant that we could only see each other across a 
                                  ditch that separated the two countries, without being able to hug or kiss each other. Time passed and we 
                                  hoped that the borders would open but the wait kept getting longer and longer. This was when we decided to 
                                  see each other at the park once again so that we could at least see each other in person, even though it 
                                  would be across a ditch. It was a snowy freezing valantine's day and we decided to meet early to avoid the 
                                  crowds that would gather. I drove up very slowly because of the snow and ice on the roads turning a normal
                                   5 hour drive into an 8 hour drive. My finance took a bus and then had to walk 6 miles in the snow and cold 
                                   to get to the park where we finally got to see each other. Flowers and the ring in hand he got down on one 
                                   knee and proposed to me
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