import React from "react"
import twitter from "../images/Twitter.png"
import facebook from "../images/Facebook.png"
import Insta from "../images/Insta.png"
import github from "../images/GitHub.png"

export default function Info(){
    return (
        <footer>
            <img src={twitter} alt="twitter"/>
            <img src={facebook} alt="facebook"/>
            <img src={Insta} alt="insta"/>
            <img src={github} alt="github"/>
        </footer>
    )
}