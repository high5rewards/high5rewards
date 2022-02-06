import React from "react";

import styles from "./Subscriptions.module.css";
 
import loyalBean from '../../images/loyalBean.png'

function Subscriptions() {
  return (
    <div>
        <h1>These are my subscriptions!</h1>
        <img src={loyalBean} alt='loyalBean'/>
    </div>
  );
}

export default Subscriptions;
