import React from "react";
import Auxiliary from "../../hoc/Auxiliary";

const Layout = props => (
  <Auxiliary>
    {/* TODO: Toolbar, SideDrawer, Backdrop components */}
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Auxiliary>
);

export default Layout;
