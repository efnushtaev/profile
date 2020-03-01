import { connect } from "react-redux";
import App from "./App";
import { setCurrentScrollTopAC } from "./Redux/reducer/myWorks-reducer";

let mapStateToProps = (state) => {
    return {
        currentScrollTop: state.myWorksPage.currentScrollTop,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentScrollTop: (currentScrollTop) => {
            dispatch(setCurrentScrollTopAC(currentScrollTop))
        }
    }
}
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer;