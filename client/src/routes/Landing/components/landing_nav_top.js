import React from "react";

import styles from './landing_nav_top.module.css'

const Landing_nav_top = props => {
    return(
        <div id={styles.main}>
            <h2>High 5 Rewards</h2>
            <ul id={styles.toplist}>
                <li><h5>FAQs</h5></li>
                <li><h5>Developers</h5></li>
                <li><h5>Security</h5></li>
                <li><h5>Ξ</h5></li>
            </ul>
        </div>
        )
}
export default Landing_nav_top