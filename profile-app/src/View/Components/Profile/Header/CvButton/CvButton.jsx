import React from 'react';
import classes from './../../../../Styles/modules/CvButton.module.scss';

let CvButton = () => {
    return (
        <div className={classes.container}>
            <a href="https://spb.hh.ru/resume/922289caff05bd8d980039ed1f356253413454" className={classes.button} to="https://google.com">CV</a>
        </div>
    )
}

export default CvButton