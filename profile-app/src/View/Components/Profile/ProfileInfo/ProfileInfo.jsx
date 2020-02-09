import React from 'react';
import classes from './../../../Styles/modules/ProfileInfo.module.scss';

let ProfileInfo = (props) => {
    debugger;
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.name}>
                    <p>{props.name}</p>
                    <p>{props.profession}</p>
                </div>
                <div className={classes.contacts}>
                    <p>{props.mail}</p>
                    <p>{props.phone}</p>
                    <div className={classes.links}>
                        <a href="#"></a>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo