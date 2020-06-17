import React from 'react';
import styles from './MyWorks.module.scss';
import { withContentHeader } from '../../../Hoc/withContentHeader';

let LandingPages = ({thumbnails}) => {
    return  <div className={styles.container}>
                {thumbnails.map( e =>
                    <a target="_bind" href={e.url}>
                        <div className={styles.itemContainer}>
                            <div>
                                <p className={styles.title}>{e.title}</p>
                                <p className={styles.technology}>{e.technology}</p>
                                <p className={styles.describe}>{e.describe}</p>
                                <p className={styles.year}>{e.year}</p>
                                <a target="_bind" className={styles.gitHubLink} href={e.gitHubRepoURL}>{e.gitHubRepoURL !== '#' ? "Посмотреть код на GitHub" : null}</a>
                            </div>
                            <img src={e.picture} alt="" />
                        </div>
                    </a>
                )}
            </div>
}

export default withContentHeader(LandingPages);