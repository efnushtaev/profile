import React from 'react';
import classes from './../../../Styles/modules/ProfileInfo.module.scss';

let ProfileInfo = (props) => {
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
                        <a target="_blanc" href="https://codepen.io/efnushtaev"></a>
                        <a target="_blanc" href="https://github.com/efnushtaev"></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo