import {combineReducers, createStore} from 'redux';
import myWorksPageReducer from './reducer/myWorks-reducer';
import constantsReducer from './reducer/constants-reducer';

let reducers = combineReducers({
    myWorksPage: myWorksPageReducer,
    constants: constantsReducer
})

let store = createStore(reducers);



export default store;