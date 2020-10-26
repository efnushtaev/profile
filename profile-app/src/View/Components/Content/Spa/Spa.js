import React from 'react';
import styles from './Spa.module.scss';
import { withContentHeader } from '../../../Hoc/withContentHeader';

const Spa = ({ spaItems }) => {
  return <div className={styles.container}>
    {spaItems.map((e, i) =>
      <div key={`${e.title}${i}`} className={styles.item}>
        <a target="_bind" href={e.url} className={styles.title}>{e.title}</a>
        <p className={styles.describe}>{e.describe}</p>
        <a className={styles.gitHubLink} target="_bind" href={e.gitHubLink}>Посмотреть код на GitHub</a>
      </div>
    )}
  </div>;
};

export default withContentHeader(Spa);
