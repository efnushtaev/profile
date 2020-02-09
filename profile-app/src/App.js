import React, { Fragment } from 'react';
import Content from './View/Components/Content/Content';
import classes from './View/Styles/modules/App.module.scss';
import ProfileContainer from './View/Components/Profile/ProfileContainer';

function App() {
  return (
    <div className={classes.container}>
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
