import React from "react";
import './navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar">
            <div>
                <header className="sticky top-0 z-50"></header>
                <main className="relative"></main>
                <footer></footer>
            </div>

            <div className="navbar-center">
                <ul className="navbar-links">
                    <li>
                        <a href="/homepage"></a>
                    </li>
                    <li>
                        <a href="/about"></a>
                    </li>
                    <li>
                        <a href="/projects"></a>
                    </li>
                    <li>
                        <a href="/contact"></a>
                    </li>
                </ul>   
            </div>
        </nav>
    );
};

export default Navbar;
