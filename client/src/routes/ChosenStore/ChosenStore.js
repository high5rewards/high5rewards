import React from "react";

import styles from "./ChosenStore.module.css";

import Logout_bttn from "../../components/logout_bttn"
import Main_nav from "../../components/main_nav"
import NFT_card from "../../components/nft_card"


function ChosenStore() {
  return (
    <div>
        <Main_nav/>
        <h1>Mocha Maddness</h1>
        <div class="store_nft_container">
            {/* Iterate through the vendor's Sub NFT list - Use MUI pagination component if possible. Multiple card components only for show */}
            <NFT_card /> 
            <NFT_card /> 
            <NFT_card /> 
        </div>
        <Logout_bttn />    
    </div>
  );
}

export default ChosenStore;
