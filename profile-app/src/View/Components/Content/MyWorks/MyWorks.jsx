import React from 'react';
import classes from './../../../Styles/modules/MyWorks.module.scss';

let MyWorks = (props) => {
    return (
        <div className={classes.container}>
            {props.thumbnails.map(e =>
                <div>
                    <img src={e.picture} alt="" />
                </div>
            )}
        </div>)
}

export default MyWorks;