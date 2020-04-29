import React, { Component } from "react";
import searchIcon from "../assets/search.png";
export default class SearchButton extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    const styles = {
      icon: {
        position: "fixed",
        right: "0",
        bottom: "0",
        background: "#ff8906",
        borderRadius: "50%",
        margin: "5px",
        padding: "5px",
        height: "3rem",
        width: "3rem",
      },
    };
    return (
      <div onClick={this.handleClick}>
        <img style={styles.icon} src={searchIcon} alt="Ikon för sök" />
      </div>
    );
  }
}
