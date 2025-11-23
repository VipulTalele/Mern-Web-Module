import React, { Component } from "react";
import "./index.css";

class PlayerComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerName: "",
      players: ["Virat", "Yuvraj", "Dhoni"]
    };
  }

  handleChange = (e) => {
    this.setState({ playerName: e.target.value });
  };

  addPlayer = () => {
    if (this.state.playerName.trim() === "") return;

    this.setState({
      players: [...this.state.players, this.state.playerName],
      playerName: ""
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Cricket Players</h2>

        <ul>
          {this.state.players.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>

        <div style={{ marginTop: "15px" }}>
          <label>Player Name: </label>
          <input
            type="text"
            value={this.state.playerName}
            onChange={this.handleChange}
          />
          <button onClick={this.addPlayer}>Add Player</button>
        </div>
      </div>
    );
  }
}

export default PlayerComponent;
