import { myWorksData } from '../../mock';

const SET_CURRENT_SCROLLTOP = 'SET_CURRENT_SCROLLTOP';

const initialState = {
  ...myWorksData
};

export const myWorksPageReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_CURRENT_SCROLLTOP: {
    return {
      ...state,
      currentScrollTop: action.currentScrollTop
    };
  }
  default:
    return state;
  }
};

export const setCurrentScrollTopAC = (currentScrollTop) => ({
  type: SET_CURRENT_SCROLLTOP,
  currentScrollTop: currentScrollTop
});

export default myWorksPageReducer;
