import React from "react";

import styles from './landing_nav_bottom.module.css'

const Landing_nav_bottom = props => {
    return(
        <ul id={styles.bottomnav}>
            <li><p>Terms of Use</p></li>
            <li><p>Privacy Policy</p></li>
            <li><p>Contact</p></li>
            <li><p>Github</p></li>
            <li><p>Discord</p></li>
            <li><p>Careers</p></li>
        </ul>
        )
}
export default Landing_nav_bottom