import React from "react";

import styles from "./Landing.module.css";

import Landing_nav_bottom from "./components/landing_nav_bottom"
import Landing_nav_top from "./components/landing_nav_top"
import Login_bttn from "./components/login_bttn"


function Landing() {
  return (
    <div>
        <Landing_nav_top />
        <img id={styles.logo} src={require('../../images/temp-logo.png')} alt='logo'/>
        <h1>This is the landing page</h1>
        <Login_bttn />
        <Landing_nav_bottom />
    </div>
  );
}

export default Landing;
