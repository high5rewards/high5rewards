import React from "react";

import { Outlet } from "react-router-dom";

import Main_nav from "./components/main_nav"

import styles from "./Shared.module.css";

// top nav to share between app routes
function Shared() {
  return (
    <div>

    <nav id={styles.Shared}>
      <h3>High 5 Rewards</h3>

      <div id={styles.sharenav}>
        < Main_nav />
      </div>
    </nav>



      {/* Outlet to render nested routes */}
      <Outlet />
    </div>
  );
}

export default Shared;
