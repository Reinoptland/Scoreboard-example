import React, { Component } from "react";
import Player from "./Player";
import PlayerForm from "./PlayerForm";

class Scoreboard extends Component {
  state = {
    players: [
      { id: 1, name: "Rein", score: 0 },
      { id: 2, name: "Matias", score: 5 },
      { id: 3, name: "Danny", score: 3 }
    ]
  };

  incrementScore = id => {
    console.log("Hi from Scoreboard, id:", id);
    const updatedPlayers = this.state.players.map(player => {
      if (id === player.id) {
        return { ...player, score: player.score + 1 };
      }

      return player;
    });

    this.setState({ players: updatedPlayers });
  };

  addPlayer = name => {
    console.log("Hi from scoreboard again, player:", name);
    const newPlayer = {
      name: name,
      score: 0,
      id: Math.round(Math.random() * 1000000)
    };

    this.setState({ players: this.state.players.concat(newPlayer) });
  };

  render() {
    return (
      <div>
        <PlayerForm addPlayer={this.addPlayer} />
        {this.state.players
          .sort((playerA, playerB) => playerB.score - playerA.score)
          .map(player => {
            return (
              <Player
                incrementScore={this.incrementScore}
                key={player.id}
                id={player.id}
                name={player.name}
                score={player.score}
              />
            );
          })}
      </div>
    );
  }
}

export default Scoreboard;
