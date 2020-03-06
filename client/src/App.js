import React, { Component } from "react";
import Habits from "./pages/Habits";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
// import Home from "./pages/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth.js";
import NoMatch from "./pages/NoMatch";
import LoginNav from "./components/Nav/LoginNav";
import { Container } from 'reactstrap';
import UserProvider from "./context";



function App() {
    return (
      <UserProvider>
      <Router>
        <div>
          <LoginNav />
          <Container>
          <Switch>
            {/* need to change default route to login page */}
            <Route exact path="/" component={Habits}/>
            <Route exact path="/habits" component={Habits}/>   
            <Route exact path="/login" component={() => <Auth action="login" />}  />
              <Route exact path="/signup" component={() => <Auth action="signup" />}  />
              <Route exact path="/profile" component={Profile} />
              <Route component={NoMatch} />

          </Switch>
          </Container>
        </div>
      </Router>
      </UserProvider>
    );
}

export default App;
