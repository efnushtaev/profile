import React from 'react';
import classes from './Profile.module.scss';
import Footer from './Footer/Footer';
import Navig from './Navig/Navig';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Header from './Header/Header';

let Profile = () => {
    return (
        <div className={classes.container}>
            <Header />
            <ProfileInfo />
            <Navig />
            <Footer />
        </div>
    )
}

export default Profile