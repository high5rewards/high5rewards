import React from "react"
import Landing_nav_bottom from "../components/landing_nav_bottom"
import Landing_nav_top from "../components/landing_nav_top"
import Login_bttn from "../components/login_bttn"


const Landing = props => {
        return(
            <div>
                <Landing_nav_top />
                <h1>This is the landing page</h1>
                <Login_bttn />
                <Landing_nav_bottom />
            </div>
            )
}
export default Landing