import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.scss";

const Layout = props => (
  <Auxiliary>
    {/* TODO: Toolbar, SideDrawer, Backdrop components */}
    <Toolbar />
    <SideDrawer />
    <main className={classes.pageBody}>{props.children}</main>
  </Auxiliary>
);

export default Layout;
