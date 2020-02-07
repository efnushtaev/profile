import {combineReducers, createStore} from 'redux';
import landingPageReducer from './reducer/landings-reducer';

let reducers = combineReducers({
    landingPage: landingPageReducer
})

let store = createStore(reducers);



export default store;