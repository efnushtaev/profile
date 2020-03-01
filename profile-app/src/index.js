import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.scss';
import './index.scss';
import AppContainer from './AppContainer';
import * as serviceWorker from './serviceWorker';
import store from './Redux/store-redux';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>

            <AppContainer/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();