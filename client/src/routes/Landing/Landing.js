import React from "react";

import styles from "./Landing.module.css";

import Landing_nav_bottom from "./components/landing_nav_bottom"
import Landing_nav_top from "./components/landing_nav_top"
import Login_bttn from "./components/login_bttn"

import tempLogo from '../../images/tempLogo.png'

function Landing() {
  return (
    <div id={styles.Landing}>
        <Landing_nav_top />

        <h3 className={styles.header}>Rewards for Humanity</h3>
        <img id={styles.logo} src={tempLogo} />
        <p className={styles.header}>High Five Rewards is an open source
        and non-custodial platform</p>
        <p className={styles.header}>for purchasing subscription NFTs and earning
        rewards at your favorite businesses</p>



        <Login_bttn />

        <Landing_nav_bottom />
    </div>
  );
}

export default Landing;
