import React, { Component } from "react";

import LasseHandler from "./components/LasseHandler";
import Header from "./components/Header";
import SearchButton from "./components/SearchButton";

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
    return (
      <div style={{ whiteSpace: "pre-line" }}>
        <Header />

        <div>
          {!this.state.hasLoaded ? (
            <div>
              <h2>Laddar...</h2>
            </div>
          ) : (
            <LasseHandler data={this.state.data} />
          )}
        </div>
        <SearchButton />
      </div>
    );
  }
}
