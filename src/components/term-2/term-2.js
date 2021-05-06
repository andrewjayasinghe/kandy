import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';
import "./term-2.css"

class Term_2 extends Component {

    render() {

        return (
         
            <>
            
            <ReactBootStrap.Container style={{ marginTop: "20px" }}>

<ReactBootStrap.Row className="size">
<ScrollAnimation animateIn='animate__lightSpeedInRight'
                            animateOut='animate__lightSpeedOutLeft' duration="2">

    <div id="tit1">
            <p id="anum">Courses Completed </p>
            <p id="desc2">This page includes all of the courses
            I've completed for Term-2 at BCIT and a brief description of what i've learned.
    </p>
        </div>
    </ScrollAnimation>
</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "30px" }}>

<ScrollAnimation animateIn='zoomInDown'
    animateOut='animate__zoomOut' duration="2" offset={5}>

    <div id="all2">
        
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20201072390/" target="blank" id="anum1" >ACIT 2520</a></p>
            <p id="well" className="title">Web Applications Development</p>
            <p id="desc">Introduced web application development using the MEAN stack
            enterprise application framework. Topics covered included:
            <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >
     
            
            <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="2"  offset={50}>
                                    <li id="item"> An introduction to basic Angular and MongoDB syntax
                                    </li> </ScrollAnimation>

                                    <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="2" delay={1000}  offset={50}>
                                        <li  id="item"> Setting up and managing the
                                         development environment </li></ScrollAnimation>

                            <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="3" delay={1000}  offset={50}>
                                        <li  id="item"> State management, HTML server controls</li>
                                        </ScrollAnimation>

                            <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                                        <li  id="item"> Web controls, code behind data access</li></ScrollAnimation>

                             <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="5" delay={1000} offset={50}>
                                        <li id="item"> Loading and manipulating XML documents </li></ScrollAnimation>
                                        
                                        <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="6" delay={1000} offset={5}>
                                        <li id="item">Web Services, and security </li></ScrollAnimation>
            
            
              </ul>
            

</p>

        </div>
        </ScrollAnimation>

</ReactBootStrap.Row>


<ReactBootStrap.Row className="size" style={{ marginTop: "30px" }}>

<ScrollAnimation animateIn='zoomInDown'
    animateOut='animate__zoomOut' duration="2" offset={5}>
    <div id="alterm2">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20201086052/" target="blank" id="anum1" >ACIT 2420</a></p>
            <p id="well" className="title">Linux System Administration</p>         
            <div id="term21">
            <p id="desc" className="title">The objective of this course is to teach students
             basic Network Operating System administration tasks using Linux. 
             At the end of the course the students should be able to install
              and configure a Linux-based network. Configuration tasks include 
              installing the software, adding hardware, networking the servers,
               managing users, monitoring performance, scripting and troubleshooting.
                Students are also expected to configure common server services such as
                 DNS, DHCP, Apache and IP Tables.
              </p>
        </div>
        </div>

        </ScrollAnimation>

</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "30px" }}>

<ScrollAnimation animateIn='zoomInDown'
    animateOut='animate__zoomOut' duration="2" offset={5}>

    <div id="alterm21">
      
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20201072388/" target="blank" id="anum1" >ACIT 2515</a></p>
            <p id="well" className="title">Object Oriented Programming using Python</p>
            <div id="term21">
            <p id="desc" className="title">Topics I studied included object-oriented programming concepts such as classes, 
            objects, methods, inheritance, encapsulation, and polymorphism. This course 
            also covered techniques for software design and reuse. By the end of this course 
            I was able to successfully design, implement, test, debug simple 
            object-oriented programs in Python. 
            </p>

        </div>
    </div>
    </ScrollAnimation>
</ReactBootStrap.Row>



<ReactBootStrap.Row className="size" style={{ marginTop: "30px" }}>

<ScrollAnimation animateIn='zoomInDown'
    animateOut='animate__zoomOut' duration="2" offset={5}>

    <div id="alterm23">
        
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20201072394/" target="blank" id="anum1" >ACIT 2620</a></p>
            <p id="well" className="title">Enterprise Networking</p>
            <div id="term21">
            <p id="desc"  className="title">
            This course introduces students to core networking concepts,
             terminologies, and their implementations. Topics are 
             introduced and examined by implementing and configuring 
             network services using contemporary technologies. The course
              includes a semester long hands-on practical networking project,
               as well a discussion of fundamental concepts such as network topologies, 
               protocols, transmission media, switching techniques, access control and 
               addressing. TCP/IP and the OSI Reference Model are used throughout the course
</p>

        </div></div>
        </ScrollAnimation>

</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "30px" }}>

<ScrollAnimation animateIn='zoomInDown'
    animateOut='animate__zoomOut' duration="2" offset={5}>

    <div id="alterm24">
        
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20201087050/" target="blank" id="anum1" >ACIT 2811</a></p>
            <p id="well" className="title">UX/UI Development Project</p>
            <div id="term21">
            <p id="desc"  className="title">User Experience (UX) encompasses a wide range of
             activities including User Interface (UI) design, Information Architecture (IA) 
             and field research. Usability design and testing, tight integration and 
             collaboration with software development processes are included in UX.
              This hands-on course was an introduction to UX/UI for creating user interfaces for web
               sites, mobile applications, and
               information systems, as well as those who want a better understanding 
               of the role of UX/UI. In conjunction with 2911, we followed 
               an iterative and agile approach focusing on User-Centered Design (UCD) 
               as the motivator for product direction and Figma for mockup creation.
</p>

        </div></div>
        </ScrollAnimation>

</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "30px" }}>

<ScrollAnimation animateIn='zoomInDown'
    animateOut='animate__zoomOut' duration="2" offset={5}>

    <div id="alterm25">
        
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20201086050/" target="blank" id="anum1" >ACIT 2911</a></p>
            <p id="well" className="title">Agile Development Project</p>
            <div id="term21">
            <p id="desc"  className="title">
                This course provided me with 
            hands-on experience developing application software using the SCRUM
            Agile methodology. Collaboration and teamwork
             were used to continuously develop software over a series of
              iterations. I learned to cope with changes, to identify 
              and manage multiple work tasks, and to focus on maintaining a 
              potentially releasable product throughout the project.​
</p>
</div>
        </div>
        </ScrollAnimation>
</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "30px", marginBottom: "20px" }}>

<ScrollAnimation animateIn='zoomInDown'
    animateOut='animate__zoomOut' duration="2" offset={5}>

    <div id="alterm26">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20201086059/" target="blank" id="anum1" >ACIT 2831</a></p>
            <p id="well" className="title">Business Systems Analysis</p>
          
            <p id="desc" >    
            <div id="term21">                                     
            Business Analysis and Systems Design is the study of 
            concepts, processes and tools that professionals
             use to plan and develop information systems. I
              learned how to ask implicit questions, create plans and make
               decisions as needed to support the creation of an information 
               system. We worked in teams to initiate the system process, 
               analyze problems, discover requirements and create a logical design. 
               Topics included: 
               </div>
               <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >
           
           <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="2"  offset={50}>
                                    <li id="item"> Techniques used in the discovery of business requirements
                                    </li> </ScrollAnimation>
                                    
                                    <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="2" delay={1000}  offset={50}>
                                        <li  id="item"> Traditional approaches to data and process
                                         modelling, and techniques 
               for Object Oriented modelling. </li></ScrollAnimation>

                            <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="3" delay={1000}  offset={50}>
                                        <li  id="item"> Both Agile and Waterfall approaches to 
                                        software development</li>
                                        </ScrollAnimation>

           
           
           
             </ul>
        
                </p>

            
        </div> 
        </ScrollAnimation>

</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "30px", marginBottom: "20px" }}>

<ScrollAnimation animateIn='zoomInDown'
    animateOut='animate__zoomOut' duration="2" offset={5}>

    <div id="alterm27">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20201072403/" target="blank" id="anum1" >COMM 2216</a></p>
            <p id="well" className="title">Business Communications 2</p>
            <div id="term21">
            <p id="desc"  className="title">                                         
            Information technology professionals spend time each day communicating
             orally and in writing with their supervisors, colleagues and clients. 
             As problem-solvers and entrepreneurs in industry, you need to communicate quickly, 
             clearly, and effectively. This course will build on the skills you learned in first 
             term to be an efficient and professional communicator at work. You will learn how 
             to conduct an effective job search and write the accompanying resume and cover
              letter to support it. You will also write effective reports, deliver a persuasive
               oral presentation to your set, and participate effectively in meetings and group work.
                You will prepare a formal report and present it orally and in writing.
        
                </p>


        </div> </div>
        </ScrollAnimation>
</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "30px", marginBottom: "20px" }}>

<ScrollAnimation animateIn='zoomInDown'
    animateOut='animate__zoomOut' duration="2" offset={5}>

    <div id="alterm28">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20201072405/" target="blank" id="anum1" >Math 1350</a></p>
            <p id="well" className="title">Statistics for IT</p>
            <div id="term21">
            <p id="desc"  className="title">                                         
            Presentation of data in tabular and graphical form. 
            Frequency distribution, measures of central tendency and variation.
             Probability, discrete and continuous data. Binomial and Normal probability
              distributions. Sampling, confidence limits, and hypothesis testing.
               Regression, correlation, and chi-square test. Applications to data and 
               problems relevant to information technology.
                </p>

                </div>
        </div>  
        </ScrollAnimation>
</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "30px", marginBottom: "20px" }}>

<ScrollAnimation animateIn='zoomInDown'
    animateOut='animate__zoomOut' duration="2">

    <div id="alterm29">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20201072405/" target="blank" id="anum1" >ACIT 4770</a></p>
            <p id="well" className="title"> Legal and Ethical Issues in IT</p>
            <div id="term21">
            <p id="desc"  className="title">                                         
            Presentation of data in tabular and graphical form. 
            Frequency distribution, measures of central tendency and variation.
             Probability, discrete and continuous data. Binomial and Normal probability
              distributions. Sampling, confidence limits, and hypothesis testing.
               Regression, correlation, and chi-square test. Applications to data and 
               problems relevant to information technology.
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

export default Term_2