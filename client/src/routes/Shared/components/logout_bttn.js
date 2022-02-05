import React from "react"
import Moralis from "moralis"

import { Button } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const Logout_bttn = props => {

        let navigate = useNavigate();

        async function Logout() {
            await Moralis.User.logOut
            navigate("/")
            }
        return(
            <div>
                <Button onClick={Logout} variant='contained' size="small" color="success">disconnect wallet</Button>
            </div>
            )
}
export default Logout_bttn