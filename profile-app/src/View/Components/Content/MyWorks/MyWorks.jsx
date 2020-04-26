import React from 'react';
import styles from './MyWorks.module.scss';

let MyWorks = (props) => {
    return  <div className={styles.container}>
                {props.thumbnails.map(e =>
                    <a target="_bind" href={e.url}>
                        <div className={styles.itemContainer}>
                            <div>
                                <p className={styles.title}>{e.title}</p>
                                <p className={styles.body}>{e.body}</p>
                                <p className={styles.describe}>{e.describe}</p>
                                <p className={styles.year}>{e.year}</p>
                                {e.gitHubRepoURL ? <a target="_bind" className={styles.gitHubLink} href={e.gitHubRepoURL}>Открыть на GitHub</a> : null}
                            </div>
                            <img src={e.picture} alt="" />
                        </div>
                    </a>
                )}
            </div>
}

export default MyWorks;