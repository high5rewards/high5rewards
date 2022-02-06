import React from "react";

import { Link } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


import styles from './main_nav.module.css'

const Main_nav = props => {

    //track the current tab
    const [val, setValue] = React.useState(0)
    const changeTab = (e, newVal) =>{
        setValue(newVal)
    }

    return(

        <nav>

            <Tabs value={val} onChange={changeTab} textColor={'#00e676'} TabIndicatorProps={{
                style:{
                    backgroundColor: "#00e676"
                }
            }}>
                <Tab component={Link} to='marketplace' label='Marketplace'/>
                <Tab component={Link} to='subscriptions' label='Subscriptions'/>
                <Tab component={Link} to='vendor' label='Vendor Dashboard'/>
            </Tabs>

        </nav>

        )
}
export default Main_nav