import React from 'react';
import classes from './../../../../Styles/modules/HeaderTitle.module.scss';

let HeaderTitle = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <p className={classes.title_header}>Ef<span>.</span>Nushtaev</p>
            </div>
        </div>
    )
}

export default HeaderTitle