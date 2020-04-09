import React, { Component } from "react";

export default class SongCard extends Component {
  render() {
    const styles = {
      card: {
        display: "flex",
        flexAlign: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "1rem",
        padding: "2rem",
        maxWidth: "80%",
        background: "#E6745D",
        fontFamily: "Open Sans, Arial, sans-serif",
        color: "black",
        textAlign: "center",
        borderRadius: "3rem",
      },
      header: {
        fontSize: "2rem",
        marginBottom: "1rem",
      },
      text: {
        fontSize: "1.2rem",
        maxWidth: "90%",
      },
    };
    return (
      <div style={styles.card}>
        <h1 style={styles.header}>{this.props.title}</h1>
        <p style={styles.text}>{this.props.text}</p>
      </div>
    );
  }
}
