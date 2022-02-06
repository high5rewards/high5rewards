import React from "react";

import MintButton from './components/MintButton';

import styles from "./VendorDashboard.module.css";

/**Todo
 * 
 * mint button
 * display NFTs already minted
 * 
 *   vendorId: BigNumber { value: "1" },
  vendorAddress: '',
  vendorName: 'Mocha Madness',
  vendorBio: 'Coffee Shop',
  vendorCity: 'Amsterdam'
 */

function VendorDashboard() {
  return (
    <div>
        <h1>VendorDashboard</h1>
        <div>Edit profile: vendor name, location</div>
        <div>Display NFTs already minted</div>
        <MintButton />
    </div>
  );
}

export default VendorDashboard;
