import { connect } from 'react-redux'
import Profile from './Profile'

const mapStateToProps = (state) => {
  return {
    constants: state.constants
  }
}

export default connect(mapStateToProps)(Profile)
