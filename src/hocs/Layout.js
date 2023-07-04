import React, { Component } from "react";
import Navbar from "../components/Navbar";
class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar branding="MedHub_Store" />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
