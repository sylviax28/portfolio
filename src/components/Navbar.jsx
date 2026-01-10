import React from "react";
import "../navbar.css";

const Navbar = () => {

    return (
        <nav className="navbar sticky top-0 z-50 p-4 flex justify-between items-center bg-gray-300 bg-opacity-40">

            <div className="navbar-left">
                <ul className="navbar-left-links">
                    <li>
                        <a href="#homepage">logo</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-center">
                <ul className="navbar-links">
                    <li>
                        <a href="#homepage">homepage</a>
                    </li>
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#projects">projects</a>
                    </li>
                    <li>
                        <a href="#contact">contact</a>
                    </li>
                </ul>   
            </div>
        </nav>
    );
};

export default Navbar;
