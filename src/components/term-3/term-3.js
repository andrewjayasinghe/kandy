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
        animateOut='bounceOut' duration="2" delay={1000} offset={5}>

    <div id="at31"> 
            <p id="anum" ><a href="https://www.paypal.com/us/home" target="_blank" id="anum1" >PayPal</a></p>
            <p id="well" className="title">Click on PayPal</p>
            <div id="term21">
            <p id="desc">
            <div className="title">hey </div>
             
          
        <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }}>
        <ScrollAnimation animateIn='zoomInDown'
        animateOut='flipOutX' duration="2"  offset={50}>
                <li id="item">Local and remote server management</li> </ScrollAnimation>
                <ScrollAnimation animateIn='zoomInDown'
        animateOut='flipOutX' duration="2" delay={1000}  offset={50}>
                    <li  id="item"> Server storage & Active Directory (AD); </li></ScrollAnimation>

        <ScrollAnimation animateIn='zoomInDown'
        animateOut='flipOutX' duration="3" delay={1000}  offset={50}>
                    <li  id="item"> Managing organization units and AD accounts</li>
                    </ScrollAnimation>

        <ScrollAnimation animateIn='zoomInDown'
        animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                    <li  id="item">  Configuring group policies; </li></ScrollAnimation>

         <ScrollAnimation animateIn='zoomInDown'
        animateOut='flipOutX' duration="5" delay={1000} offset={5}>
                    <li id="item"> TCP/IP in Windows network </li></ScrollAnimation>

 <ScrollAnimation animateIn='zoomInDown'
        animateOut='flipOutX' duration="6" delay={1000} offset={5}>
                    <li id="item">
            Domain Name System (DNS) and Dynamic Host Configuration
             Protocol (DHCP). </li></ScrollAnimation>

             <ScrollAnimation animateIn='zoomInDown'
        animateOut='flipOutX' duration="7" delay={1000} offset={5}>
                    <li id="item">
            IIS Server and Hyper-V</li></ScrollAnimation>

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
       
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20203040125/" target="blank" id="anum1" >ACIT 3640</a></p>
            <p id="well" className="title">Cloud Computing (AWS)</p>
            <div id="test">
            
            <p id="desc"  >
            <div className="title">I was able to examine public cloud environments,
             including Amazon Web Services (AWS), Microsoft Azure and the Google Cloud Platform in this course. 
             An emphasis was placed on AWS. I was able to successfully deploy both Windows and Linux virtual
              machines (EC2 instances), create virtual private clouds (VPCs) and virtual private networks
               (VPNs). I was also introduced to website and database hosting in a cloud computing
                environment. Topics include: </div>
                
               
                 

                  <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="2"  offset={50}>
                        <li id="item">How to apply aspects of the cloud 
                        computing security models</li> </ScrollAnimation>
                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="2" delay={1000}  offset={50}>
                        <li  id="item"> Patch and upgrade instances in
                         production environments and maintain fault tolerant 
                        websites.
                        </li></ScrollAnimation>

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="3" delay={1000}  offset={50}>
                        <li  id="item">Build and deploy a multi-tier cloud application 
                 utilizing both auto-scaling and load balancing.</li>
                        </ScrollAnimation>

                        <ScrollAnimation animateIn='zoomInDown'
                        animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                        <li  id="item">Examine cloud computing 
                 strategies for small, medium or large companies, including what computing resources
                  are candidates for migration to the cloud.</li></ScrollAnimation>
                        
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

<p id="anum" ><a href="https://www.bcit.ca/outlines/20203034750/" target="blank" id="anum1" >ACIT 3910</a></p>
<p id="well" className="title">Database Administration and Management (MySQL)</p>
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

<ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
<ScrollAnimation animateIn='bounceIn'
        animateOut='bounceOut' duration="2" offset={5}>   
    <div id="at33">
        
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20203045160/" target="blank" id="anum1" >ACIT 3475</a></p>
            <p id="well" className="title">Web Server Administration</p>
           
            <p id="desc">
                <div id="term21" className="title">
            This course introduced me to the deployment and operations of web applications. 
            I learned how to implement an existing application into a web stack including web 
            servers, databases and application servers, and improved the web stack 
            throughout the course. Topics include:
            </div>
            <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >

                <ScrollAnimation animateIn='zoomInDown'
                animateOut='flipOutX' duration="2"  offset={50}>
                <li id="item"> Web Server Management</li> </ScrollAnimation>
                <ScrollAnimation animateIn='zoomInDown'
                animateOut='flipOutX' duration="2" delay={1000}  offset={50}>
                <li  id="item">Application Servers, 
            Load Balancing
                </li></ScrollAnimation>

                <ScrollAnimation animateIn='zoomInDown'
                animateOut='flipOutX' duration="3" delay={1000}  offset={50}>
                <li  id="item">Caching, Performance Measurement</li>
                </ScrollAnimation>

                <ScrollAnimation animateIn='zoomInDown'
                animateOut='flipOutX' duration="4" delay={1000} offset={50}>
                <li  id="item">Reverse Proxies</li></ScrollAnimation>

                <ScrollAnimation animateIn='zoomInDown'
                animateOut='flipOutX' duration="5" delay={1000} offset={50}>
                <li  id="item">TLS/SSL Security, 
            Authentication Mechanisms</li></ScrollAnimation>

                <ScrollAnimation animateIn='zoomInDown'
                animateOut='flipOutX' duration="6" delay={1000} offset={50}>
                <li  id="item"> Centralized Logging​</li></ScrollAnimation>

                </ul>

</p>


    </div>
    </ScrollAnimation>
</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
<ScrollAnimation animateIn='bounceIn'
        animateOut='bounceOut' duration="2" offset={5}>   
    <div id="alterm34">
        
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20203046188/" target="blank" id="anum1" >ACIT 3896</a></p>
            <p id="well" className="title">Applied Algorithms</p>
            <div id="test">
            <p id="desc">​This course was about developping the ability to 
            analyze and design computer algorithms. In particular, I was able to analyze the
             time and space complexity of programs, solve difficult programming problems using 
             algorithmic techniques, and prove that the solution is correct. The emphasis was
             be on developing the practical skills of analysis and design in Research and Development (R&D)
              based projects. Topic assigned was 
              <a href={file} target="blank" id="a1"> COVID-19 Contact Tracing with Data Protection</a> 
</p>

        </div>
    </div>
    </ScrollAnimation>
</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
<ScrollAnimation animateIn='bounceIn'
        animateOut='bounceOut' duration="2" offset={5}> 
    <div id="at34">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20193041874/" target="blank" id="anum1" >ACIT 3900</a></p>
            <p id="well" className="title">Industry Sponsored Practicum 1</p>
            <div id="test">
            <p id="desc" >For this course, students work in teams to complete IT projects that meet the specifications
             and needs of an external client. Projects are drawn from a variety of sources, 
             typically organizations within the local IT and Computing community. Projects may
              require extensive contact with the business and IT community, and may require students 
              to work at a client site. During this course, instructors act in the role of an IT 
              manager to ensure students are effectively managing the project work and client relationship.
              I was assigned to a team of 6, and we were assigned a swiss startup called
              <a href={file} target="blank" id="a2"> Dans'L Jardin</a> that is a web-based
              musician booking platform. We were tasked with developping their canadian platform that covers the lower mainland.
              We used the MERN stack to create the web application. The database we used was MySQL. 
</p>

        </div>  </div>
        </ScrollAnimation>
</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "20px", marginBottom: "20px" }}>
<ScrollAnimation animateIn='bounceIn'
        animateOut='bounceOut' duration="2" offset={5} >  
    <div id="at35">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20193034585/" target="blank" id="anum1" >ACIT 3771</a></p>
            <p id="well" className="title">IT Service & Project Management</p>
            <div id="test">
            <p id="desc"  className="title">                                         
            This course teaches how to effectively manage information technology
             projects using both AGILE and WATERFALL methods,
              and the ITIL service lifecycle. It covers all nine project
              management knowledge areas – project integration, scope, time, cost,
               quality, human resource, communication, risk and procurement management 
               and all five process groups – initiating, planning, executing, controlling 
               and closing from the Project Management Body of Knowledge (PMBOK). It 
               covers ITIL service lifecycle and IT Service Management in an authentic context.
         </p>



        </div>  </div>
        </ScrollAnimation>
</ReactBootStrap.Row>


</ReactBootStrap.Container> 


        </>

  

        )

    }
}

export default Term_3