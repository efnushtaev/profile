
import { connect } from 'react-redux';
import React from 'react';
import MyWorks from "./MyWorks";
import ContentHeader from './../ContentHeader';
import classes from './../Content.module.scss';

class MyWorksAPI extends React.Component {
   render() {
      return (
         <>
         <ContentHeader />
         <MyWorks className={classes.contentBody} thumbnails={this.props.myWorksItems.thumbnails}/>
         </>
      )
   }
}

   let mapStateToProps = (state) => {
   
      return {myWorksItems: state.myWorksPage}
      
          
   }


const MyWorksContainer = connect(mapStateToProps)(MyWorksAPI);


export default MyWorksContainer