import React from 'react';
import styles from './MyWorks.module.scss';
import { withContentHeader } from '../../../Hoc/withContentHeader';
import { WorkItem } from './workItem/WorkItem';

const LandingPages = ({thumbnails}) => {
    return  <div className={styles.container}>
                {thumbnails.map( e => <WorkItem item={e}/>)}
            </div>
}

export default withContentHeader(LandingPages);