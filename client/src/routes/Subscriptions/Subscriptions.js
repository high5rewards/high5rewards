import React from "react";

import styles from "./Subscriptions.module.css";
 
import loyalBean from '../../images/loyalBean.png'
import wine from '../../images/wine.png'
import rewardCoffee from '../../images/rewardCoffee.png'

function Subscriptions() {
  return (
    <div id={styles.subs}>

      <h3>Active Subscriptions</h3>
      <div className={styles.sublist}>

        <div className={styles.subcard}>
          <img className={styles.mySub} src={loyalBean} alt='loyalBean'/>
          <div className={styles.label}>
            <div>6 months</div>
            <div>Mocha Madness</div>
          </div>
        </div>

        <div className={styles.subcard}>
          <img className={styles.mySub} src={wine} alt='wine'/>
          <div className={styles.label}>
            <div>3 months</div>
            <div>Aya's Winery</div>
          </div>
        </div>

      </div>

      <h3 id={styles.rewards}>Rewards</h3>
      <div className={styles.subcard}>
        <img className={styles.mySub} src={rewardCoffee} alt='rewardCoffee'/>
        <div className={styles.label}>
            <div>1 month free coffee!</div>
            <div>Mocha Madness</div>
        </div>
      </div>


    </div>
  );
}

export default Subscriptions;
