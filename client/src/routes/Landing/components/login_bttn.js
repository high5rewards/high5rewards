import React from "react"
import Moralis from "moralis"

import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import styles from './login_bttn.module.css'

const Login_bttn = props => {

        let navigate = useNavigate();

        async function Login() {
            const user = await Moralis.authenticate()
            console.log(user.id)
            navigate('app/marketplace')
            }
            
        return(
            <div id={styles.logbtn}>
                <Button onClick={Login} variant='outlined' size="large" style={{
                color: '#00e676',
                borderColor: '#00e676',
            }}>Enter App</Button>
            </div>
            )


}
export default Login_bttn