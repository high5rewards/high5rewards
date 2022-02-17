import React from "react";

import styles from "./Landing.module.css";

import Landing_nav_bottom from "./components/landing_nav_bottom"
import Landing_nav_top from "./components/landing_nav_top"
import Login_bttn from "./components/login_bttn"

import tempLogo from '../../images/tempLogo.png'

//greet users, explain purpose of app
function Landing() {
  return (
    <div id={styles.Landing}>
        <Landing_nav_top />

        <h3 className={styles.header}>Rewards for Humanity</h3>
        <img id={styles.logo} src={tempLogo} />
        <p className={styles.subheader}>High Five Rewards is an open source, non-custodial platform</p>
        <p className={styles.subheader}>for purchasing subscription NFTs and earning rewards </p>
        <p className={styles.subheader}>at your favorite local businesses</p>



        <Login_bttn />

        <Landing_nav_bottom />
    </div>
  );
}

export default Landing;
