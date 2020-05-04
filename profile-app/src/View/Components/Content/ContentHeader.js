import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import styles from './../../Styles/modules/Content.module.scss'

class ContentHeader extends React.Component {

    render() {
        return <div className={styles.container} >
            <NavLink to = "/" >
                <div className={styles.backBtn}>
                    <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="12" width="30" height="2" rx="1" fill="#4762EF"/>
                        <path d="M15.7368 1L1 13L15.7368 25" stroke="#4762EF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </NavLink>

            </div>
    }
}

export default ContentHeader