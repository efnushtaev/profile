import React from 'react';
import classes from './Header.module.scss';
import HeaderTitle from './HeaderTitle/HeaderTitle';

let Header = () => {
    return (
        <div className={classes.container}>
            <HeaderTitle />
            <div>
                <div className={classes.avatar}></div>
            </div>
        </div>
    )
}

export default Header