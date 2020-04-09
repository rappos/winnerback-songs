import React, { Component } from "react";
import SongCard from "./SongCard";

export default class LasseHandler extends Component {
  state = {
    data: this.props.data,
    hasLoaded: false,
  };
  async componentDidMount() {
    this.setState({
      hasLoaded: true,
    });
  }
  render() {
    const styles = {
      container: {
        display: "flex",
        flexDirection: "column",
        flexAlign: "center",
        alignItems: "center",
      },
      card: {},
    };
    return (
      <div style={styles.container}>
        {!this.state.hasLoaded ? (
          <div>LADDAR 2</div>
        ) : (
          this.state.data.map((item, index) => (
            <SongCard
              title={item.songTitle}
              text={item.songText}
              key={item.songTitle}
            ></SongCard>
          ))
        )}
      </div>
    );
  }
}
