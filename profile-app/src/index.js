import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './View/Redux/Store';
import {BrowserRouter} from 'react-router-dom';

let rerenderTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <App state={state}/>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderTree(store.getState())

store.subscribe(rerenderTree)


serviceWorker.unregister();