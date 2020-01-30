import {
    createStore,
    combineReducers
} from 'redux';
import landingPageReducer from './reducer/landings-reducer';



let reducers = combineReducers({
    landingPage: landingPageReducer
})
let store = createStore(reducers);

window.store = store;

export default store;