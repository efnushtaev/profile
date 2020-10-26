import React from 'react';
import ContentHeader from '../Components/Content/Header/ContentHeader';

export const withContentHeader = Component => {
  class ContentHeaderComponent extends React.Component {
    render () {
      return (
        <>
          <ContentHeader/>
          <Component {...this.props} />
        </>
      );
    }
  }

  return ContentHeaderComponent;
};
