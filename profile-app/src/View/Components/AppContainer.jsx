import { connect } from 'react-redux';
import App from './App';
import { setCurrentScrollTopAC } from './../../Redux/reducer/myWorks-reducer';

const mapStateToProps = (state) => {
  return {
    currentScrollTop: state.myWorksPage.currentScrollTop
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentScrollTop: (currentScrollTop) => {
      dispatch(setCurrentScrollTopAC(currentScrollTop));
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
