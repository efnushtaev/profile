import React from 'react';
import classes from './header.module.scss';
import CvButton from './CvButton/CvButton';
import HeaderTitle from './HeaderTitle/HeaderTitle';

const Header = () => {
  return (
    <div className={classes.container}>
      <HeaderTitle />
      <div className={classes.subHeader}>
        <div className={classes.avatar}></div>
        <CvButton />
      </div>
    </div>
  );
};

export default Header;
