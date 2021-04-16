import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Saved from "./components/Saved";
import "./stylesheet.css"

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/using-redux" component={ Home } />
                <Route exact path="/saved" component={ Saved } />
            </Switch>
        </div>
    )
}

export default App;