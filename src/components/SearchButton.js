import React, { Component } from "react";
import searchIcon from "../assets/search.png";
export default class SearchButton extends Component {
  render() {
    const styles = {
      icon: {
        position: "fixed",
        right: "0",
        bottom: "0",
        background: "#ff8906",
        marginBottom: "5px",
        marginRight: "5px",
        padding: "5px",
        height: "3rem",
        width: "3rem",
      },
    };
    return (
      <div>
        <img style={styles.icon} src={searchIcon} alt="Ikon för sök" />
      </div>
    );
  }
}
