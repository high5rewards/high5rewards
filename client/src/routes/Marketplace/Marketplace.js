import React from "react";

import styles from "./Marketplace.module.css";

import { navigate } from "@reach/router"
import Moralis from "moralis"

import Logout_bttn from "../../components/logout_bttn"
import Main_nav from "../../components/main_nav"
import Store_card from "../../components/store_card"



const Marketplace = props => {
    const storeName = "Mocha Maddness"

    return(
        <div>
            < Main_nav />
            <h1>This is the Marketplace</h1>            
            <div>
            {/* Iterate through the vendor list */}
            <Store_card storeName={storeName} />
            </div>
            <Logout_bttn />
        </div>
    )
}
export default Marketplace