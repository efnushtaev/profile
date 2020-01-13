import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Profile from './View/Components/Profile/Profile';
import Content from './View/Components/Content/Content';
import Landings from './View/Components/Content/Landings/Landings';
import classes from './App.module.scss';

function App() {
  return (
      <div className={classes.container}>
        <div  className={classes.main}>
          <Profile /> 
        </div>
        <div className={classes.content}>
          <Content />
        </div>
      </div>
  );
}

export default App;
