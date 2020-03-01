import React from 'react'
import { connect } from 'react-redux'
import HeaderContent from './HeaderContent'


class HeaderContentAPI extends React.Component {
    render() {
        <HeaderContent />
    }

}
        let mapStateToProps = () => {
    
        }
        let mapDispatchToProps = () => {
    
    }

const HeaderContentContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContentAPI)

export default HeaderContentContainer