import React from 'react';
import classes from './../../../Styles/modules/MyWorks.module.scss';

let MyWorks = (props) => {
    return (
        <div className={classes.container}>
            {props.thumbnails.map(e =>
            <a target="_bind" href={e.url}>
                <div className={classes.itemContainer}>
                    <div>
                        <span>{e.title}</span>
                    </div>
                    <img src={e.picture} alt="" />
                </div>
            </a>
            )}
        </div>)
}

export default MyWorks;