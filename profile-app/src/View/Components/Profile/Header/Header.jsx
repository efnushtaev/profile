import React from 'react';
import classes from './../../../Styles/modules/profile/header/Header.module.scss';
import CvButton from './CvButton/CvButton';
import HeaderTitle from './HeaderTitle/HeaderTitle'

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