import React from 'react';
import classes from './navig.module.scss';
import { NavLink } from 'react-router-dom';

const Navig = props => {
  return (
    <div className={classes.container}>
      <div>
        {props.navigItems.map(e => (
          <NavLink activeClassName={classes.active} to={e.url}>
            {e.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navig;
