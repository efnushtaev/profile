import { combineReducers, createStore } from 'redux';
import myWorksPageReducer from './reducer/myWorks-reducer';
import constantsReducer from './reducer/constants-reducer';

const reducers = combineReducers({
  myWorksPage: myWorksPageReducer,
  constants: constantsReducer
})

const store = createStore(reducers);

export default store;
