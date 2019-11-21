import React, { Component } from "react";

class Player extends Component {
  handleClick = () => {
    this.props.incrementScore(this.props.id);
  };
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <p>Score: {this.props.score}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default Player;
