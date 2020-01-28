import React from 'react';
import classes from './../../../Styles/modules/Navig.module.scss';
import {NavLink} from 'react-router-dom';

let Navig = () => {
    return (
        <div className={classes.container}>
            <div>
                <NavLink to='/'>Blog</NavLink>
                <NavLink to='/landings'>Landings</NavLink>
                <NavLink to='/snippets'>Snippets</NavLink>
            </div>
        </div>
    )
}

export default Navig