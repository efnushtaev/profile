import React from 'react';
import classes from './../../../Styles/modules/profile/profileInfo/ProfileInfo.module.scss';

let ProfileInfo = () => {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.name}>
                    <p>Efim Nushtaev, <br/>Frontend developer</p>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.contacts}>
                    <p>efnushtaev@gmail.com  <br/>+7 (911) 087 6779</p>
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