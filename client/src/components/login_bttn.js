import React from "react"
import Moralis from "moralis"

import { useNavigate } from 'react-router-dom';

const Login_bttn = props => {

        let navigate = useNavigate();

        async function Login() {
            const user = await Moralis.authenticate()
            console.log(user.id)
            navigate('app/marketplace')
            }
            
        return(
            <div>
                <button onClick={Login}>Enter App</button>
            </div>
            )
}
export default Login_bttn