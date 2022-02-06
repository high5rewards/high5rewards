import React from "react"
import Moralis from "moralis"

import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import styles from './logout_bttn.module.css'

const Logout_bttn = props => {

        let navigate = useNavigate();

        async function Logout() {
            await Moralis.User.logOut
            navigate("/")
            }
        return(
            <div id={styles.logout}>
                <Button onClick={Logout} variant='outlined' size="small" style={{
                    color: '#00e676',
                    borderColor: '#00e676',
                }}>disconnect wallet</Button>
            </div>
            )
}
export default Logout_bttn