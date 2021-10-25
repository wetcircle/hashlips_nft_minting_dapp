import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home.js"
import Mint from "./Mint.js"
export default function App() {
  return (
<Router>    
<Switch>

<Route path="/mint">
            <Mint />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>

</Router>

);
}
