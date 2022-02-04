import React from "react"
import Moralis from "moralis"

const LoginBttn = props => {
        async function onClick() {
            const user = await Moralis.authenticate()
            console.log(user.id)
            }
        return(
            <div>
                <button onClick={onClick}>Metamask Login</button>
            </div>
            )
}
export default LoginBttn