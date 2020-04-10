import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { Home, BulletinNotice, NoticeDetail, Editor } from "./components/pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notice" component={BulletinNotice} />
        <Route path="/notice-detail" component={NoticeDetail} />
        <Route path="/edit" component={Editor}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
