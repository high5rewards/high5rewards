import React from "react"
import Moralis from "moralis"
import { navigate } from '@reach/router'

const Logout_bttn = props => {
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
export default Logout_bttn