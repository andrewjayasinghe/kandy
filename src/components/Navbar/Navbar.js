import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
// import main_logo2 from "./logo-image/logo2.png";
import "./Navbar.css"
import file from "./../../assets/COVID.pdf" 
import file1 from "./../../assets/unofficial.pdf" 

class Navbar extends Component {

    render() {

        return (


          <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark" style={{backgroundColor:"#2A3c43"}}>
            <div>
  <a href={process.env.PUBLIC_URL + '/#/'} id="logo-href">ANDREW & KARLA</a>
  </div>
       

             <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" className="navDropDown"/>
              
              
              
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav" >

      
  <ReactBootStrap.Nav className="mr-auto">

</ReactBootStrap.Nav>
  
      <ReactBootStrap.Nav className='nav-size' >

      {/* <ReactBootStrap.NavDropdown title="Projects" id="nav-dropdown" className="nav-font" style={{boxShadow: "none"}} >
        <ReactBootStrap.NavDropdown.Item href="https://andrewjayasinghe.github.io/Hangman/Hangman/" target="_blank" className="drop" >Hangman Game</ReactBootStrap.NavDropdown.Item>      
          <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="https://dansljardin.herokuapp.com/#/" target="_blank" className="drop" >Dans L' Jardin</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="https://headstartschildcare.com/#/" target="_blank" className="drop" >Headstarts Day Care</ReactBootStrap.NavDropdown.Item>
        
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href={file} target="_blank" className="drop" >COVID Tracing Paper</ReactBootStrap.NavDropdown.Item>

        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="https://github.com/andrewjayasinghe/builtspace" target="_blank" className="drop" >Builtspace Client Management</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="https://www.nikoiaqua.com/index.html" target="_blank" className="drop" >Nikoi Aqua Website</ReactBootStrap.NavDropdown.Item>

        
          </ReactBootStrap.NavDropdown> */}


        <ReactBootStrap.Nav.Link href={process.env.PUBLIC_URL + '/#/Term3'} className="nav-font" id="home">Jar</ReactBootStrap.Nav.Link >
        <ReactBootStrap.Nav.Link  href={'https://www.amazon.ca/wedding/karla-nelson-andrew-jayasinghe-burnaby-august-2021/registry/10Q84LN9EOJN6'} target="_blank" className="nav-font" id="faq">Registry</ReactBootStrap.Nav.Link >
        {/* <ReactBootStrap.Nav.Link  href={process.env.PUBLIC_URL + '/#/Term3'} className="nav-font" id="info">Term-3</ReactBootStrap.Nav.Link > */}
        {/* <ReactBootStrap.Nav.Link  href={process.env.PUBLIC_URL + '/#/Term4'} className="nav-font" id="about">Term-4</ReactBootStrap.Nav.Link > */}
        {/* <ReactBootStrap.Nav.Link  href={file1} className="nav-font" id="resume" target="_blank">Transcript</ReactBootStrap.Nav.Link > */}


   </ReactBootStrap.Nav>

    </ReactBootStrap.Navbar.Collapse>
  
  </ReactBootStrap.Navbar>




        )

    }
}

export default Navbar