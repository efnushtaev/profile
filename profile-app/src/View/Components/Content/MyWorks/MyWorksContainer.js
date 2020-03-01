
import { connect } from 'react-redux';
import React from 'react';
import MyWorks from "./MyWorks";

class MyWorksAPI extends React.Component {
   render() {
      return (
         <MyWorks thumbnails={this.props.myWorksItems.thumbnails}/>
      )
   }
}

   let mapStateToProps = (state) => {
   
      return {myWorksItems: state.myWorksPage}
      
          
   }


const MyWorksContainer = connect(mapStateToProps)(MyWorksAPI);


export default MyWorksContainer