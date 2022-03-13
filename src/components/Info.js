import React from "react"
import profilePhoto from "../images/Rectangle90.png" 
import emailIcon from "../images/Icon.png"
import linkedinIcon from "../images/icons8-linkedin-50.png"

export default function Info(){
    return (
        <div className="info">
            <img src={profilePhoto} className="photo"/>
            <h1>Aayush Shrivastava</h1>
            <h3>Frontend Developer</h3>
            <h4>AayushShrivastava.com</h4>
            <div className="buttons">
                <button>
                    <img src={emailIcon}/>
                    <p>Email</p>
                </button>
                <button className="linkedin">
                    <img src={linkedinIcon}/>
                    <p>LinkedIn</p>
                </button>
            </div>
        </div>
    )
}