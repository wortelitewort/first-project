import React, { Component } from "react";
import { Link } from "react-router-dom";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { activeId: 1 };
  }

  handleClick = () => {
    this.setState({ activeId: this.state.activeId + 1 });
  };

  render() {
    return (
      <div className="ui centered grid" onClick={this.handleClick}>
        {/* <div className="center aligned column">
          <div className="ui compact menu">
            <Link id="1" to="/" className="item">
              Home
            </Link>
            <Link id="2" to="/contents" className="item">
              Contents
            </Link>
            <Link id="3" to="/" className="item">
              Also home
            </Link>
          </div>
        </div> */}
        <h3>Click me: {this.state.activeId}</h3>
      </div>
    );
  }
}

export default Categories;
