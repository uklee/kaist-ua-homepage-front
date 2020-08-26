import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import * as pages from "./components/pages";

import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <Switch>
      <Route path="/web/main" component={pages.MainPage} />
      <Route
        path="/web/auth/agreement/:login"
        component={pages.AuthAgreementPage}
      />
      <Route path="/web/auth/agreement" component={pages.AuthAgreementPage} />
      <Route path="/web/post/:postId" component={pages.PostViewPage} />
      <Route path="/web/bulletin/:bulletinId" component={pages.BulletinPage} />
      <Route
        path="/web/user/bulletin/:bulletinId"
        render={props => <pages.BulletinPage {...props} isUser={true} />}
      />
      <Route path="/web/edit" component={pages.EditPage} />
      <Route path="/web/user/edit" component={pages.EditPage} />
      <Route path="/web/introduction" component={pages.IntroductionPage} />

      <Route path="/web/admin/login" component={pages.AdminLoginPage} />
      <ProtectedRoute
        path="/web/admin/payment"
        component={pages.AdminPaymentPage}
      />

      <Redirect to="/web/main" />
    </Switch>
  );
}

export default App;
