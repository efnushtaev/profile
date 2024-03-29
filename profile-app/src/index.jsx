import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.scss';
import './index.scss';
import AppContainer from './View/Components/AppContainer';
import * as serviceWorker from './serviceWorker';
import store from './Redux/store-redux';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
