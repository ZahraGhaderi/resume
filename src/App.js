import React, { Component } from "react";
import TitlesSection from "./sections/TitlesSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navigation from "./components/Navigation";
import SnowStorm from "react-snowstorm";
import Magic from "./components/Magic";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#22a6b3",
      counter: 0
    };
  }

  changerColor = () => {
    let rang = ["#4834d4", "#3d3d3d", "#B53471", "#303952"];
    if (this.state.counter >= 3) {
      this.setState({
        counter: 0,
        color: rang[this.state.counter]
      });
    } else {
      this.setState({
        color: rang[this.state.counter],
        counter: this.state.counter + 1
      });
    }
  };

  render() {
    return (
      <div className="App">
        <SnowStorm
          snowColor={this.props.color}
          followMouse={false}
          flakesMax={180}
          VMaxY={3}
          VMaxX={2}
        />
        <div className="navigation" style={{ color: this.state.color }}>
          <Navigation name="About" set={700} />
          <Navigation name="Skills" set={1400} />
        </div>

        <div
          onClick={() => {
            this.changerColor();
          }}
          className="box"
        >
          <Magic color={this.state.color} />
        </div>

        <TitlesSection color={this.state.color} />

        <AboutSection color={this.state.color} />

        <SkillSection color={this.state.color} />
      </div>
    );
  }
}

export default App;
