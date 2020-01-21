import React from 'react';
import classes from './../../../../Styles/modules/profile/header/CvButton.module.scss';

let CvButton = () => {
    return (
        <div className={classes.container}>
            <a href="google.com" className={classes.button} to="https://google.com">CV</a>
        </div>
    )
}

export default CvButton