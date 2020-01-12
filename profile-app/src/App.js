import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './View/Components/Profile/Profile';
import Content from './View/Components/Content/Content';

import classes from './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <div  className={classes.main}>
          <Profile /> 
        </div>
        <div className={classes.content}>
          <Content />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
