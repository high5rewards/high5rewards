import React from "react";

import styles from "./ChosenNFT.module.css";

import Logout_bttn from "../../components/logout_bttn"
import Main_nav from "../../components/main_nav"

function ChosenNFT() {
  return (
    <div>
        <Main_nav/>
        <h1>NFT 1 details</h1>
        <Logout_bttn />
    </div>
  );
}

export default ChosenNFT;
