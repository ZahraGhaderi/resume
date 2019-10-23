import React, { Component } from "react";
import { Link , Element} from "react-scroll";



class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cursor: "default",
      textDecoration: "none"
    };
  }

  hover = () => {
    this.setState({
      cursor: "pointer",
      textDecoration:
        this.state.textDecoration === "none" ? "underline" : "none"
    });
  };

  render() {
    return (
        <div>
          <div
            onMouseOver={() => {
              this.hover();
            }}
            onMouseLeave={() => {
              this.hover();
            }}
            style={{
              marginRight: "30px",
              cursor: this.state.cursor,
              textDecoration: this.state.textDecoration,
              color: this.props.color
            }}
          >
            <Link
              activeClass="active"
              to="test1"
              spy={true}
              smooth={true}
              offset={this.props.set}
              duration={500}
              delay={20}
            >
              {this.props.name}
            </Link>
            <Element name="test1" className="element"></Element>
          </div>

        </div>
    );
  }
}

export default Navigation;
