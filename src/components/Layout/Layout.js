import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.module.scss";

const Layout = props => (
  <Auxiliary>
    {/* TODO: Toolbar, SideDrawer, Backdrop components */}
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.pageBody}>{props.children}</main>
  </Auxiliary>
);

export default Layout;
