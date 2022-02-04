import React from "react"
import Moralis from "moralis"
import { navigate } from '@reach/router'

const LogoutBttn = props => {
        async function Logout() {
            await Moralis.User.logOut
            navigate("/")
            }
        return(
            <div>
                <button onClick={Logout}>Leave App</button>
            </div>
            )
}
export default LogoutBttn