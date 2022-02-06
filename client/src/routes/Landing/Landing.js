import React from "react";

import styles from "./Landing.module.css";

import Landing_nav_bottom from "./components/landing_nav_bottom"
import Landing_nav_top from "./components/landing_nav_top"
import Login_bttn from "./components/login_bttn"


function Landing() {
  return (
    <div id={styles.Landing}>
        <Landing_nav_top />

        <h3 className={styles.header}>Seamless</h3>
        <h3 className={styles.header}>Subscription and Rewards NFTs</h3>


        <Login_bttn />

        <Landing_nav_bottom />
    </div>
  );
}

export default Landing;
