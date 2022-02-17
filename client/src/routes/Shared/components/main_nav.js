import React from "react";

import { Link } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Button from '@mui/material/Button';

import Logout_bttn from "./logout_bttn";

import styles from './main_nav.module.css'

// navigate between main app routes
const Main_nav = props => {

    //track the current tab
    const [val, setValue] = React.useState(0)
    const changeTab = (e, newVal) =>{
        setValue(newVal)
    }

    //state visibility of hamburger menu on small screens
    const [isVis, setVis] = React.useState(false);
    const ToggleVis = () => {
        setVis(!isVis);
        console.log(isVis);
    }

    return(

        <nav id={styles.mainNav}>

            <div id={styles.desktop}>
                {/* Navigation tabs and logout button */}

                <Tabs value={val} onChange={changeTab} textColor={'#00e676'} TabIndicatorProps={{
                    style:{
                        backgroundColor: "#00e676"
                    }
                }}>
                    <Tab component={Link} to='marketplace' label='Marketplace'/>
                    <Tab component={Link} to='subscriptions' label='Subscriptions'/>
                    <Tab component={Link} to='vendor' label='Vendor Dashboard'/>
                </Tabs>



                <Logout_bttn />

            </div>

            <div id={styles.mobile}>
                {/* hamburger icon */}
                <div id={styles.hamContainer}>
                    <IconButton  aria-label='menu' color='inherit' onClick={ToggleVis} >
                        <MenuIcon fontSize='large' />
                    </IconButton>
                </div>

                {/* menu to be displayed when hamburger clicked */}
                <div id={styles.menuContainer}>
                    <ul id={styles.menu} className={isVis ? styles.open : styles.closed}>
                        <Button color='inherit' size='large'  component={Link} to='marketplace'>Marketplace</Button>
                        <Button color='inherit' size='large' component={Link} to='subscriptions'>Subscriptions</Button>
                        <Button color='inherit' size='large' component={Link} to='vendor'>Dashboard</Button>
                        <Button color='inherit' size='large' component={Link} to='/'>Disconnect Wallet</Button>
                    </ul>
                </div>
            </div>
        </nav>

        )
}
export default Main_nav