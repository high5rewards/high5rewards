import React from "react";

import { Outlet } from "react-router-dom";

import Main_nav from "./components/main_nav"
import Logout_bttn from "./components/logout_bttn"


import styles from "./Shared.module.css";

function Shared() {
  return (
    <div>

    <nav id={styles.Shared}>
      <h3>High 5 Rewards</h3>

      <div id={styles.sharenav}>
        < Main_nav />
        <Logout_bttn />
      </div>
    </nav>



      {/* Outlet to render nested routes */}
      <Outlet />
    </div>
  );
}

export default Shared;
