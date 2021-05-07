import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import "./term-1.css"

class Term_1 extends Component {

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
                        
                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                        <li  id="item">
                        Account Address: <span id="a2">TransferWise,
                         19 W 24th Street,
                         New York, NY 10010
                        United States</span></li></ScrollAnimation>

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
                            
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193034319/" target="blank" id="anum1" >ACIT 1515</a></p>
                                <p id="well" className="title">Scripting using Python</p>
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
                            
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193034328/" target="blank" id="anum1" >COMM 1116</a></p>
                                <p id="well" className="title">Business Communications 1</p>
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
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193041874/" target="blank" id="anum1" >MATH 1310</a></p>
                                <p id="well" className="title">Technical Mathematics for IT</p>
                                <div id="test">
                                <p id="desc"  className="title">This was an introductory course to the core mathematical
                                constructs that underlie information technology. It has provided me with
                                a good base for technical and programming courses i am taking at the moment
                                as well as in the terms to come. Topics covered include select topics from
                                discrete mathematics such as Boolean algebra, numeric systems and data representation,
                                as well as algebraic fundamentals such as
                                algebraic operations, functions, equations and logarithms, linear systems, vectors and matrices.
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