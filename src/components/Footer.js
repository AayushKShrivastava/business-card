import React from "react"
import twitter from "../images/Twitter.png"
import facebook from "../images/Facebook.png"
import Insta from "../images/Insta.png"
import github from "../images/GitHub.png"

export default function Info(){
    return (
        <footer>
            <img src={twitter} />
            <img src={facebook} />
            <img src={Insta} />
            <img src={github} />
        </footer>
    )
}