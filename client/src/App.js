import React, { Component } from "react";
import Habits from "./pages/Habits";
import Rewards from "./pages/Rewards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';

import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth.js";
import NoMatch from "./pages/NoMatch";
import LoginNav from "./components/Nav/LoginNav";
import Nav from "./components/Nav";
import { Container } from 'reactstrap';
import UserProvider from "./context";
import { HabitProvider } from "./utils/GlobalHabitState"; 
import { RewardProvider } from "./utils/GlobalRewardState"; 


function App() {
    return (
      <>
        <UserProvider>
        <Router>
          <Nav/>
          <HabitProvider>
            <Switch>
              <Route exact path="/habits" component={Habits}/>            
            </Switch>
          </HabitProvider>

          <RewardProvider>
            <Switch>
              <Route exact path="/rewards" component={Rewards}/>            
            </Switch>
          </RewardProvider>
          <Switch>
            {/* need to change default route to login page */}
              <Route exact path="/login" component={() => <Auth action="login" />}  />
              <Route exact path="/signup" component={() => <Auth action="signup" />}  />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/"  component={() => <Auth action="login" />}  />
          </Switch>
          </Router>
        </UserProvider>
      </>
    );
}

export default App;