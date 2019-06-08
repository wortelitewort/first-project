import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          HomeCentral
        </Link>
        <div className="right menu">
          <Link to="/contents" className="item">
            Google OAuth
          </Link>
          <Link to="/" className="item">
            Search
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
