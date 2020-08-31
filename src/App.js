import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import * as pages from "./components/pages";

import * as authAPI from "./lib/api/auth";
import ProtectedRoute from "./auth/ProtectedRoute";
import UserRoute from "./auth/UserRoute";

import { useDispatch } from "react-redux";
import { setAuth } from "./modules/auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkAuth = () => {
      authAPI
        .check()
        .then(res => {
          const newAuth = res.data;
          dispatch(setAuth(newAuth));
        })
        .catch(err => {
          console.log(err);
        });
    };
    checkAuth();
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/web/main" component={pages.MainPage} />

      <Route path="/web/introduction" component={pages.IntroductionPage} />
      <Route path="/web/board/:boardId" component={pages.BoardPage} />
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
