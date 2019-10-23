import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { ShakeVertical } from "reshake";

class DownIcon extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-85px",
          transform: "translateY(-45px)"
        }}
      >
        <div style={{ maxWidth: "30px" }}>
          <ShakeVertical h={1} v={10} r={5} dur={700}>
            <FontAwesomeIcon icon={faSortDown} size="4x" style={{color:this.props.color}}/>
          </ShakeVertical>
        </div>
        
      </div>
    );
  }
}
export default DownIcon;
