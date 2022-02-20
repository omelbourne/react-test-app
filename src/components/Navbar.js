import React from "react"
import reactLogo from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className="nav--icon" />
            <h3 className="nav--logo_text">ReactTest</h3>
            <h4 className="nav--title">First React Project</h4>
        </nav>
    )
}