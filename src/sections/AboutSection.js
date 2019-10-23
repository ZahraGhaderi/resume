import React, { Component } from "react";
import DownIcon from "./../components/DownIcon";
import Fullpage from "../components/Fullpage";
import { Link, Element } from "react-scroll";
import data from "../data.json";
import "./AboutSection.css";

class AboutSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second">
          <h3 style={{ color: this.props.color }}>{data.sections[0].title}</h3>
          <div style={{ color: this.props.color }}>
            {data.sections[0].items.map(p => {
              return <p> {p.content} </p>;
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="Skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
          <DownIcon color={this.props.color} />
        </Link>
        <Element name="Skills" className="element" ></Element>
      </div>
    );
  }
}

export default AboutSection;
