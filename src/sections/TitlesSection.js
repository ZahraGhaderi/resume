import React, { Component } from "react";
import {
  faGithub,
  faCodepen,
  faStackOverflow,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownIcon from "./../components/DownIcon";
import Fullpage from "../components/Fullpage";
import { Link, Element } from "react-scroll";
import { ShakeVertical } from "reshake";
import data from "../data.json";
import "./TitleSection.css";

const list = [faGithub, faStackOverflow, faLinkedin, faCodepen];

class TitlesSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="first">
          <h1 style={{ color: this.props.color }}>{data.title}</h1>
          <div>
            <h2 style={{ color: this.props.color }}>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map((key, index) => {
              return (
                <ShakeVertical h={2} v={15} r={5} dur={700}>
                  <div className="icon">
                    <a href={data.links[key]}>
                      <FontAwesomeIcon
                        icon={list[index]}
                        size="3x"
                        style={{ color: this.props.color }}
                      />
                    </a>
                  </div>
                </ShakeVertical>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={10}
          duration={500}
          delay={0}
        >
          <DownIcon color={this.props.color} />
        </Link>
        <Element name="About" className="element"></Element>
      </div>
    );
  }
}

export default TitlesSection;
