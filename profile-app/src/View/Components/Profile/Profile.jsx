import React from 'react';
import styles from './../../Styles/modules/Profile.module.scss';
import Footer from './Footer/Footer';
import Navig from './Navig/Navig';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Header from './Header/Header';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

let Profile = (props) => {
    return (
        <div className={styles.container}>
            <Header />
            <ProfileInfo    name={props.constants.name}
                            profession={props.constants.profession}
                            mail={props.constants.mail}
                            phone={props.constants.phone} />
            <Navig  navigItems={props.constants.navigItems} />
            {isWidthUp('md', props.width) && <Footer />}
        </div>
    )
}

export default withWidth()(Profile)