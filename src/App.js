import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import { Home, NoticeDetail } from "./components/pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/notice-detail" component={NoticeDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
