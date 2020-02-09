import {combineReducers, createStore} from 'redux';
import landingPageReducer from './reducer/landings-reducer';
import constantsReducer from './reducer/constants-reducer';

let reducers = combineReducers({
    landingPage: landingPageReducer,
    constants: constantsReducer
})

let store = createStore(reducers);



export default store;