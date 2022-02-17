import React from "react";

import MenuIcon from '@mui/icons-material/Menu';

import styles from './landing_nav_top.module.css'

// top navbar for landing page
const Landing_nav_top = props => {
    return(
        <div id={styles.main}>
            <h4>High 5 Rewards</h4>
            <ul id={styles.toplist}>
                <li className={styles.topBtn}><h5>FAQs</h5></li>
                <li className={styles.topBtn}><h5>Developers</h5></li>
                <li className={styles.topBtn}><h5>Security</h5></li>
                <li id={styles.hamNav}><h5><MenuIcon /></h5></li>
            </ul>
        </div>
        )
}
export default Landing_nav_top