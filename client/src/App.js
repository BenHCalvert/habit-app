import React, { Component } from "react";
import Habits from "./pages/Habits";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';

function App() {
    return (
      <Router>
        <div>
          <Switch>
            {/* need to change default route to login page */}
            <Route exact path="/" component={Habits}/>
            <Route exact path="/habits" component={Habits}/>            
          </Switch>
        </div>
      </Router>
    );
}

export default App;
