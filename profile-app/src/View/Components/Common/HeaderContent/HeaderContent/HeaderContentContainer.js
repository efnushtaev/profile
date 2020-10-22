import React from 'react'
import { connect } from 'react-redux'
import HeaderContent from './HeaderContent'

class HeaderContentAPI extends React.Component {
  render () {
    <HeaderContent />
  }
}
const mapStateToProps = () => {

}
const mapDispatchToProps = () => {

}

const HeaderContentContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContentAPI)

export default HeaderContentContainer
