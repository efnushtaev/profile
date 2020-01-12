import React from 'react';
import classes from './Navig.module.scss';
import {NavLink} from 'react-router-dom';

let Navig = () => {
    return (
        <div className={classes.container}>
            <h3>Navig</h3>
            <NavLink to='/landing'>Landings</NavLink>
        </div>
    )
}

export default Navig