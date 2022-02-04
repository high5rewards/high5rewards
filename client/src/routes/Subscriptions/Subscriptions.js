import React from "react";

import styles from "./Subscriptions.module.css";

import Main_nav from "../../components/main_nav"
import Logout_bttn from "../../components/logout_bttn"


function Subscriptions() {
  return (
    <div>
        < Main_nav />
        <h1>These are my subscriptions!</h1>
        <Logout_bttn />
    </div>
  );
}

export default Subscriptions;
