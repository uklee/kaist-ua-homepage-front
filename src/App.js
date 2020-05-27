import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  BulletinPage,
  EditPage,
  AdminLoginPage,
  MainPage,
  PostViewPage
} from "./components/pages";

function App() {
  React.useEffect(() => {
    console.log("hihihi");
  }, []);

  return (
    <Switch>
      <Route path="/web/main" component={MainPage} />
      <Route path="/web/admin" component={AdminLoginPage} />
      <Route path="/web/post/:postId" component={PostViewPage} />
      <Route path="/web/bulletin/:bulletinId" component={BulletinPage} />
      <Route path="/web/user/bulletin/:bulletinId" component={BulletinPage} />
      <Route path="/web/edit" component={EditPage} />
      <Route path="/web/user/edit" component={EditPage} />
      <Redirect to="/web/main" />
    </Switch>
  );
}

export default App;
