import React from 'react';
import classes from './Header.module.scss';
import HeaderTitle from './HeaderTitle/HeaderTitle';
import CvButton from './CvButton.jsx/CvButton';

let Header = () => {
    return (
        <div className={classes.container}>
            <HeaderTitle />
            <div className={classes.subHeader}>
                <div className={classes.avatar}></div>
                <CvButton />
            </div>
        </div>
    )
}

export default Header