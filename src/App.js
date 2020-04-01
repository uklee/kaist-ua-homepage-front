import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import {
  MainPage,
  BulletinPage,
  DetailPage,
  EditPage
} from "./components/pages";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main" component={MainPage} />
        <Route
          path="/bulletin/:bulletinId/post/:postId"
          component={DetailPage}
        />
        <Route path="/bulletin/:bulletinId" component={BulletinPage} />
        <Route path="/edit" component={EditPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
