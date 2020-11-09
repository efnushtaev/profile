import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './Main/Main';

import preloader from './../../Assets/img/main/preloader_gif.gif';
import { myCreatives } from '../../../mock';

const MyWorks = React.lazy(() => import('./MyWorks/MyWorks'));
const MyCreatives = React.lazy(() => import('./MyCreatives/MyCreatives'));

export const Content = ({ myWorksData }) => {
  return (
    <React.Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%'
          }}>
          <img src={preloader} />
        </div>
      }>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/about" />} />
        <Route exact path="/about" render={() => <Main />} />
        <Route
          exact
          path="/my-works"
          render={() => <MyWorks data={myWorksData} />}
        />
        <Route
          exact
          path="/design"
          render={() => <MyCreatives data={myCreatives} />}
        />
        <Route path="*" render={() => <h1>404</h1>} />
      </Switch>
    </React.Suspense>
  );
};
