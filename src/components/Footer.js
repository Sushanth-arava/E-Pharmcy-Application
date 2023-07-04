import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-primary text-center bg-dark mt-3 h-25 "
        style={{ width: "100%" }}
      >
        <h6 className="navbar-brand text-light text-center mx-auto" href="">
          &copy; Since 2022 Onine-MedicalHub owned by Sushanth Arava 
          </h6>
      </nav>
    );
  }
}
