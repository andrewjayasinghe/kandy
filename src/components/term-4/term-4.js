import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ScrollAnimation from 'react-animate-on-scroll';

import "./term-4.css"

class Term_4 extends Component {

    render() {

        return (
         
            <>
            
            <ReactBootStrap.Container style={{ marginTop: "20px" }}>

<ReactBootStrap.Row className="size">
<ScrollAnimation animateIn='zoomInDown'
                            animateOut='animate__zoomOutDown' duration="2" offset={5} >
    <div id="tit14">
            <p id="anum">Courses Completed </p>
            <p id="desc">This page includes all of the courses
            I've completed for Term-4 at BCIT and a brief description of what i've learned.
    </p>
    </div>
    </ScrollAnimation>
</ReactBootStrap.Row>



<ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
<ScrollAnimation animateIn='animate__backInLeft'
                            animateOut='animate__backOutRight' duration="2" offset={5}>
    <div id="alterm41">
        <div id="test1">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20211085541/" target="blank" id="anum1" >ACIT 4640</a></p>
            <p id="well" className="title">IT Systems & Networks Provisioning</p>
            <div id="term21">
            <p id="desc">This course introduced me to the concepts, processes, 
            and tools used in the automated provisioning of IT infrastructure as well as the deployment of 
            applications using that infrastructure. Projects and activities incorporate the management of
             physical, virtual, and containerized run-time environments both on premises and in a public cloud.
              Topics include: bare metal provisioning, 
            scripted installations, automated image creation, and declarative configuration management.
        <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }}>
        <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="2"  offset={50}>
                    <li id="item"><i> Write code to automate the creation of base images for use on local 
                        or cloud infrastructure. </i></li>    </ScrollAnimation>
                        <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="2" delay={1000}  offset={50}>
                    <li id="item"><i> Write declarative code to provision and configure infrastructure
                         and services on a public cloud. Manage all "infrastructure as code" 
                        artifacts using modern version control. </i></li></ScrollAnimation>

                        <ScrollAnimation animateIn='zoomInDown'
                            animateOut='flipOutX' duration="3" delay={1000} offset={50}>
                    <li id="item"><i> Enumerate, compare, select and use popular
                         configuration management and provisioning tools.</i></li></ScrollAnimation>
                

                </ul>


            </p></div>
        </div>
    </div>
    </ScrollAnimation>
</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
<ScrollAnimation animateIn='animate__backInRight'
                            animateOut='animate__backOutLeft' duration="2" offset={5}>
    <div id="alterm42">
        <div id="test2">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20211073676/" target="blank" id="anum1" >ACIT 4850</a></p>
            <p id="well" className="title">Enterprise Systems Integration</p>
            <div id="term21">
            <p id="desc">​This course covered enterprise software development
             processes and systems integration with a focus on the mechanisms 
             employed. I learned how to structure solutions using current
              technologies and protocols such as SonarQube, Jenkins, Confluence, Jira, GitLab to name a few. 
              I was also able to learn a series of Integration
               forms from simple to complex partner connections and everything in between. 
               
            Topics I studied included:
<ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >
                    <li className="test" id="item"><i>Software Source Code Management</i></li>
                    <li id="item"><i>Work Management and Issue Tracking</i></li>
                    <li id="item"><i>Knowledge Sharing and Communication</i></li>
                    <li id="item"><i>Continuous Integration (CI) & Continuous Delivery (CD)</i></li>
                    <li id="item" ><i>Automated Test</i></li>
                    <li id="item"><i>Static Code Analysis</i></li>
                    <li id="item" ><i>Artefact Management and Enable integrations between tools</i></li>
                </ul>



            </p>
            </div>

        </div>
    </div>
    </ScrollAnimation>
</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
<ScrollAnimation animateIn='animate__backInLeft'
                            animateOut='animate__backOutRight' duration="2" offset={5}>
    <div id="alterm43">
        <div id="test3">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20211086066/" target="blank" id="anum1" >ACIT 4630</a></p>
            <p id="well" className="title">Information Assuarance & Security</p>
            <div id="term21">
            <p id="desc">Through this course, i was able to gain a
             practical understanding of basic security issues surrounding information systems and
              typical networks. Topics i studied included understanding basic exploits and identifying 
              security vulnerabilities. I was able to learn how to use various tools to secure systems on a LAN,
               perform Audits, hacker identification, and log file analysis. Some tools i used were Wireshark, OWASP , Nmap and Kali Linux.

               Topics I studied included:
<ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >
                    <li className="test" id="item"><i>Identify vulnerabilities in Windows and Linux operating systems</i></li>
                    <li id="item"><i>Apply patches and updates to Windows and Linux</i></li>
                    <li id="item"><i>Backup and recovery procedures</i></li>
                    <li id="item"><i>Identify various types of possible network attacks</i></li>
                    <li id="item" ><i>Describe different types of security practices</i></li>
                    <li id="item"><i>Identify basic threats to information assurance and security</i></li>
                </ul>



        </p>
</div>
        </div>
    </div>
    </ScrollAnimation>
</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
<ScrollAnimation animateIn='animate__backInRight'
                            animateOut='animate__backOutLeft' duration="2" offset={5}>

    <div id="alterm44">
          <div id="test3">
            <p id="anum" ><a  href="https://www.bcit.ca/outlines/20211088345/" target="blank" id="anum1" >ACIT 3495</a></p>
            <p id="well" className="title">Advanced Topics in IT Infrastructure</p> <p id="well" className="title">(Docker & K8)</p>
            <div id="term21">
            <p id="desc">This elective course allowed me to study advanced concepts
             related to IT Infrastructure. Topics are drawn from a variety of sources, with a
              focus on current industry standard tools and techniques related 
            to the architecture, design, deployment, and management of IT Infrastructure in organizations.​ The primary 
            tools used for this course was Docker and Kubernetes.
            A few learning outcomes include:

<ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >
                    <li className="test" id="item"><i>Discuss various approaches and techniques used to build customized IT infrastructure solutions
                         that meet the operational needs of a business or organization</i></li>
                    <li id="item"><i>Evaluate, compare, and recommend IT Infrastructure solutions to solve 
                        a specified business problem or meet a specified organizational goal</i></li>
                    <li id="item"><i>Implement and deploy IT Infrastructure 
                        solutions that utilize industry standard and/or emerging technologies</i></li>
                 
                </ul>



        </p>
</div>
        </div>
    </div>
    </ScrollAnimation>

</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
<ScrollAnimation animateIn='animate__backInLeft'
                            animateOut='animate__backOutRight' duration="2" offset={5}> 
    <div id="alterm45">
        
         <div id="test3">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20211087422/" target="blank" id="anum1" >ACIT 3855</a></p>
            <p id="well" className="title">Service Based Architecture</p>
            <div id="term21">
            <p id="desc">
            This course focused on the design of Enterprise Application Software using Service Based Architecture.
              I used Service Based Architecture analysis and design techniques to identify business and 
              systems services. The course also considered various techniques for implementing services including 
              Web Services and Representational State Transfer. The course reviewed current and emerging 
              standards that are relevant to Service Oriented Architecture, SaaS, and Micro-services.
               Course outcomes include:
<ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >
                    <li className="test" id="item"><i>Explain what Service Based Architectures are and their 
                        impact on modern Enterprise Application Software.</i></li>
                    <li id="item"><i>Apply the concepts and principles of Service Based Architectures to software development projects.</i></li>
                    <li id="item"><i>Compare and contrast Service Based Architecture analysis and design with object-oriented (OO) analysis and design.</i></li>
                    <li id="item"><i>Design an interoperable Service Based Architecture application</i></li>
                    <li id="item" ><i>Implement services using REST interfaces.</i></li>
                </ul>



        </p>
    </div>
    </div></div>
    </ScrollAnimation>

</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "20px", marginBottom: "20px" }}>
<ScrollAnimation animateIn='animate__backInLeft'
                            animateOut='animate__backOutRight' duration="2" offset={5}>
    <div id="alterm47">
        <div id="test3">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20193034585/" target="blank" id="anum1" >ACIT 4900</a></p>
            <p id="well" className="title">Industry Sponsored Practicum 2</p>
            <div id="term21">
            <p id="desc"  >                                         
            This is the second Industry sponsored project within the diploma. Builtspace technologies was the client.
            They had a legacy php application that generated QR codes which was not scalable at all and had 
            to be integrated with a modern react application that could handle customer
             management as well as the QR code information. All systems were to be hosted on AWS.
              Our project was featured on the official BCIT page on LinkedIn.
             Due to the NDA signed with the company I am unable to display the source code or the application URL.
         
             <ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >
                    <li className="test" id="item"><i>Created a login / registration system that was 
                        integrated with AWS Cognito user pools.</i></li>
                    <li id="item"><i>Created an integrated backend that used multiple AWS services and were successfully able to link PHP application</i></li>
                    <li id="item"><i>Used AWS Dynamo DB that was integrated with Lambda functions in order to create a full CRUD React app</i></li>
                    <li id="item"><i> Upgraded legacy PHP code to handle multiple requests</i></li>
                    <li id="item"><i> Created Bash scripts within the EC2 PHP server running the PHP application to 
                        scale the application accordingly</i></li>
                    <li id="item"><i>This was an Agile project with weekly deliverables and daily scrum ceremonies</i></li>

                </ul>
                Technologies used: React, HTML, CSS, Javascript, Axios, PHP, Bash, AWS Amplify, AWS Lambda, 
                AWS Cognito, AWS DynamoDB, AWS API Gateway, AWS S3, AWS EC2
         
         </p>



        </div>  </div></div>
        </ScrollAnimation>
</ReactBootStrap.Row>

<ReactBootStrap.Row className="size" style={{ marginTop: "20px" }}>
<ScrollAnimation animateIn='animate__backInRight'
                            animateOut='animate__backOutLeft' duration="2" offset={5}>
    <div id="alterm46">
     

<div id="test3">
            <p id="anum" ><a href="https://www.bcit.ca/outlines/20211086527/" target="blank" id="anum1" >ACIT 4880</a></p>
            <p id="well" className="title">Data Analytics</p>
            <div id="term21">
            <p id="desc">
            This course introduced me to the concepts, techniques and tools needed
             to extract knowledge and information from data. The focus is on large data sets that would be
              found in a typical enterprise environment. I worked with and analyzed offline as well 
              as online data. The course covered techniques for data cleaning, manipulation, analysis, and visualization.
               Course outcomes include:
<ul style={{ textAlign: 'left', marginLeft: '-5px', marginTop: '10px' }} >
                    <li className="test" id="item"><i>Create stable and accurate data analytic models for 
                        data classification, data regression, and data clustering</i></li>
                    <li id="item"><i>Create data visualization dashboards using Tableau and PowerBI</i></li>
                    <li id="item"><i>Apply data analytic techniques using Excel and R</i></li>
                   
                </ul>



        </p>
    </div>
    </div>

         </div>
        </ScrollAnimation>
</ReactBootStrap.Row>



</ReactBootStrap.Container>

        </>

  

        )

    }
}

export default Term_4