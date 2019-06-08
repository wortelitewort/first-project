import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="ui center aligned grid">
        <div className="sixteen wide column">
          <div className="ui secondary pointing menu">
            <Link to="/" className="ui olive button">
              HomeCentral
            </Link>
            <div className="right menu">
              <Link to="/contents" className="ui item">
                Google OAuth
              </Link>
              <Link to="/" className="ui item">
                Search
              </Link>
            </div>
          </div>
        </div>
        <div className="sixteen wide column">
          Your one-stop marketplace to buy or sell home furniture
        </div>
      </div>
    );
  }
}

export default NavBar;
