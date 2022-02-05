import React from "react"
import Moralis from "moralis"

import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';


const Login_bttn = props => {

        let navigate = useNavigate();

        async function Login() {
            const user = await Moralis.authenticate()
            console.log(user.id)
            navigate('app/marketplace')
            }
            
        return(
            <div>
                <Button onClick={Login} variant='contained' size="small" color="success">Enter App</Button>
            </div>
            )
}
export default Login_bttn