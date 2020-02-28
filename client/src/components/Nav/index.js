import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export function Nav() {
    return (
        <React.Fragment>
            <Router>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">Logo</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {/* TODO: How do we link here with React Router? */}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Habits</Link></li>
                            <li><Link to="/">Rewards</Link></li>
                        </ul>
                    </div>
                </nav>

                {/* TODO: How do we link here with React Router? */}
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Habits</Link></li>
                    <li><Link to="/">Rewards</Link></li>
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