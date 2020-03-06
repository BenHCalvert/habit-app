import React, { Component } from "react";
import Habits from "./pages/Habits";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import { HabitProvider } from "./utils/GlobalState"; 

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
        </div>
      </Router>
    );
}

export default App;
