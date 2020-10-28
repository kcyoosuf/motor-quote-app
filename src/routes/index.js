import React, { lazy, Suspense } from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import appRoutes from '../constants/appRoutes'

import PageLoader from "../components/common/PageLoader";
import PageContainer from "../components/common/PageContainer";

const Quote = lazy(() => import('../screens/quote'))

export const history = createBrowserHistory();
export default () => (
  <Router history={history}>
    <PageContainer>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route exact path={appRoutes.ROOT} render={() => (<Redirect to={appRoutes.QUOTE} />)} />
          <Route exact path={appRoutes.QUOTE} component={Quote} />
        </Switch>
      </Suspense>
    </PageContainer>
  </Router>
);