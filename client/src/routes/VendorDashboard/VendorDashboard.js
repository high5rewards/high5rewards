import React from "react";

import MintButton from './components/MintButton';

import styles from "./VendorDashboard.module.css";

/**Todo
 * 
 * mint button
 * display NFTs already minted
 */

function VendorDashboard() {
  return (
    <div>
        <h2>VendorDashboard</h2>
        <div>Edit profile: vendor name, location</div>
        <div>Display NFTs already minted</div>
        <MintButton />
    </div>
  );
}

export default VendorDashboard;
