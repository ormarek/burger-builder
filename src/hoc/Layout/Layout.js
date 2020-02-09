import React, { Component } from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.scss";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  SideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  SideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Auxiliary>
        {/* TODO: Toolbar, SideDrawer, Backdrop components */}
        <Toolbar open={this.SideDrawerToggleHandler} />
        <SideDrawer
          state={this.state.showSideDrawer}
          close={this.SideDrawerCloseHandler}
        />
        <main className={classes.pageBody}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
