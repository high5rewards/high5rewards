import React from "react"
import Moralis from "moralis"

import { useNavigate } from 'react-router-dom';

const Logout_bttn = props => {

        let navigate = useNavigate();

        async function Logout() {
            await Moralis.User.logOut
            navigate("/")
            }
        return(
            <div>
                <button onClick={Logout}>disconnect wallet</button>
            </div>
            )
}
export default Logout_bttn