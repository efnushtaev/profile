import React, { Fragment } from 'react';
import Content from './View/Components/Content/Content';
import classes from './View/Styles/modules/App.module.scss';
import ProfileContainer from './View/Components/Profile/ProfileContainer';

function App(props) {
  let scrollingRef = React.createRef();
  let scrolling = () => {
    let scrollTop = scrollingRef.current.scrollTop;
    props.setCurrentScrollTop(scrollTop);
    console.log('scrollTop ' + props.currentScrollTop);
  }
  return (
    <div onScroll={scrolling} ref={scrollingRef} className={classes.container}>
      <div className={classes.main}>
        <ProfileContainer />
      </div>
      <div className={classes.content}>
        <Content />
      </div>
    </div>
  );
}

export default App;
