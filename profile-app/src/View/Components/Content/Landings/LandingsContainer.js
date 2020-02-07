
import { connect } from 'react-redux'
import Landings from "./Landings";

const mapStateToProps = (state) => {

   return {landingItems: state.landingPage}
   
       
}

export default connect(mapStateToProps)(Landings)