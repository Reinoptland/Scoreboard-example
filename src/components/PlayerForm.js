import React, { Component } from "react";

class PlayerForm extends Component {
  state = {
    name: ""
  };
  handleChange = event => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log("submitting", this.state.name);
    this.props.addPlayer(this.state.name);
    this.setState({ name: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Player Name</label>
        <input onChange={this.handleChange} value={this.state.name} />
        <input type="submit" />
      </form>
    );
  }
}

export default PlayerForm;
