import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  MainPage,
  BulletinPage,
  DetailPage,
  EditPage
} from "./components/pages";

function App() {
  return (
    <Switch>
      <Route path="/main" component={MainPage} />
      <Route path="/post/:postId" component={DetailPage} />
      <Route path="/bulletin/:bulletinId" component={BulletinPage} />
      <Route path="/user/bulletin/:bulletinId" component={BulletinPage} />
      <Route path="/edit" component={EditPage} />
      <Route path="/user/edit" component={EditPage} />
      <Redirect to="/main" />
    </Switch>
  );
}

export default App;
