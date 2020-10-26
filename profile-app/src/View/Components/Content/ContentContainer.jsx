
import { connect } from 'react-redux';
import React from 'react';
import Content from './Content';
import classes from './Content.module.scss';

class ContentContainer extends React.Component {
  render () {
    return <Content
      className={classes.contentBody}
      thumbnails={this.props.thumbnails}
      spaItems={this.props.spaItems}
    />;
  }
}

const mapStateToProps = state => {
  return {
    thumbnails: state.myWorksPage.thumbnails,
    spaItems: state.myWorksPage.spaItems
  };
};

export default connect(mapStateToProps)(ContentContainer);
