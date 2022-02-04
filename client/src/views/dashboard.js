import { navigate } from "@reach/router"
import Moralis from "moralis"
import React from "react"
import LogoutBttn from "../components/logoutBttn"


const Dashboard = props => {

    async function Logout() {
        await Moralis.User.logOut()
        navigate("/")
    }
        return(
            <div>
                <h1>Welcome to the User Dashboard</h1>
                <LogoutBttn />
            </div>
            )
}
export default Dashboard