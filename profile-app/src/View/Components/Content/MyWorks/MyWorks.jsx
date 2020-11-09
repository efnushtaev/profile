import React from 'react';
import styles from './myWorks.module.scss';
import { withContentHeader } from '../../../Hoc/withContentHeader';
import { WorkItem } from './WorkItem/WorkItem';

const MyWorks = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map(e => (
        <WorkItem item={e} />
      ))}
    </div>
  );
};

export default withContentHeader(MyWorks);
