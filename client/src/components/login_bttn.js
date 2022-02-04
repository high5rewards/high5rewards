import React from "react"
import Moralis from "moralis"
import { navigate } from '@reach/router'

const Login_bttn = props => {
        async function Login() {
            const user = await Moralis.authenticate()
            console.log(user.id)
            navigate("/marketplace")
            }
        return(
            <div>
                <button onClick={Login}>Enter App</button>
            </div>
            )
}
export default Login_bttn