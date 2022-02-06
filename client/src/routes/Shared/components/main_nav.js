import React from "react";

import { Link } from "react-router-dom";

const Main_nav = props => {
    return(

        <ul>
            <Link to='marketplace'>Marketplace</Link>
            <Link to='subscriptions'>Subscriptions</Link>
            <Link to='vendor'>Vendor Dashboard</Link>
        </ul>

        )
}
export default Main_nav