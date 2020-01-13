import React from 'react';
import classes from './Navig.module.scss';
import {NavLink} from 'react-router-dom';

let Navig = () => {
    return (
        <div className={classes.container}>
            <h3>Navig</h3>
            <NavLink to='/'>Blog</NavLink>
            <NavLink to='/landings'>Landings</NavLink>
            <NavLink to='/snippets'>Snippets</NavLink>
        </div>
    )
}

export default Navig