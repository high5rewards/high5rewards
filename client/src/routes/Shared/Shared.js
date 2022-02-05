import React from "react";

import { Outlet } from "react-router-dom";

import Main_nav from "../../components/main_nav"
import Logout_bttn from "../../components/logout_bttn"


import styles from "./Shared.module.css";

function Shared() {
  return (
    <div>

      <h1>High 5 Rewards</h1>

      <div id={styles.Shared}>
        < Main_nav />
        <Logout_bttn />
      </div>


      {/* Outlet to render nested routes */}
      <Outlet />
    </div>
  );
}

export default Shared;
