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
                                our wedding. On the top right corner, you can see that theres 2 options. We have a Jar which you can
                                donate funds to, or an Amazon registry.
                        </p>
                            </div>
                        </ScrollAnimation>
                    </ReactBootStrap.Row>



                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
                    <ScrollAnimation animateIn='animate__backInLeft'
                            animateOut='animate__backOutRight' duration="2" offset={5}>

                        <div id="al">
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193034322/" target="blank" id="anum1" >ACIT 1620</a></p>
                                <p id="well" className="title">Fundamental Web Technologies</p>
                                <div id="term21">
                                <p id="desc">This course introduced me to the fundamental principles and
                                techniques for designing and developing effective Web sites.
                                Topics included:
                            <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }}>
                            <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="2"  offset={50}>
                                    <li id="item"> Hand-coding pages with HTML</li> </ScrollAnimation>
                                    <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="2" delay={1000}  offset={50}>
                                        <li  id="item"> Styling text and
                            content with CSS </li></ScrollAnimation>

                            <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="3" delay={1000}  offset={50}>
                                        <li  id="item"> Adding dynamic features with client-side scripting techniques</li>
                                        </ScrollAnimation>

                            <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                                        <li  id="item"> Server-side scripting and managing files and Web sites using File Transfer Protocol
                             software such as wordpress </li></ScrollAnimation>
                             <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="5" delay={1000} offset={5}>
                                        <li id="item"> I was also introduced to information architecture and interface
                             design, XML, as well as advanced mark-up techniques using DHTML. </li></ScrollAnimation>
                                    </ul>


                                </p>
                                </div>
                        </div>
                        </ScrollAnimation>

                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
                        <ScrollAnimation animateIn='animate__backInRight'
                            animateOut='animate__backOutLeft' duration="2" offset={5}>  
                        <div id="al2">
                           
                                <p id="anum" ><a href="https://www.bcit.ca/outlines/20193034355/" target="blank" id="anum1" >ACIT 1630</a></p>
                                <p id="well" className="title">Database Systems</p>
                                <div id="test">
                                <p id="desc"  className="title">This course covered relational database technology,
                                including basic concepts, relational algebra, enhanced entity-relationship data modeling,
                                functional dependencies and normalization, design methodology, SQL query language (DDL and DML),
                                views, security and transaction management.
 </p>

                            </div>
                        </div>
                        </ScrollAnimation>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>

<ScrollAnimation animateIn='animate__backInLeft'
       animateOut='animate__backOutRight' duration="2" offset={5}>   
   <div id="al1">
     
           <p id="anum" ><a href="https://www.bcit.ca/outlines/20193044280/" target="blank" id="anum1" >ACIT 1420</a></p>
           <p id="well" className="title">Windows System Administration</p>
           <p id="desc">This course was about the configuration, maintenance, and administration
           of a Windows computer.
           Topics I studied included:
            <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >
            
        <ScrollAnimation animateIn='zoomInDown'
       animateOut='flipOutX' duration="2"  offset={50}>
               <li id="item"> An introduction to PC hardware, functions of an
                       Operating System</li> </ScrollAnimation>
               <ScrollAnimation animateIn='zoomInDown'
       animateOut='flipOutX' duration="2" delay={1000}  offset={50}>
                   <li  id="item"> Windows OS architecture, file and disk management
                    </li></ScrollAnimation>

       <ScrollAnimation animateIn='zoomInDown'
       animateOut='flipOutX' duration="3" delay={1000}  offset={50}>
                   <li  id="item"> BIOS, UEFI & Firmware</li>
                   </ScrollAnimation>

       <ScrollAnimation animateIn='zoomInDown'
       animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                   <li  id="item">Multi-boot & virtual machines </li></ScrollAnimation>

        <ScrollAnimation animateIn='zoomInDown'
       animateOut='flipOutX' duration="5" delay={1000} offset={50}>
                   <li id="item"> Software installation/removal </li></ScrollAnimation>
                                         
                   <ScrollAnimation animateIn='zoomInDown'
       animateOut='flipOutX' duration="6" delay={1000} offset={50}>
                   <li id="item"> Performance tuning</li></ScrollAnimation>

                   <ScrollAnimation animateIn='zoomInDown'
       animateOut='flipOutX' duration="7" delay={1000} offset={5}>
                   <li id="item">Data Backup & Protection, troubleshooting, networking, security,
                       virus protection, and firewalls</li></ScrollAnimation>
               </ul>



           </p>

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