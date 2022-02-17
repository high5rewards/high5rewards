import React from "react"
import Moralis from "moralis"

import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import styles from './login_bttn.module.css'

// handle Moralis login and routing
const Login_bttn = props => {

        let navigate = useNavigate();

        async function Login() {
            try {
                const user = await Moralis.authenticate()
                console.log('user auth', user.id)
                navigate('app/marketplace')
            } catch(e) {
                console.log(e)
                navigate('app/marketplace')
            }
        }
            
        return(
            <div id={styles.logbtn}>
                <Button onClick={Login} variant='contained' size="large" style={{
                color: '#424242',
                backgroundColor: '#00e676',
            }}>connect wallet</Button>
            </div>
            )


}
export default Login_bttn