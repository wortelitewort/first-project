import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { browserHistory } from "react-router";
import HomePage from "./pages/HomePage";
import Contents from "./pages/Contents";
import NavBar from "./header/NavBar";
import Categories from "./header/Categories";
import Footer from "./footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui container">
          <NavBar />
          <Categories />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="contents" exact path="/contents" component={Contents} />
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
