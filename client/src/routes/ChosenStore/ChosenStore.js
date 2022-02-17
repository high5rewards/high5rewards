import React from "react";

import styles from "./ChosenStore.module.css";

import NFT_card from "./components/nft_card"

// display subscription NFTs and their rewards for chosen vendor
function ChosenStore() {
  return (
    <div id={styles.chosenStore}>
        <h1>Mocha Madness</h1>
        <div class="store_nft_container">
            {/* Iterate through the vendor's Sub NFT list - Use MUI pagination component if possible. Multiple card components only for show */}
            <NFT_card /> 
            <NFT_card /> 
            <NFT_card /> 
        </div>
    </div>
  );
}

export default ChosenStore;
