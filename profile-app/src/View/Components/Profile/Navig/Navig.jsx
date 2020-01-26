import React from 'react';
import classes from './../../../Styles/modules/Navig.module.scss';
import {NavLink} from 'react-router-dom';

let Navig = () => {
    return (
        <div className={classes.container}>
            <div>
                <p><NavLink to='/'>Blog</NavLink></p>
                <p><NavLink to='/landings'>Landings</NavLink></p>
                <NavLink to='/snippets'>Snippets</NavLink>
            </div>
        </div>
    )
}

export default Navig