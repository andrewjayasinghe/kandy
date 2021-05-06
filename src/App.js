import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

import Term1 from "./components/term-1/term-1";
import Term2 from "./components/term-2/term-2";
import Term3 from "./components/term-3/term-3";
import Term4 from "./components/term-4/term-4";
// import Footer from "./components/Footer/Footer";


import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (

      <Router>

        <Navbar/>
        <Switch>
        <Route exact path="/"><Term1/></Route>
          {/* <Route exact path="/Register"> <Register/> <Footer/></Route>  */}
          <Route exact path="/Term2"> <Term2/></Route> 
          <Route exact path="/Term3"> <Term3/></Route>
          <Route exact path="/Term4"> <Term4/> </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;