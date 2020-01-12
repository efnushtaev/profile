import React from 'react';
import classes from './Header.module.scss';

let Header = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <p className={classes.title_header}>Ef<span className={classes.title_headerAccent}>.</span>Nushtaev
                    </p>
            </div>
            
        </div>
    )
}

export default Header