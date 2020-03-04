import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { Default } from "./LoginNav";


export function Nav() {
    return (
        <React.Fragment>
            <Router>
                <nav>
                    <div class="nav-wrapper">
                        <a href="#!" class="brand-logo">Logo</a>
                        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                        <ul class="right hide-on-med-and-down">
                            {/* TODO: How do we link here with React Router? */}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Habits</Link></li>
                            <li><Link to="/">Rewards</Link></li>
                            <li><Link to="/">Login</Link></li>

                        </ul>
                    </div>
                </nav>

                {/* TODO: How do we link here with React Router? */}
                <ul class="sidenav" id="mobile-demo">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Habits</Link></li>
                    <li><Link to="/">Rewards</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>

                {/* <Switch>
                    <Route path="/">
                        <Habits />
                    </Route>
                </Switch> */}
            </Router>
        </React.Fragment>
    );
}

export default Nav;