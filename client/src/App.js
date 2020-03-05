import React, { Component } from "react";
import Habits from "./pages/Habits";
import Rewards from "./pages/Rewards";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import { HabitProvider } from "./utils/GlobalHabitState"; 
import { RewardProvider } from "./utils/GlobalRewardState"; 

function App() {
    return (
      <Router>
        <div>
          <HabitProvider>
            <Switch>
              <Route exact path="/" component={Habits}/>
              <Route exact path="/habits" component={Habits}/>            
            </Switch>
          </HabitProvider>
          <RewardProvider>
            <Switch>
              <Route exact path="/rewards" component={Rewards}/>            
            </Switch>
          </RewardProvider>
        </div>
      </Router>
    );
}

export default App;
