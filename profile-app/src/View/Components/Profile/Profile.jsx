import React from 'react';
import classes from './../../Styles/modules/Profile.module.scss';
import Footer from './Footer/Footer';
import Navig from './Navig/Navig';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Header from './Header/Header';

let Profile = (props) => {
    return (
        <div className={classes.container}>
            <Header />
            <ProfileInfo    name={props.constants.name}
                            profession={props.constants.profession}
                            mail={props.constants.mail}
                            phone={props.constants.phone} />
            <Navig  navigItems={props.constants.navigItems} />
            <Footer />
        </div>
    )
}

export default Profile