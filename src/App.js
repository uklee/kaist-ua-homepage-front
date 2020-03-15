import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { Home, BulletinNotice } from "./components/pages";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notice" component={BulletinNotice} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
