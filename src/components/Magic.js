import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic } from "@fortawesome/free-solid-svg-icons";
import { Shake } from "reshake";
import "./Magic.css";

class Magic extends Component {
  render() {
    return (
      <div className="magic">
        <Shake h={8} v={1} r={3} dur={700}>
          <FontAwesomeIcon
            icon={faMagic}
          
            color={this.props.color}
            style={{
              color: this.props.color,
              marginTop: "-20px"
            }}
          />
          <br />
          <text className="txtmagic" style={{ color: this.props.color }}>
            click me!
          </text>
        </Shake>
      </div>
    );
  }
}

export default Magic;
