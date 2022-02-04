import React from "react"
import Moralis from "moralis"
import { navigate } from '@reach/router'

const LoginBttn = props => {
        async function Login() {
            const user = await Moralis.authenticate()
            console.log(user.id)
            navigate("/dashboard")
            }
        return(
            <div>
                <button onClick={Login}>Enter App</button>
            </div>
            )
}
export default LoginBttn