import React, { Component } from "react";
import { Link } from "react-router-dom";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { activeId: 1 };
  }

  handleClick = () => {
    this.setState({ activeId: 1 });
  };

  render() {
    return (
      <div className="ui centered grid" onClick={this.handleClick}>
        <div className="center aligned column">
          <div className="ui compact menu">
            <Link id="1" to="/" className="item">
              Living room
            </Link>
            <Link id="2" to="/contents" className="item">
              Bedroom
            </Link>
            <Link id="3" to="/" className="item">
              Office
            </Link>
            <Link id="3" to="/" className="item">
              Outdoor and Picnic
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
