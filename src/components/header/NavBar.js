import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <div className="right menu">
          <Link to="/contents" className="item">
            Contents
          </Link>
          <Link to="/" className="item">
            Also home
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
