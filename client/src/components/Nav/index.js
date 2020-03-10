import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { Default } from "./LoginNav";
import "./Nav.css"


export function Nav() {
    return (
        <> 
    
            <nav>
                    
                    <div className="nav-wrapper">
                    <a href="/habits" className="brand-logo">Yourname - Star Chart</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">

                        {/* TODO: How do we link here with React Router? */}
                        <li><Link to="/habits">Habits</Link></li>
                        <li><Link to="/rewards">Rewards</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </div>
            </nav>

            {/* TODO: How do we link here with React Router? */}
            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/habits">Habits</Link></li>
                <li><Link to="/rewards">Rewards</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/profile">Profile</Link></li>

            </ul>
        </>
    );
}

export default Nav;