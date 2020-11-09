import React from 'react';
import classes from './headerTitle.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderTitle = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <NavLink to="/">
          <p className={classes.title_header}>
            Ef<span>.</span>Nushtaev
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderTitle;
