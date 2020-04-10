import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const styles = {
      container: {
        marginBottom: "2rem",
        background: "#ff8906",
        position: "fixed",
        top: "0",
        width: "100%",
        height: "6rem",
      },
      headerText: {
        position: "relative",
        top: "5px",
        textAlign: "center",
        fontSize: "250%",
        paddingBottom: "1rem",
        fontFamily: "Verdana, Arial, sans-serif",
        color: "#0f0e17",
      },
    };
    return (
      <div style={styles.container}>
        <h1 style={styles.headerText}>Winnerbäcks Texter</h1>
      </div>
    );
  }
}
