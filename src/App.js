import React, { Component } from "react";

import LasseHandler from "./components/LasseHandler";

import winnerback from "./data/winnerback.json";

export default class App extends Component {
  state = {
    data: [],
    hasLoaded: false,
  };
  async componentDidMount() {
    this.setState({
      data: winnerback,
      hasLoaded: true,
    });
  }

  render() {
    const styles = {
      header: {
        paddingTop: "1rem",
        marginBottom: "2rem",
      },
      headerText: {
        textAlign: "center",
        fontSize: "3rem",
        fontFamily: "Verdana, Arial, sans-serif",
        color: "black",
      },
    };
    return (
      <div>
        <header style={styles.header}>
          <h1 style={styles.headerText}>Winnerbäcks Texter</h1>
        </header>
        <div>
          {!this.state.hasLoaded ? (
            <div>
              <h2>Laddar...</h2>
            </div>
          ) : (
            <LasseHandler data={this.state.data} />
          )}
        </div>
      </div>
    );
  }
}
