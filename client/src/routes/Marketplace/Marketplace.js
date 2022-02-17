import React from "react";

import styles from "./Marketplace.module.css";

import { navigate } from "@reach/router"
import Moralis from "moralis"

import Store_card from "./components/store_card"

import coffee from '../../images/coffee.png'
import wine from '../../images/wine.png'

// display vendors who have deployed subscription NFTs on the platform
const Marketplace = props => {
    const storeName0 = "Mocha Madness"
    const storeDesc0 = 'A coffee shop where devs get together.'

    const storeName1 = "Aya's Winery"
    const storeDesc1 = 'Treat yourself with a bottle of natural wine.'


    return(
        <div>     
            <div id={styles.stores}>
                {/* Iterate through the vendor list */}
                <Store_card storeName={storeName0} storeDesc={storeDesc0} storeImg={coffee} />

                <Store_card storeName={storeName1} storeDesc={storeDesc1} storeImg={wine} />
            </div>
        </div>
    )
}
export default Marketplace