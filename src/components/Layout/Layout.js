import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.scss";

class Layout extends Component {
  state = {
    showSideDrower: true
  };
  SideDrawerCloseHandler = () => {
    this.setState({ showSideDrower: false });
  };
  render() {
    return (
      <Auxiliary>
        {/* TODO: Toolbar, SideDrawer, Backdrop components */}
        <Toolbar />
        <SideDrawer
          open={this.state.showSideDrower}
          close={this.SideDrawerCloseHandler}
        />
        <main className={classes.pageBody}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
