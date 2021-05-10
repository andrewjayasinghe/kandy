import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import * as ReactBootStrap from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import "./term-1.css"
import us from './../../assets/us.jpg'; // Tell webpack this JS file uses this image

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

                                <p id="desc">Welcome to our wedding website! We made this as a one stop shop for all things about 
                                us and our wedding. Due to the pandemic and related travel restrictions, We are having our wedding online
                                so we decided to make things a little fun by creating this website.
                    
                        </p>
                            </div>
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
                        <li  id="item"> If you would rather donate to our wedding fund, click on the 
                        {this.renderRedirect()}
                        <button class="button" onClick={this.setRedirect}>Jar</button> Button. </li></ScrollAnimation>

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="3" delay={1000}  offset={50}>
                        <li  id="item">
                        </li>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                        <li  id="item">
                        </li></ScrollAnimation>
                        
                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                        <li  id="item">
                        
                        </li></ScrollAnimation>

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
                                <p id="desc"  className="title">The course introduced the fundamental concepts of programming for IT professionals,
                                with a focus on scripting languages that are commonly found in the workplace.
                                Projects, assignments, and activities are representative of tasks that
                                IT professionals are likely to encounter in the workplace. We had to design,
                                implement, test, and debug programs that incorporated: variables, expressions,
                                assignments, I/O, conditional and iterative control constructs, functions,
                                and parameter passing. This was all done using The PYTHON Scripting Language
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
                                We met May 18th 2020 on a dating app called Mutual. It's for members
                                 of our church to meet. We started texting and that night we video 
                                 chatted. We've been video chatting everyday since. In July 2020 we were
                                  able to meet in person on the border of Washington and Canada at a park 
                                  called Peace Arch Park. Canadians and Americans can meet there since 
                                   borders are closed because of covid. Every week we would go and spend a
                                    whole day at the park. Karla would drive 5 hours from Oregon to get there 
                                    and Andrew would have to take public transit for 2 hours to get there.
                                     We would bring a blanket to lay on and food for lunch. All day we would
                                      just lay and talk. As winter came we weren't able to see each other 
                                      in person anymore. We are so excited to finally start our lives 
                                      together and for us to live together in Canada.
 </p>

                            </div>  </div>
                            </ScrollAnimation>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px", marginBottom: "20px" }}>
                    <ScrollAnimation animateIn='animate__backInLeft'
                            animateOut='animate__backOutRight' duration="2" offset={5} >  
                        <div id="al6">
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193034585/" target="blank" id="anum1" >ORGB 1100</a></p>
                                <p id="well" className="title">Organizational Behavior</p>
                                <div id="test">
                                <p id="desc"  className="title">                                         
                                This course Presented the study of
                            factors that either influence or are influenced by
                            people at work. The course focused on macro factors such
                            as organizational structure, technology and environment; group
                            factors such as group dynamics, leadership, conflict, change and decision making;
                            and micro or individual factors such as personality, attitudes,
                             perception and motivation
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