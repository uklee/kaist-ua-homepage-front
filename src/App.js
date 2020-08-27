import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import * as pages from "./components/pages";

import ProtectedRoute from "./auth/ProtectedRoute";
import UserRoute from "./auth/UserRoute";

function App() {
  return (
    <Switch>
      <Route path="/web/main" component={pages.MainPage} />

      <Route path="/web/introduction" component={pages.IntroductionPage} />
      <Route path="/web/bulletin/:bulletinId" component={pages.BulletinPage} />
      <Route path="/web/post/:postId" component={pages.PostViewPage} />

      <Route path="/web/admin/login" component={pages.AdminLoginPage} />
      <ProtectedRoute
        path="/web/admin/payment"
        component={pages.AdminPaymentPage}
      />
      <Route path="/web/admin/edit" component={pages.EditPage} />

      <Route
        path="/web/auth/agreement/:login"
        component={pages.AuthAgreementPage}
      />
      <Route path="/web/auth/agreement" component={pages.AuthAgreementPage} />

      <UserRoute path="/web/user/studentFee" component={pages.StudentFeePage} />

      <Redirect to="/web/main" />
    </Switch>
  );
}

export default App;
