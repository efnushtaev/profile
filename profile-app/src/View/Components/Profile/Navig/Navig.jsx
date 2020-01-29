import React from 'react';
import classes from './../../../Styles/modules/Navig.module.scss';
import {NavLink} from 'react-router-dom';

let Navig = () => {
    return (
        <div className={classes.container}>
            <div>
                <NavLink activeClassName={classes.active} to='/Blog'>Blog</NavLink>
                <NavLink activeClassName={classes.active} to='/landings'>Landings</NavLink>
                <NavLink activeClassName={classes.active} to='/snippets'>Snippets</NavLink>
            </div>
        </div>
    )
}

export default Navig