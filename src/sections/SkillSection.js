import React, { Component } from "react";
import SkillCard from "./../components/SkillCard";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import "./SkillSection.css";

class SkillSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="third">
          <h3 style={{ color: this.props.color }}>{data.sections[1].title}</h3>
          <div className="cards-wrapper">
            {data.sections[1].items.map(eachSkill => {
              return <SkillCard skill={eachSkill} color={this.props.color} />;
            })}
          </div>
        </Fullpage>
      </div>
    );
  }
}

export default SkillSection;
