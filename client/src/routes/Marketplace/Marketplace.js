import React from "react";

import styles from "./Marketplace.module.css";

import { navigate } from "@reach/router"
import Moralis from "moralis"

import Store_card from "./components/store_card"



const Marketplace = props => {
    const storeName = "Mocha Madness"

    return(
        <div>
            <h1>This is the Marketplace</h1>            
            <div>
            {/* Iterate through the vendor list */}
            <Store_card storeName={storeName} />
            </div>
        </div>
    )
}
export default Marketplace