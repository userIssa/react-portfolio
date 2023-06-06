import { useState } from "react";
import "../styles/Navbar.css";

function MobileMenu() {
    return (
        <div id="mobile-links-div">
            <ul className="container" style={{margin: "auto"}}>
                <li className="links"><a href="#first-page">Home</a></li>
                <li className="links"><a href="#projects-section">Project</a></li>
                <li className="links"><a href="#contact-section">Contact</a></li>
            </ul>
        </div>
    )
}

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    function displayLinks() {
        setToggle(prev => !prev);
    }


    return (
        <header>
            <div id="nav-wrap" className="container">
                <nav>
                    <p id="logo">Portfolio</p>
                    <ul>
                        <li className="links"><a href="#first-page">Home</a></li>
                        <li className="links"><a href="#projects-section">Project</a></li>
                        <li className="links"><a href="#contact-section">Contact</a></li>
                    </ul>
                    <div id="menu-wrap" onClick={displayLinks}>
                        <div id="menu"></div>
                    </div>
                </nav>
            </div>
            {toggle ? <MobileMenu /> : null}
        </header>
    )
}